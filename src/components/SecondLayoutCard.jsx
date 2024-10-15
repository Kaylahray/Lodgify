import React from "react";
const SecondLayoutCard = ({ children, search, component }) => {
  return (
    <div className="flex p-4 flex-col justify-between w-full gap-4 rounded-xl bg-white">
      <div className=" flex items-center justify-between w-full">
        {search}
        <div className="flex gap-1 items-center justify-end flex-1">
          {component}
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default SecondLayoutCard;
