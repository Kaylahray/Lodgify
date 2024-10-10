import React from "react";
import { IoIosMore } from "react-icons/io";
const MoreOptionCard = ({ title, children }) => {
  return (
    <div className="flex p-4 flex-col items-start gap-2 rounded-xl bg-white">
      <div className=" flex items-center justify-between w-full">
        <p className="text-[16px] font-medium leading-[125%] text-customBlack">
          {title}
        </p>
        <IoIosMore />
      </div>
      <div className="w-full h-fit">{children}</div>
    </div>
  );
};

export default MoreOptionCard;
