import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CaretSelect from "../components/CaretSelect";
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

import SecondLayoutCard from "../components/SecondLayoutCard";
import { SearchTwo, Faders } from "../assets/assets";
import Button from "../components/Button";
import { mockRoomData } from "../features/concierge/MockRoomData";

const Concierge = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const columns = [
    {
      header: "Name",
      accessorKey: "name",
      cell: (info) => {
        const { name, id, avatar } = info.row.original;
        return (
          <div className="flex items-center gap-2">
            <img
              src={avatar} // Use generated faker avatar here
              alt={name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div>{name}</div>
              <div className="text-xs text-gray-500">{id}</div>
            </div>
          </div>
        );
      },
    },
    {
      header: "Position",
      accessorKey: "position",
    },
    {
      header: "Schedule",
      accessorKey: "schedule",
      cell: (info) => {
        const schedule = info.getValue().split("\n");
        return (
          <div className="flex flex-col">
            <span>{schedule[0]}</span>
            <span className="text-gray-500 text-sm">
              {schedule[1]}
            </span>
          </div>
        );
      },
    },
    {
      header: "Contact",
      accessorKey: "contact",
    },
    {
      header: "Email",
      accessorKey: "email",
      cell: (info) => {
        return (
          <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>
        );
      },
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (info) => {
        const status = info.getValue();
        const statusClass =
          status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700";
        return (
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${statusClass}`}
          >
            {status}
          </span>
        );
      },
    },
  ];

  const table = useReactTable({
    data: mockRoomData,
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
      <SecondLayoutCard
        reverse={true}
        extra1={
          <div className="p-2 rounded-md bg-[#F8F8F8)]">
            <SearchTwo />
          </div>
        }
        extra2={
          <div className="p-2 rounded-md bg-[#F8F8F8)]">
            <Faders />
          </div>
        }
        extra3={<Button btnText="Add Concierge" />}
        search={
          <SearchBar
            placeholder="Search guest, status, etc"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
          />
        }
        component={
          <>
            <CaretSelect btnText="All Room" bg="customG" />
            <CaretSelect btnText="All Status" bg="customG" />
            <CaretSelect btnText="All Priority" bg="customG" />
          </>
        }
      >
        <div className="min-h-[80vh] flex flex-col justify-between">
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
      </SecondLayoutCard>
      <CustomPagination table={table} />
    </>
  );
};

export default Concierge;
