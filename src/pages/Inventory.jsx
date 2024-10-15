import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";

const mockInventoryData = [
  {
    item: "Bath Towels",
    category: "Linen",
    availability: "Available",
    stock: 120,
    reorder: 50,
  },
  {
    item: "Shampoo Bottles",
    category: "Toiletries",
    availability: "Low",
    stock: 20,
    reorder: 100,
  },
  {
    item: "Coffee Pods",
    category: "Refreshments",
    availability: "Out of Stock",
    stock: 0,
    reorder: 200,
  },
  {
    item: "Room Key Cards",
    category: "Electronics",
    availability: "Available",
    stock: 500,
    reorder: 100,
  },
  {
    item: "Cleaning Supplies",
    category: "Housekeeping",
    availability: "Available",
    stock: 300,
    reorder: 50,
  },
  {
    item: "Mini Bar Snacks",
    category: "Refreshments",
    availability: "Low",
    stock: 15,
    reorder: 50,
  },
  // Add more items as needed...
];

const columns = [
  {
    accessorKey: "item",
    header: "Item",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "availability",
    header: "Availability",
    cell: ({ getValue }) => {
      const availability = getValue();
      const className =
        availability === "Available"
          ? "bg-green-100 text-green-700"
          : availability === "Low"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-red-100 text-red-700";
      return (
        <span className={`px-2 py-1 rounded-full ${className}`}>
          {availability}
        </span>
      );
    },
  },
  {
    accessorKey: "stock",
    header: "Quantity In Stock",
  },
  {
    accessorKey: "reorder",
    header: "Quantity to Reorder",
  },
  {
    accessorKey: "actions",
    header: "Action",
    cell: () => (
      <>
        <button className="text-blue-500">View Detail</button>
        <button className="ml-2 text-green-500">Reorder</button>
      </>
    ),
  },
];

const InventoryTable = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [selectedRows, setSelectedRows] = useState({});

  const handleCheckboxChange = (rowId) => {
    setSelectedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const table = useReactTable({
    data: mockInventoryData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div>
      <input
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
        placeholder="Search..."
        className="mb-4 p-2 border"
      />
      <table className="min-w-full bg-white border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              <th className="p-4">
                <input type="checkbox" />
              </th>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="p-4 cursor-pointer"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getIsSorted() === "asc"
                    ? " 🔼"
                    : header.column.getIsSorted() === "desc"
                    ? " 🔽"
                    : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={selectedRows[row.id] ? "bg-gray-200" : ""}
            >
              <td className="p-4">
                <input
                  type="checkbox"
                  checked={!!selectedRows[row.id]}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4 text-left">
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <span className="mx-4">
          Page {table.getState().pagination.pageIndex + 1}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InventoryTable;
