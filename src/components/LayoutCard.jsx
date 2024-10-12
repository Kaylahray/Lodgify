import React from "react";
const LayoutCard = ({ title, children, component }) => {
  return (
    <div className="flex p-4 flex-col items-start gap-4 rounded-xl bg-white ">
      <div className=" flex items-center justify-between w-full gap-2">
        <p className="text-[16px] font-medium leading-[125%] text-customBlack">
          {title}
        </p>
        <div className="flex gap-1 items-center justify-end flex-1">
          {component}
        </div>
      </div>

      <div className="w-full h-full overflow-scroll hide-scrollbar">
        {children}
      </div>
    </div>
  );
};

export default LayoutCard;
