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

const mockRoomData = [
  {
    roomNumber: "Room 101",
    roomType: "Deluxe",
    housekeeping: "Cleaning in Progress",
    priority: "High",
    floor: "1st",
    reservationStatus: "Checked-In",
    notes: "Guest requested extra towels and pillows.",
  },
  {
    roomNumber: "Room 102",
    roomType: "Standard",
    housekeeping: "Ready",
    priority: "Low",
    floor: "1st",
    reservationStatus: "Reserved",
    notes: "Ensure room is stocked with amenities.",
  },
  {
    roomNumber: "Room 103",
    roomType: "Suite",
    housekeeping: "Needs Cleaning",
    priority: "High",
    floor: "2nd",
    reservationStatus: "Checked-Out",
    notes: "Deep clean due to extended stay.",
  },
  {
    roomNumber: "Room 201",
    roomType: "Standard",
    housekeeping: "Cleaning in Progress",
    priority: "Medium",
    floor: "2nd",
    reservationStatus: "Checked-In",
    notes: "Guest requested fresh linens.",
  },
  {
    roomNumber: "Room 202",
    roomType: "Standard",
    housekeeping: "Needs Cleaning",
    priority: "Medium",
    floor: "2nd",
    reservationStatus: "Checked-Out",
    notes: "Ensure bathroom amenities are replenished.",
  },
  {
    roomNumber: "Room 203",
    roomType: "Deluxe",
    housekeeping: "Ready",
    priority: "Low",
    floor: "2nd",
    reservationStatus: "Reserved",
    notes: "Check minibar supplies and restock if necessary.",
  },
  // Add more rooms...
];

const HouseKeeping = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [selectedRows, setSelectedRows] = useState({});
  const [housekeepingStatuses, setHousekeepingStatuses] = useState(
    mockRoomData.map((room) => room.housekeeping)
  );
  const handleCheckboxChange = (rowId) => {
    setSelectedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const handleHousekeepingChange = (index, value) => {
    const updatedStatuses = [...housekeepingStatuses];
    updatedStatuses[index] = value;
    setHousekeepingStatuses(updatedStatuses);
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
      cell: ({ getValue }) => (
        <span className="font-semibold">{getValue()}</span>
      ),
    },
    {
      accessorKey: "housekeeping",
      header: "Housekeeping Status",
      cell: ({ row, getValue }) => {
        const housekeeping = getValue();
        const index = row.index;
        const className =
          housekeeping === "Ready"
            ? "bg-green-100 text-green-700"
            : housekeeping === "Needs Cleaning"
            ? "bg-red-100 text-red-700"
            : housekeeping === "Cleaning in Progress"
            ? "bg-yellow-100 text-yellow-700"
            : "";

        return (
          <div
            className={`flex items-center gap-2 px-2 py-1 bg-yellow-800 rounded-full ${className}`}
          >
            <select
              value={housekeepingStatuses[index]}
              onChange={(e) =>
                handleHousekeepingChange(index, e.target.value)
              }
              className="bg-transparent p-1 rounded-md"
            >
              <option value="Ready">Ready</option>
              <option value="Needs Cleaning">Needs Cleaning</option>
              <option value="Cleaning in Progress">
                Cleaning in Progress
              </option>
            </select>
          </div>
        );
      },
    },
    {
      accessorKey: "priority",
      header: "Priority",
      cell: ({ getValue }) => {
        const priority = getValue();
        const className =
          priority === "High"
            ? "text-red-700"
            : priority === "Medium"
            ? "text-yellow-700"
            : "text-green-700";
        return (
          <span className={`font-semibold ${className}`}>
            {priority}
          </span>
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
                className={`${
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
                    className="text-customBlack p-5 text-[12px] text-nowrap font-normal leading-[1.4]"
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
