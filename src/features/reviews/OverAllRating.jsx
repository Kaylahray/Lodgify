import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { FaEllipsisH } from "react-icons/fa";
import React, { useEffect, useState } from "react";

// Data for the PieChart
const data = [
  { value: 4, fill: "#D5F6E5" }, // Main rating portion
  { value: 1, fill: "#BCD9CA" }, // Empty portion (to complete the circle)
];
const ratings = [
  { category: "Facilities", rating: 4.4 },
  { category: "Cleanliness", rating: 4.4 },
  { category: "Services", rating: 4.6 },
  { category: "Comfort", rating: 4.8 },
  { category: "Food and Dining", rating: 4.5 },
];
// Component to show the chart
const ChartRating = () => {
  return (
    <div className="flex items-center justify-center w-full max-h-fit  relative">
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={180}
            endAngle={0}
            innerRadius="75%"
            outerRadius="100%"
            cornerRadius={5}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute text-center  top-12 left-1/2 transform -translate-x-1/2">
          <p className="text-3xl font-bold">
            4.6
            <span className="text-xs">/ 5</span>
          </p>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

// Progress bar component
const AnimatedProgressBar = ({ rating }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate the width after a slight delay
    setTimeout(() => {
      setWidth((rating / 5) * 100); // Convert rating (out of 5) to percentage
    }, 300);
  }, [rating]);

  return (
    <div className="w-full bg-gray-400 h-2 rounded-full relative overflow-hidden">
      <div
        className="h-full bg-green-200 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      >
        {/* Optional animated overlay */}
        {/* <div className="h-full bg-green-300 opacity-70 w-full absolute left-0 animate-progress"></div> */}
      </div>
    </div>
  );
};

// Main bar component
const ProgressBar = () => {
  return (
    <div className="w-full mt-6">
      {ratings.map((item) => (
        <div
          key={item.category}
          className="flex flex-col items-start gap-1"
        >
          <p className="text-sm">{item.category}</p>
          <div className=" flex items-center gap-2 w-full">
            <AnimatedProgressBar rating={item.rating} />
            <span className="text-sm font-semibold">
              {item.rating}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const OverAllRating = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-4 place-items-center ">
      <div className="flex flex-col items-center gap-1 w-full">
        <ChartRating />
        <div className="flex w-full py-2 flex-col items-center gap-1 rounded-lg bg-[#E7F68E]">
          <p className="text-[#0D0E0D] text-center text-[20px] font-semibold leading-[24px]">
            Impressive
          </p>
          <p className="text-[#6E6E6E] text-center text-[11px] font-normal leading-[15.4px]">
            from 2546 reviews
          </p>
        </div>
      </div>
      <ProgressBar />
    </div>
  );
};

export default OverAllRating;
