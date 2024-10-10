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
import RatingChart from "../features/reviews/dashboard/RatingChart";
const Dashboard = () => {
  return (
    <>
      <div className="text-3xl grid grid-cols-[3fr_1fr] gap-4">
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
              <p>sorrryyyy</p>
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
              <p>sorrryyooo</p>
            </LayoutCard>
            <MoreOptionCard title="Booking by Platform">
              hellow
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

        <div className="bg-green-600 flex flex-col gap-5">
          <MoreOptionCard title="Overall Rating">
            <RatingChart />
          </MoreOptionCard>
          <MoreOptionCard title="Tasks">hellow</MoreOptionCard>
          <MoreOptionCard title="Recent Activities">
            hellow
          </MoreOptionCard>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
