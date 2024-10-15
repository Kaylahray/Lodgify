import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DoubleCaretSelect from "../components/DoubleCaretSelect";
import Button from "../components/Button";
import LayoutCard from "../components/LayoutCard";
import TableHeader from "../components/TableHeader";
import { RxCaretSort, RxCaretUp, RxCaretDown } from "react-icons/rx";
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

const columns = [
  {
    header: "Name",
    accessorKey: "name",
    footer: "Name",
    cell: (info) => {
      const { name, id } = info.row.original;
      return (
        <div className="flex items-center gap-2">
          <img
            src="/avatar-placeholder.png" // Placeholder avatar
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
    footer: "Position",
  },
  {
    header: "Schedule",
    accessorKey: "schedule",
    footer: "Schedule",
  },
  {
    header: "Contact",
    accessorKey: "contact",
    footer: "Contact",
  },
  {
    header: "Email",
    accessorKey: "email",
    footer: "Email",
    cell: (info) => {
      return (
        <a
          href={`mailto:${info.getValue()}`}
          className="text-blue-500"
        >
          {info.getValue()}
        </a>
      );
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    footer: "Status",
    cell: (info) => {
      const status = info.getValue();
      const statusClass =
        status === "Active"
          ? "bg-green-100 text-green-700"
          : status === "Inactive"
          ? "bg-red-100 text-red-700"
          : "bg-gray-100 text-gray-700";
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

const Concierge = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [filters, setFilters] = useState({
    position: "All Position",
    status: "All Status",
    schedule: "All Schedule",
  });

  // Example data for table
  const data = [
    {
      name: "Bebe W. Cullen",
      id: "ELG001",
      position: "Head Concierge",
      schedule: "Monday - Friday\n8 AM - 4 PM",
      contact: "+1 (555) 234-5678",
      email: "bebe.cullen@example.com",
      status: "Active",
    },
    {
      name: "Awar King",
      id: "ELG002",
      position: "Concierge",
      schedule: "Monday - Friday\n12 PM - 8 PM",
      contact: "+1 (555) 345-6789",
      email: "awar.king@example.com",
      status: "Active",
    },
    // Add more mock data
  ];

  // Filter logic
  const filteredData = data.filter((row) => {
    const matchPosition =
      filters.position === "All Position" ||
      row.position === filters.position;
    const matchStatus =
      filters.status === "All Status" ||
      row.status === filters.status;
    const matchSchedule =
      filters.schedule === "All Schedule" ||
      row.schedule.includes(filters.schedule);

    const matchSearch =
      row.name.toLowerCase().includes(filtering.toLowerCase()) ||
      row.email.toLowerCase().includes(filtering.toLowerCase()) ||
      row.contact.includes(filtering);

    return (
      matchPosition && matchStatus && matchSchedule && matchSearch
    );
  });

  const table = useReactTable({
    data: filteredData,
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
    <LayoutCard
      title="Concierge List"
      component={
        <div className="flex gap-4 items-center">
          <DoubleCaretSelect
            btnText={filters.position}
            options={["All Position", "Head Concierge", "Concierge"]}
            onChange={(value) =>
              setFilters({ ...filters, position: value })
            }
          />
          <DoubleCaretSelect
            btnText={filters.status}
            options={["All Status", "Active", "Inactive"]}
            onChange={(value) =>
              setFilters({ ...filters, status: value })
            }
          />
          <DoubleCaretSelect
            btnText={filters.schedule}
            options={[
              "All Schedule",
              "Monday - Friday",
              "Saturday - Sunday",
            ]}
            onChange={(value) =>
              setFilters({ ...filters, schedule: value })
            }
          />
          <SearchBar
            placeholder="Search by name, email, etc."
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
          />
          <Button btnText="Add Concierge" />
        </div>
      }
    >
      <div className="min-h-[80vh] flex flex-col justify-between">
        <table className="w-full ">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-gray-100">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="p-4 cursor-pointer text-gray-600 text-sm font-normal"
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
              <tr key={row.id} className="border-b border-gray-200">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="p-4 text-gray-700 text-sm"
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
    </LayoutCard>
  );
};

export default Concierge;
