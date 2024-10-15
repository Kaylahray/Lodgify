









import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { FaEye, FaEyeSlash, FaEdit } from "react-icons/fa"; // React Icons
import TableHeader from "../components/TableHeader";

const mockReservationData = [
  {
    guest: "Angus Copper",
    room: "Deluxe 101",
    request: "Late Check-Out",
    duration: "3 nights",
    checkIn: "June 19, 2028",
    checkOut: "June 22, 2028",
    status: "Confirmed",
  },
  {
    guest: "Catherine Lopp",
    room: "Standard 202",
    request: "None",
    duration: "2 nights",
    checkIn: "June 20, 2028",
    checkOut: "June 21, 2028",
    status: "Confirmed",
  },
  {
    guest: "Edgar Irving",
    room: "Suite 303",
    request: "Extra Pillows",
    duration: "5 nights",
    checkIn: "June 19, 2028",
    checkOut: "June 24, 2028",
    status: "Pending",
  },
  {
    guest: "Gertrude Bale",
    room: "Standard 204",
    request: "Early Check-In",
    duration: "3 nights",
    checkIn: "June 20, 2028",
    checkOut: "June 23, 2028",
    status: "Confirmed",
  },
  {
    guest: "Ice B. Holand",
    room: "Deluxe 105",
    request: "Airport Pickup",
    duration: "4 nights",
    checkIn: "June 19, 2028",
    checkOut: "June 23, 2028",
    status: "Pending",
  },
  // Add more mock data...
];

const columns = [
  {
    accessorKey: "guest",
    header: "Guest",
  },
  {
    accessorKey: "room",
    header: "Room",
  },
  {
    accessorKey: "request",
    header: "Request",
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "checkIn",
    header: "Check-in",
  },
  {
    accessorKey: "checkOut",
    header: "Check-out",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue();
      const className =
        status === "Confirmed"
          ? "bg-green-100 text-green-700"
          : "bg-yellow-100 text-yellow-700";
      return (
        <span className={`px-2 py-1 rounded-full ${className}`}>
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Action",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <div className="flex space-x-2">
          <button className="text-blue-500">
            <FaEdit />
          </button>
          <button className="text-gray-500">
            <FaEye />
          </button>
          <button
            className={`ml-2 ${
              status === "Confirmed"
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {status === "Confirmed" ? "Cancel" : "Confirm"}
          </button>
        </div>
      );
    },
  },
];

const ReservationTable = () => {
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
    data: mockReservationData,
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
      <div className="flex justify-between mb-4">
        <input
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          placeholder="Search guest, status, etc."
          className="p-2 border"
        />
        <div>
          <select className="border p-2 mr-2">
            <option value="All Status">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
          </select>
          <input
            type="date"
            className="border p-2"
            placeholder="Select dates"
          />
        </div>
        <button className="ml-2 bg-green-500 text-white p-2 rounded">
          Add Booking
        </button>
      </div>
      <div class="overflow-hidden rounded-lg border border-gray-200">
        <table class="min-w-full border-separate border-spacing-0">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="">
                <th className="px-4 pr-4 pl-5">
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
          </TableHeader>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={
                  selectedRows[row.id]
                    ? "bg-gray-200 border border-transparent"
                    : " border-b border-[#e7e7e7]"
                }
              >
                <td className="py-4 pl-5 pr-4">
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
      </div>
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

export default ReservationTable;
