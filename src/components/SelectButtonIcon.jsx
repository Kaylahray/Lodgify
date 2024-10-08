import React from "react";
import { Funnel, CaretDown, CalenderBlank } from "../assets/assets";
const SelectButtonIcon = ({ title, bg, funnel, calender }) => {
  return (
    <button
      className={`flex py-1.5 px-2 h-10 items-center rounded-md text-nowrap gap-[2px] bg-${bg}`}
    >
      {funnel && <Funnel />}
      {calender && <CalenderBlank />}
      {title}
      <CaretDown />
    </button>
  );
};

export default SelectButtonIcon;
