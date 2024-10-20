import { RxCaretDown, RxCaretSort, RxCaretUp } from "react-icons/rx";
import {
  bookings,
  bookingsColumns,
} from "../features/dashboard/BookingList";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

// import TableCard from "../components/TableCard";
// import TableCardLayout from "../components/TableCardLayout";
// import CardWithCaretSelect from "../components/CardWithCaretSelect";
import CaretSelect from "../components/CaretSelect";
import { ChartBooking } from "../features/dashboard/ChartBooking";
import { ChartReservations } from "../features/dashboard/ChartReservation";
import { ChartRevenue } from "../features/dashboard/ChartRevenue";
import FourCards from "../components/FourCards";
import LayoutCard from "../components/LayoutCard";
import LinearBar from "../features/reviews/LinearBar";
// import SelectCard from "../components/SelectCard";
import MoreOptionCard from "../components/MoreOptionCard";
import { NavLink } from "react-router-dom";
import ProgressBar from "../features/dashboard/RatingChart";
import SearchBar from "../components/SearchBar";
import TableBody from "../components/TableBody";
import TableHeader from "../components/TableHeader";
import TaskCard from "../features/dashboard/TaskCard";
import TimelineCard from "../features/dashboard/TimelineCard";
import { useState } from "react";

const Dashboard = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  // Access reservations from the fetched data

  const table = useReactTable({
    data: bookings,
    columns: bookingsColumns,
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
      <div className="grid gap-4 text-3xl xl:grid-cols-7">
        <div className="flex flex-col col-span-7 gap-5 p-4 xl:col-span-5">
          <FourCards />
          <div className="grid xl:grid-cols-[1fr_2fr] gap-5">
            <MoreOptionCard title="Room Availability">
              <LinearBar />
            </MoreOptionCard>
            <LayoutCard
              title="Revenue"
              component={
                <>
                  <CaretSelect btnText="Last 6 Months" />
                </>
              }
            >
              <ChartRevenue />
            </LayoutCard>
          </div>
          <div className="grid xl:grid-cols-[1fr_1fr] gap-5">
            <LayoutCard
              title="Reservation"
              component={
                <>
                  <CaretSelect btnText="Last 7 Days" />
                </>
              }
            >
              <ChartReservations />
            </LayoutCard>
            <MoreOptionCard title="Booking by Platform">
              <ChartBooking />
            </MoreOptionCard>
          </div>
          <LayoutCard
            title="Booking List"
            component={
              <>
                <SearchBar
                  placeholder="Search guest, status, etc"
                  value={filtering}
                  onChange={(e) => setFiltering(e.target.value)}
                />
                <CaretSelect btnText="All Status" />
              </>
            }
          >
            <div className="flex flex-col justify-between !w-[70vw]">
              <table className="w-full">
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr
                      key={headerGroup.id}
                      className="overflow-hidden rounded-2xl"
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
                              {header.column.getIsSorted() ===
                              "asc" ? (
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
        </div>

        <div className="flex xl:w-[355px] -2xl:w-[935px] mb-10 flex-col col-span-7 gap-5 p-4 xl:col-span-2 xl:fixed lg:bottom-0 xl:right-0 xl:top-20 xl:overflow-y-auto">
          <MoreOptionCard title="Overall Rating">
            <ProgressBar />
          </MoreOptionCard>

          <TaskCard />

          <MoreOptionCard title="Recent Activities">
            <TimelineCard />
          </MoreOptionCard>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
