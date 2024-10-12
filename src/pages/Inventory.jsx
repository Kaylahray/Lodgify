import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import axios from "axios";
import { DateTime } from "luxon"; // For date formatting

// Columns for the table
const columns = [
  {
    header: "Guest",
    accessorKey: "guest",
    footer: "Guest",
  },
  {
    header: "Room",
    accessorKey: "room",
    footer: "Room",
  },
  {
    header: "Request",
    accessorKey: "request",
    footer: "Request",
  },
  {
    header: "Nights",
    accessorKey: "nights",
    footer: "Nights",
  },
  {
    header: "Check In / Check Out",
    accessorKey: "checkIn",
    footer: "Check In / Check Out",
    cell: (info) => {
      const checkIn = DateTime.fromISO(
        info.row.original.checkIn
      ).toLocaleString(DateTime.DATE_MED);
      const checkOut = DateTime.fromISO(
        info.row.original.checkOut
      ).toLocaleString(DateTime.DATE_MED);
      return `${checkIn} - ${checkOut}`;
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    footer: "Status",
    cell: (info) => {
      const status = info.getValue();
      return (
        <span
          style={{
            padding: "5px 10px",
            backgroundColor:
              status === "Confirmed"
                ? "green"
                : status === "Pending"
                ? "yellow"
                : "red",
            color: "white",
            borderRadius: "5px",
          }}
        >
          {status}
        </span>
      );
    },
  },
  {
    header: "Actions",
    accessorKey: "actions",
    footer: "Actions",
    cell: () => (
      <>
        <button
          style={{
            marginRight: "5px",
            padding: "5px",
            background: "green",
            color: "white",
          }}
        >
          Confirm
        </button>
        <button
          style={{
            padding: "5px",
            background: "red",
            color: "white",
          }}
        >
          Cancel
        </button>
      </>
    ),
  },
];

// Mockaroo Data Fetch
const fetchReservations = async () => {
  const { data } = await axios.get("http://localhost:8000/data");
  return data;
};

const Inventory = () => {
  // Fetching data using Tanstack Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["reservations"],
    queryFn: fetchReservations,
  });

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  // Use React Table
  const table = useReactTable({
    data,
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
        style={{
          marginBottom: "10px",
          padding: "5px",
          width: "300px",
        }}
      />

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{
                    cursor: "pointer",
                    padding: "10px",
                    borderBottom: "1px solid black",
                  }}
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
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid black",
                  }}
                >
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

      <div style={{ marginTop: "10px" }}>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </div>

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          style={{ marginRight: "5px", padding: "5px" }}
        >
          First page
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          style={{ marginRight: "5px", padding: "5px" }}
        >
          Previous page
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          style={{ marginRight: "5px", padding: "5px" }}
        >
          Next page
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          style={{ padding: "5px" }}
        >
          Last Page
        </button>
      </div>
    </div>
  );
};

export default Inventory;
