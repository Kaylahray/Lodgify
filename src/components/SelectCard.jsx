import React from "react";
import ChartButton from "./ChartButton";

const SelectCard = ({ title, children }) => {
  return (
    <div className="flex p-4 flex-col items-start gap-4 rounded-xl bg-white">
      <div className=" flex items-center justify-between w-full">
        <p className="text-[16px] font-medium leading-[125%] text-customBlack">
          {title}
        </p>
        <ChartButton />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SelectCard;
