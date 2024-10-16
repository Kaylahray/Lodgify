import React from "react";
import { CaretDown } from "../assets/assets";

const CaretSelect = ({ btnText, bg = "customYellow" }) => {
  return (
    <button
      className={`flex items-center text-nowrap gap-[2px] py-1.5 px-2 bg-${bg} text-[12px] font-semibold leading-[110%] tracking-[0.12px] rounded-md focus:outline-none`}
    >
      {btnText}
      <CaretDown />
    </button>
  );
};

export default CaretSelect;
