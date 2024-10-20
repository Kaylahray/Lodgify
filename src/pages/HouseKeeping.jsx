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
import { mockHouseKeepingData } from "../features/houseKeeping/mockHousekeepingData";
const HouseKeeping = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [selectedRows, setSelectedRows] = useState({});

  const handleCheckboxChange = (rowId) => {
    setSelectedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  // Define columns here, so `housekeepingStatuses` is accessible
  const columns = [
    {
      accessorKey: "roomNumber",
      header: "Room Number",
    },
    {
      accessorKey: "roomType",
      header: "Room Type",
      cell: ({ getValue }) => <span>{getValue()}</span>,
    },
    {
      accessorKey: "housekeeping",
      header: "Housekeeping Status",
      cell: ({ getValue }) => {
        const housekeeping = getValue();
        let bgClass = "";
        let textClass = "";

        // Set background and text colors based on status
        switch (housekeeping) {
          case "Ready":
            bgClass = "bg-[#E7F68E]";
            break;
          case "Needs Cleaning":
            bgClass = "bg-[#FFC7C7]";
            break;
          case "Needs Inspection":
            bgClass = "bg-[#FEE]";
            break;
          case "Cleaning in Progress":
            bgClass = "bg-[#D5F6E5]";
            break;
          default:
            break;
        }

        return (
          <div
            className={`flex items-center w-fit gap-[5px] px-[6px] py-[3px] rounded-[4px] bg-[#D5F6E5]"  justify-between  ${bgClass}`}
          >
            <span>{housekeeping}</span>
            <RxCaretDown className="ml-2" />
          </div>
        );
      },
    },
    {
      accessorKey: "priority",
      header: "Priority",
      cell: ({ getValue }) => {
        const priority = getValue();
        let textClass = "";
        let bgClass = "";

        // Set background and text colors based on priority
        switch (priority) {
          case "High":
            textClass = "text-red-700";
            bgClass = "bg-red-100";
            break;
          case "Medium":
            textClass = "text-yellow-700";
            bgClass = "bg-yellow-100";
            break;
          case "Low":
            textClass = "text-green-700";
            bgClass = "bg-green-100";
            break;
          default:
            break;
        }

        return (
          <div
            className={`flex items-center justify-between px-2 py-1 rounded-full ${bgClass} ${textClass}`}
          >
            <span>{priority}</span>
            <RxCaretDown className="ml-2" />
          </div>
        );
      },
    },
    {
      accessorKey: "floor",
      header: "Floor",
    },
    {
      accessorKey: "reservationStatus",
      header: "Reservation Status",
    },
    {
      accessorKey: "notes",
      header: "Notes",
    },
  ];

  const table = useReactTable({
    data: mockHouseKeepingData,
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
    <SecondLayoutCard
      search={
        <SearchBar
          placeholder="Search guest, status, etc"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
        />
      }
      component={
        <>
          <CaretSelect btnText="All Room" />
          <CaretSelect btnText="All Status" />
          <CaretSelect btnText="All Priority" />
        </>
      }
    >
      <div className="min-h-[80vh] flex flex-col justify-between">
        <table className="w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="rounded-2xl overflow-hidden"
              >
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="p-3 cursor-pointer text-nowrap text-[#6E6E6E] text-[11px] font-normal leading-[1.4]"
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
                    className="text-customBlack text-nowrap p-3 text-[12px] font-normal leading-[1.4]"
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
      <CustomPagination table={table} />
    </SecondLayoutCard>
  );
};

export default HouseKeeping;
