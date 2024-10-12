import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DoubleCaretSelect from "../components/DoubleCaretSelect";
import Button from "../components/Button";
import LayoutCard from "../components/LayoutCard";
import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import axios from "axios";
import { DateTime } from "luxon";
import CustomPagination from "../components/CustomPagination";

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
    header: "Request ",
    accessorKey: "request",
    footer: "Request",
  },
  {
    header: "Nights",
    accessorKey: "duration",
    footer: "Nights",
  },
  {
    header: "Check In / Check Out",
    accessorKey: "check-in", // Make sure this matches the property name
    footer: "Check In / Check Out",
    cell: (info) => {
      const checkInDate = DateTime.fromISO(
        info.row.original["check-in"]
      ); // Use the correct property name
      const checkOutDate = checkInDate.plus({
        days: parseInt(info.row.original.duration), // Ensure duration is a number
      });
      const formattedCheckIn = checkInDate.toLocaleString(
        DateTime.DATE_MED
      );
      const formattedCheckOut = checkOutDate.toLocaleString(
        DateTime.DATE_MED
      );

      return `${formattedCheckIn} - ${formattedCheckOut}`;
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
    accessorKey: "action",
    footer: "Actions",
    cell: (info) => {
      const action = info.getValue();
      return (
        <span
          style={{
            padding: "5px 10px",
            backgroundColor:
              action === "Cancel"
                ? "green"
                : action === "Confirm"
                ? "yellow"
                : "red",
            color: "white",
            borderRadius: "5px",
          }}
        >
          {action}
        </span>
      );
    },
  },
];
const fetchReservations = async () => {
  const { data } = await axios.get(
    "https://6709efecaf1a3998baa2a44f.mockapi.io/hotel/reservations"
  );
  return data;
};

const Reservation = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const { data, isLoading, error } = useQuery({
    queryKey: ["reservations"],
    queryFn: fetchReservations,
    placeholderData: keepPreviousData,
  });
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
    <LayoutCard
      title="Reservation List"
      component={
        <>
          <SearchBar
            placeholder="Search guest, status, etc"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
          />
          <DoubleCaretSelect
            btnText="All Status"
            funnel={true}
            bg="customG"
          />
          <DoubleCaretSelect
            btnText="19 - 24 June, 2028"
            calender={true}
            bg="customG"
          />
          <Button btnText="Add Booking" />
        </>
      }
    >
      <div className="min-h-[80vh] flex flex-col justify-between">
        <table className=" w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="">
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
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
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
          </TableBody>
        </table>
      </div>
      <CustomPagination table={table} />
    </LayoutCard>
  );
};

export default Reservation;
