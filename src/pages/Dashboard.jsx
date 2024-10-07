import React from "react";
import FourCards from "../components/FourCards";
import SelectCard from "../components/SelectCard";
import MoreCard from "../components/MoreCard";
const Dashboard = () => {
  return (
    <>
      <div className="text-3xl grid grid-cols-[3fr_1fr] gap-4">
        <div className="flex flex-col gap-5">
          <FourCards />
          <div className="grid grid-cols-[1fr_2fr] gap-5">
            <MoreCard title="Room Availability">hellow</MoreCard>
            <SelectCard title="Revenue">okayyyy</SelectCard>
          </div>
          <div className="grid grid-cols-[1fr_1fr] gap-5">
            <SelectCard title="Reservation">okayyyy</SelectCard>
            <MoreCard title="Booking by Platform">hellow</MoreCard>
          </div>
        </div>

        <div className="bg-green-600"></div>
      </div>
    </>
  );
};

export default Dashboard;
