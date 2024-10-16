import React from "react";
const SecondLayoutCard = ({
  children,
  reverse,
  search,
  component,
  extra1,
  extra2,
  extra3,
}) => {
  return (
    <div
      className={`flex p-4 flex-col justify-between w-full gap-4 rounded-xl bg-white`}
    >
      <div
        className={`items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        } lg:flex-row flex flex-col gap-4 items-start lg:justify-between w-full`}
      >
        <div className="flex gap-2">
          {search}
          {reverse && extra1}
          {reverse && extra2}
          {reverse && extra3}
        </div>
        <div className="flex gap-1 items-center">{component}</div>
      </div>

      <div className="w-full h-full overflow-scroll hide-scrollbar">
        {children}
      </div>
    </div>
  );
};

export default SecondLayoutCard;
