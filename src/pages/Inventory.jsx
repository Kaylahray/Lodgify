import { useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { mockInventoryData } from "../features/inventory/MockData";
import CustomPagination from "../components/CustomPagination";
import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";
import { RxCaretSort, RxCaretUp, RxCaretDown } from "react-icons/rx";

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

  const columns = [
    {
      accessorKey: "itemName",
      header: "Item",
      cell: ({ row }) => {
        const { imageUrl, itemName } = row.original; // Assuming your mock data includes both imageUrl and itemName in one object
        return (
          <div className="flex items-center gap-2">
            <img
              src={imageUrl}
              alt={itemName}
              className="h-12 w-12 object-cover"
            />
            <span className="font-semibold">{itemName}</span>
          </div>
        );
      },
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
        const availabilityClass =
          availability === "Available"
            ? "bg-green-100 text-green-700"
            : availability === "Low"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-red-100 text-red-700";
        return (
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${availabilityClass}`}
          >
            {availability}
          </span>
        );
      },
    },
    {
      accessorKey: "quantityInStock",
      header: "Quantity in Stock",
    },
    {
      accessorKey: "quantityInReorder",
      header: "Quantity in Reorder",
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: () => (
        <div className="flex gap-2">
          <button className="bg-gray-100 px-4 py-1 rounded-md text-xs">
            View Detail
          </button>
          <button className="bg-green-100 text-green-700 px-4 py-1 rounded-md text-xs">
            Reorder
          </button>
        </div>
      ),
    },
  ];

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
    <div className="min-h-[80vh] flex flex-col justify-between">
      <table className="w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="rounded-2xl overflow-hidden"
            >
              <th className="p-4">
                <input type="checkbox" />
              </th>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="p-4 cursor-pointer text-nowrap text-[#6E6E6E] text-[11px] font-normal leading-[1.4]"
                >
                  <div className="flex items-center gap-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <span>
                      {header.column.getIsSorted() === "asc" ? (
                        <RxCaretUp />
                      ) : header.column.getIsSorted() === "desc" ? (
                        <RxCaretDown />
                      ) : (
                        <RxCaretSort />
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={` border-b border-b-[#E7E7E7] ${
                selectedRows[row.id] ? "bg-gray-200" : ""
              }`}
            >
              <td className="p-4">
                <input
                  type="checkbox"
                  checked={!!selectedRows[row.id]}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="text-customBlack text-nowrap p-5 text-[12px] font-normal leading-[1.4]"
                >
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </TableBody>
      </table>
      <CustomPagination table={table} />
    </div>
  );
};

export default InventoryTable;
