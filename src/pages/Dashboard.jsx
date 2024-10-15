import React from "react";
import FourCards from "../components/FourCards";
// import SelectCard from "../components/SelectCard";
import MoreOptionCard from "../components/MoreOptionCard";
// import TableCard from "../components/TableCard";
// import TableCardLayout from "../components/TableCardLayout";
// import CardWithCaretSelect from "../components/CardWithCaretSelect";
import CaretSelect from "../components/CaretSelect";
import SearchBar from "../components/SearchBar";
import LayoutCard from "../components/LayoutCard";
import LinearBar from "../features/reviews/LinearBar";
import RatingChart from "../features/dashboard/RatingChart";
import TaskCard from "../features/dashboard/TaskCard";
import TimelineCard from "../features/dashboard/TimelineCard";
import { ChartRevenue } from "../features/dashboard/ChartRevenue";
import { ChartBooking } from "../features/dashboard/ChartBooking";
import { ChartReservations } from "../features/dashboard/ChartReservation";
const Dashboard = () => {
  return (
    <>
      <div className="text-3xl grid grid-cols-[2.65fr_1fr] gap-4">
        <div className="flex flex-col gap-5">
          <FourCards />
          <div className="grid grid-cols-[1fr_2fr] gap-5">
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
          <div className="grid grid-cols-[1fr_1fr] gap-5">
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
                <SearchBar placeholder="Search guest, status, etc" />
                <CaretSelect btnText="All Status" />
              </>
            }
          >
            <p>sorrryyyy</p>
          </LayoutCard>
        </div>

        <div className="flex flex-col gap-5">
          <MoreOptionCard title="Overall Rating">
            <RatingChart />
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
