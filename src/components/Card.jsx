import React from "react";

const Card = ({
  title,
  value,
  icon: Icon,
  icon2: Icon2,
  percentage,
  color,
  statColor,
  trendColor,
}) => {
  return (
    <div
      className={`flex flex-col items-start gap-6 p-4 flex-grow  rounded-xl
    ${color === "customBlue" ? "bg-customBlue" : "bg-white"}`}
    >
      <div className="flex justify-between w-full items-start">
        <div className="flex flex-col items-start gap-0.5 w-[118px]">
          <h1 className="text-[11px] font-normal leading-[1.4] text-customGray">
            {title}
          </h1>
          <p className="text-[22px] font-bold leading-[1.2] text-customBlack">
            {value}
          </p>
        </div>
        <div
          className={`flex p-2 rounded-md 
        ${
          statColor === "customBlue"
            ? "bg-customBlue"
            : "bg-blueSubtle"
        }
         `}
        >
          <Icon />
        </div>
      </div>
      <div className="flex items-center gap-1.5">
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
  );
};

export default Card;
