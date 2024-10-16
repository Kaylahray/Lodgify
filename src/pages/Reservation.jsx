import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DoubleCaretSelect from "../components/DoubleCaretSelect";
import Button from "../components/Button";
import LayoutCard from "../components/LayoutCard";
import TableHeader from "../components/TableHeader";
import { RxCaretSort, RxCaretUp, RxCaretDown } from "react-icons/rx";
import TableBody from "../components/TableBody";
import { FaEye, FaEyeSlash, FaEdit } from "react-icons/fa"; // React Icons
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { DateTime } from "luxon";
import CustomPagination from "../components/CustomPagination";
import { useReservation } from "../hooks/usePage";
import { NavLink } from "react-router-dom";

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
          className={`
           
              ${
                status === "Confirmed"
                  ? " px-[6px] py-[2px] pb-[3px] rounded-[4px] bg-[#D5F6E5]"
                  : status === "Pending"
                  ? " px-[6px] py-[2px] pb-[3px] rounded-[4px] bg-[#FEE]"
                  : "bg-white"
              }          
         `}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      const action = row.getValue("action");
      return (
        <div className="flex gap-2">
          <div className="flex rounded-md gap-1 items-center bg-[#f8f8f8] text-lightGray">
            <button className="p-1.5">
              <FaEye />
            </button>
            <button className="p-1.5">
              <FaEdit />
            </button>
          </div>

          <span
            className={`
              ${
                action === "Cancel"
                  ? " px-3 py-1.5 rounded-[4px] bg-[#FEE]"
                  : action === "Confirm"
                  ? " px-[6px] py-[2px] pb-[3px] rounded-[4px] bg-[#E7F68E]"
                  : "bg-white"
              }          
         `}
          >
            {action}
          </span>
        </div>
      );
    },
  },
];

const Reservation = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const { data, isLoading, error } = useReservation();

  // Access reservations from the fetched data
  const reservationData = data?.[0]?.reservations || [];

  const table = useReactTable({
    data: reservationData,
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
    <>
      <LayoutCard
        title="Reservation List"
        component={
          <div className="flex lg:flex-row gap-2 items-start flex-col">
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
          </div>
        }
      >
        <div className="min-h-[80vh] flex flex-col justify-between ">
          <table className="w-full ">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="rounded-2xl overflow-hidden"
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className="p-4 cursor-pointer text-[#6E6E6E] text-nowrap text-[11px] font-normal leading-[1.4]"
                    >
                      <div className="flex items-center gap-2">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        <span>
                          {header.column.getIsSorted() === "asc" ? (
                            <RxCaretUp />
                          ) : header.column.getIsSorted() ===
                            "desc" ? (
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
                  className="border-b border-b-[#E7E7E7]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="text-customBlack text-nowrap p-5 text-[12px] font-normal leading-[1.4]"
                    >
                      <NavLink
                        to={`/reservation/guest-profile/${row.original.id}`} // assuming guestId exists in your data
                        className="flex w-full"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </NavLink>
                    </td>
                  ))}
                </tr>
              ))}
            </TableBody>
          </table>
        </div>
      </LayoutCard>
      <CustomPagination table={table} />
    </>
  );
};

export default Reservation;
