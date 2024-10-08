import React from "react";
import FourCards from "../components/FourCards";
import SelectCard from "../components/SelectCard";
import MoreCard from "../components/MoreCard";
import TableCard from "../components/TableCard";
const Dashboard = () => {
  return (
    <>
      <div className="text-3xl grid grid-cols-[3fr_1fr] gap-4">
        <div className="flex flex-col gap-5">
          <FourCards />
          <div className="grid grid-cols-[1fr_2fr] gap-5">
            <MoreCard title="Room Availability">
              <div className="flex flex-col items-start gap-5 bg-yellow-400 w-full">
                <div className="flex items-start gap-1 h-6 bg-green-200 w-full">
                  <div className="w-[60%]"></div>
                  <div className="w-[20%]"></div>
                  <div className="w-[15%]"></div>
                  <div className="w-[5%]"></div>
                </div>
                <div className="flex flex-col items-start gap-5 w-full">
                  <div className="flex pr-12 justify-between items-start">
                    <div className="w-1.5 rounded-sm bg-red-500 h-auto"></div>
                    <div className="flex flex-col items-start gap-[2px]">
                      <p className="text-customGray text-[12px] font-normal leading-[140%]">
                        1
                      </p>
                      <h1 className="text-customBlack text-[24px] font-bold leading-[110%] tracking-[0.48px]">
                        3
                      </h1>
                    </div>
                  </div>
                  <div className="flex pr-12 justify-between items-start"></div>
                </div>
              </div>
            </MoreCard>
            <SelectCard
              title="Revenue"
              normalSelectText="Last 6 Months"
              normalSelect={true}
              first={true}
            >
              okayyyy
            </SelectCard>
          </div>
          <div className="grid grid-cols-[1fr_1fr] gap-5">
            <SelectCard
              title="Reservation"
              normalSelectText="Last 7 Days"
              first={true}
              normalSelect={true}
            >
              okayyyy
            </SelectCard>
            <MoreCard
              title="Booking by Platform"
              normalSelectText="okay"
              first={true}
            >
              hellow
            </MoreCard>
          </div>
          <TableCard
            title="Reservation List"
            search={true}
            normalSelect={true}
            normalSelectText="All Status"
            first={true}
            color="customYellow"
          >
            hello
          </TableCard>
        </div>

        <div className="bg-green-600 flex flex-col gap-5">
          <MoreCard title="Booking by Platform">hellow</MoreCard>
          <MoreCard title="Booking by Platform">hellow</MoreCard>
          <MoreCard title="Booking by Platform">hellow</MoreCard>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
