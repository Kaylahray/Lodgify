import React from "react";
import { ChartIncome } from "../features/expense/ChartIncome";
import { EarningsChart } from "../features/expense/EarningChart";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DoubleCaretSelect from "../components/DoubleCaretSelect";
import Button from "../components/Button";
import LayoutCard from "../components/LayoutCard";
import TableHeader from "../components/TableHeader";
import { RxCaretSort, RxCaretUp, RxCaretDown } from "react-icons/rx";
import TableBody from "../components/TableBody";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaEye, FaDownload } from "react-icons/fa"; // React Icons
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import CustomPagination from "../components/CustomPagination";
import { mockExpenseData } from "../features/expense/MockExpenseData";
import CaretSelect from "../components/CaretSelect";
import ExpenseCard from "../features/expense/ExpenseCard";
import {
  Request,
  Transfer,
  TrendDown,
  TrendUp,
  Wallet,
} from "../assets/assets";
const columns = [
  {
    header: "Expense",
    accessorKey: "expense",
    footer: "Expense",
  },
  {
    header: "Category",
    accessorKey: "category",
    footer: "Category",
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
    footer: "Quantity",
  },
  {
    header: "Amount",
    accessorKey: "amount",
    footer: "Amount",
    cell: (info) => {
      const value = info.getValue();
      return <span className="font-semibold">{value}</span>;
    },
  },
  {
    header: "Date",
    accessorKey: "date",
    footer: "Date",
  },
  {
    header: "Status",
    accessorKey: "status",
    footer: "Status",
    cell: (info) => {
      const status = info.getValue();
      const statusClass =
        status === "Completed"
          ? "bg-green-100 text-green-700"
          : status === "Pending"
          ? "bg-yellow-100 text-yellow-700"
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

const Expense = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const table = useReactTable({
    data: mockExpenseData,
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
    <div className="flex flex-col gap-5">
      <div>
        <div className="grid md:grid-cols-[3fr_1fr] gap-5">
          <div className="flex flex-col gap-5">
            <div className="grid md:grid-cols-3 gap-5">
              <ExpenseCard
                title="Total Balance"
                icon={Wallet}
                amount="15,650"
                icon2={TrendUp}
                trendColor="customYellow"
                percentage={3.56}
              />
              <ExpenseCard
                title="Total Income"
                icon={Request}
                amount="45,650"
                icon2={TrendDown}
                trendColor="customPink"
                percentage={1.25}
              />
              <ExpenseCard
                title="Total Expenses"
                icon={Transfer}
                amount="30,000"
                icon2={TrendUp}
                trendColor="customYellow"
                percentage={4.79}
              />
            </div>
            <LayoutCard
              title="Earnings"
              component={<CaretSelect btnText="This year" />}
            >
              <EarningsChart />
            </LayoutCard>
          </div>
          <div className="bg-white p-2">
            <ChartIncome />
          </div>
        </div>
      </div>
      <>
        <LayoutCard
          title="Transactions"
          component={
            <div className="flex gap-4">
              <SearchBar
                placeholder="Search expense"
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
              />
              <DoubleCaretSelect btnText="All Category" />
              <DoubleCaretSelect btnText="All Status" />
              <DoubleCaretSelect
                btnText="1 - 18 June 2028"
                calender={true}
              />
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
                    className="border-b border-gray-200"
                  >
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
        </LayoutCard>
        <CustomPagination table={table} />
      </>
    </div>
  );
};

export default Expense;
