import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DoubleCaretSelect from "../components/DoubleCaretSelect";
import Button from "../components/Button";
import LayoutCard from "../components/LayoutCard";
import TableHeader from "../components/TableHeader";
import { RxCaretSort, RxCaretUp, RxCaretDown } from "react-icons/rx";
import { MdOutlineFileDownload } from "react-icons/md";
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
import CustomPagination from "../components/CustomPagination";
import { mockInvoiceData } from "../features/invoice/mockInvoiceData";

const columns = [
  {
    accessorKey: "guest",
    header: "Guest Name",
  },
  {
    accessorKey: "bookingId",
    header: "Booking ID",
  },
  {
    accessorKey: "room",
    header: "Room",
  },
  {
    accessorKey: "price",
    header: "Price (per night)",
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`${
          row.original.status === "Paid"
            ? "text-green-500 bg-green-50"
            : "text-red-500 bg-red-50"
        } px-2 py-1 rounded-full text-sm font-medium`}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: () => (
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700">
          <FaEye />
        </button>
        <button className="flex gap-1 items-center px-2 py-1.5 rounded-md bg-customYellow hover:bg-yellow-200 ">
          <MdOutlineFileDownload />
          <span>Download</span>
        </button>
      </div>
    ),
  },
];

const Invoice = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  // Access reservations from the fetched data

  const table = useReactTable({
    data: mockInvoiceData,
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
      </LayoutCard>
      <CustomPagination table={table} />
    </>
  );
};

export default Invoice;
