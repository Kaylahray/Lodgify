import React from "react";
import { IoIosMore } from "../assets/assets";

const MoreOptionCard = ({ title, children, add, onAddTask }) => {
  return (
    <div className="flex p-4 flex-col items-start gap-5 rounded-xl bg-white ">
      <div className=" flex items-center justify-between w-full">
        <p className="text-[16px] font-medium leading-[125%] text-customBlack">
          {title}
        </p>
        {add ? (
          <div
            className="px-2 py-0.5 bg-customYellow"
            onClick={onAddTask}
          >
            +
          </div>
        ) : (
          <IoIosMore />
        )}
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default MoreOptionCard;
