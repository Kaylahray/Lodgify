import React from "react";

const ExpenseCard = ({
  icon: Icon,
  title,
  amount,
  icon2: Icon2,
  trendColor,
  percentage,
}) => {
  return (
    <div className="bg-white  rounded-lg p-4 flex flex-col justify-between w-full gap-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Icon */}
          <div className="p-1.5 rounded-[4px] bg-[#D5F6E5]">
            <Icon />
          </div>
          {/* Title */}
          <span className="text-[#6E6E6E] text-xs leading-[1.4]">
            {title}
          </span>
        </div>
        {/* Menu or options */}
        <div className="text-gray-400 cursor-pointer">&#x2026;</div>
      </div>

      {/* Main Content */}
      <div className="flex justify-between w-full">
        <h2 className="text-[#0D0E0D]  text-[26px] font-bold leading-[1.1] tracking-[0.26px]">
          ${amount}
        </h2>
        <div className="flex items-center flex-col gap-1.5">
          <div
            className={`flex items-end gap-[3px] px-1.5 py-0.5 rounded-lg ${
              trendColor === "subtleBlue"
                ? "bg-blueSubtle"
                : trendColor === "customYellow"
                ? "bg-customYellow"
                : trendColor === "customPink"
                ? "bg-customPink"
                : "bg-white"
            }
            `}
          >
            <Icon2 />
            <p className="text-[10px] font-normal leading-[1.4] text-customGray">
              {percentage}%
            </p>
          </div>
          <p className="text-[10px] font-normal leading-[1.4] text-customGray">
            from last week
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
