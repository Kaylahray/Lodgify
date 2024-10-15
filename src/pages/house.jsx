import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";

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
  // Add more rooms...
];

const RoomTable = () => {
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
        const index = row.index;
        return (
          <select
            value={housekeepingStatuses[index]}
            onChange={(e) =>
              handleHousekeepingChange(index, e.target.value)
            }
            className="bg-gray-100 p-1 rounded-md"
          >
            <option value="Ready">Ready</option>
            <option value="Needs Cleaning">Needs Cleaning</option>
            <option value="Cleaning in Progress">
              Cleaning in Progress
            </option>
          </select>
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
    <div>
      <input
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
        placeholder="Search room, floor, etc."
        className="mb-4 p-2 border rounded-md w-full"
      />
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
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
                  className="p-4 cursor-pointer text-left border-b"
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
              className={`${
                selectedRows[row.id] ? "bg-gray-200" : ""
              } hover:bg-gray-100`}
            >
              <td className="p-4">
                <input
                  type="checkbox"
                  checked={!!selectedRows[row.id]}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4 text-left border-b">
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
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
        >
          Previous
        </button>
        <span className="mx-4">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RoomTable;












import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";

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
          <div className={`flex items-center gap-2 px-2 py-1 bg-yellow-800 rounded-full ${className}`}>
            {/* Existing badge display */}
            <span className="font-semibold">
              {housekeeping}
            </span>
            {/* Housekeeping status dropdown */}
            <select
              value={housekeepingStatuses[index]}
              onChange={(e) => handleHousekeepingChange(index, e.target.value)}
              className="bg-transparent p-1 rounded-md"
            >
              <option value="Ready">Ready</option>
              <option value="Needs Cleaning">Needs Cleaning</option>
              <option value="Cleaning in Progress">Cleaning in Progress</option>
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

// const RoomTable = () => {
//   const [sorting, setSorting] = useState([]);
//   const [filtering, setFiltering] = useState("");
//   const [selectedRows, setSelectedRows] = useState({});

//   const handleCheckboxChange = (rowId) => {
//     setSelectedRows((prev) => ({
//       ...prev,
//       [rowId]: !prev[rowId],
//     }));
//   };

//   const table = useReactTable({
//     data: mockRoomData,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     state: {
//       sorting: sorting,
//       globalFilter: filtering,
//     },
//     onSortingChange: setSorting,
//     onGlobalFilterChange: setFiltering,
//   });

//   return (
//     <div>
//       <input
//         value={filtering}
//         onChange={(e) => setFiltering(e.target.value)}
//         placeholder="Search room, floor, etc."
//         className="mb-4 p-2 border"
//       />
//       <div className="mb-4">
//         <select className="border p-2 mr-2">
//           <option value="All Room">All Room</option>
//           <option value="Deluxe">Deluxe</option>
//           <option value="Standard">Standard</option>
//           <option value="Suite">Suite</option>
//         </select>
//         <select className="border p-2 mr-2">
//           <option value="All Status">All Status</option>
//           <option value="Ready">Ready</option>
//           <option value="Needs Cleaning">Needs Cleaning</option>
//           <option value="Cleaning in Progress">
//             Cleaning in Progress
//           </option>
//         </select>
//         <select className="border p-2">
//           <option value="All Priority">All Priority</option>
//           <option value="High">High</option>
//           <option value="Medium">Medium</option>
//           <option value="Low">Low</option>
//         </select>
//       </div>
//       <table className="min-w-full bg-white border">
//         <thead>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               <th className="p-4">
//                 <input type="checkbox" />
//               </th>
//               {headerGroup.headers.map((header) => (
//                 <th
//                   key={header.id}
//                   onClick={header.column.getToggleSortingHandler()}
//                   className="p-4 cursor-pointer"
//                 >
//                   {flexRender(
//                     header.column.columnDef.header,
//                     header.getContext()
//                   )}
//                   {header.column.getIsSorted() === "asc"
//                     ? " 🔼"
//                     : header.column.getIsSorted() === "desc"
//                     ? " 🔽"
//                     : null}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map((row) => (
//             <tr
//               key={row.id}
//               className={selectedRows[row.id] ? "bg-gray-200" : ""}
//             >
//               <td className="p-4">
//                 <input
//                   type="checkbox"
//                   checked={!!selectedRows[row.id]}
//                   onChange={() => handleCheckboxChange(row.id)}
//                 />
//               </td>
//               {row.getVisibleCells().map((cell) => (
//                 <td key={cell.id} className="p-4 text-left">
//                   {flexRender(
//                     cell.column.columnDef.cell,
//                     cell.getContext()
//                   )}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="mt-4">
//         <button
//           onClick={() => table.previousPage()}
//           disabled={!table.getCanPreviousPage()}
//         >
//           Previous
//         </button>
//         <span className="mx-4">
//           Page {table.getState().pagination.pageIndex + 1}
//         </span>
//         <button
//           onClick={() => table.nextPage()}
//           disabled={!table.getCanNextPage()}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RoomTable;



























import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DoubleCaretSelect from "../components/DoubleCaretSelect";
import Button from "../components/Button";
import LayoutCard from "../components/LayoutCard";
import TableHeader from "../components/TableHeader";
import TableBody from "../components/TableBody";

import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import CustomPagination from "../components/CustomPagination";
import { useBookingHistory } from "../hooks/usePage";

const columns = [
  {
    header: "Image",
    accessorKey: "image",
    cell: ({ row }) => {
      const bookingId = row.getValue("room-type");
      const imageUrl = `https://lorem.toneflix.com.ng/images/event?u=${bookingId}&w=56&h=79`;
      return (
        <img
          src={imageUrl}
          alt={`Booking ${bookingId}`}
          className="w-16 h-16 object-cover"
        />
      );
    },
  },
  {
    header: "Booking Id",
    accessorKey: "booking-id",
    footer: "Booking Id",
  },
  {
    header: "Booking Date ",
    accessorKey: "booking-date",
    footer: "Booking Date",
  },
  {
    header: "Room Type",
    accessorKey: "room-type",
    footer: "Room Type",
  },
  {
    header: "Room Number",
    accessorKey: "room-number",
    footer: "Room Number",
  },
  {
    header: "Check In",
    accessorKey: "check-in", // Make sure this matches the property name
    footer: "Check In",
  },

  {
    header: "Check Out",
    accessorKey: "check-out",
    footer: "Check Out",
  },
];

const Expense = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const { data, isLoading, error } = useBookingHistory();
  console.log(data);

  const bookingHistoryData = data?.[1]?.bookingHistory || [];

  console.log(bookingHistoryData); // Inspect the final extracted data

  console.log(bookingHistoryData);
  const table = useReactTable({
    data: bookingHistoryData,
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

export default Expense;
