import React from "react";
import { Funnel, CaretDown, CalenderBlank } from "../assets/assets";
const DoubleCaretSelect = ({
  btnText,
  bg = "customG",
  funnel,
  calender,
}) => {
  return (
    <button
      className={`flex py-1.5 px-2 text-[12px] font-semibold leading-[110%] tracking-[0.12px] rounded-md focus:outline-none items-center text-nowrap gap-[2px] bg-${bg}`}
    >
      {funnel && <Funnel />}
      {calender && <CalenderBlank />}
      {btnText}
      <CaretDown />
    </button>
  );
};

export default DoubleCaretSelect;
