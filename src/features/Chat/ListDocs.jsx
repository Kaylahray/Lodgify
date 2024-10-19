import React from "react";
import { CaretRight, FilePdf } from "../../assets/assets";
const ListDocs = ({ text, docSize }) => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-2 items-center">
        <div className="p-2 rounded-md bg-[#D5F6E5]">
          <FilePdf />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="text-[#0D0E0D] text-[14px] font-semibold leading-[19.6px]">
            {text}
          </p>
          <p className="text-[#6E6E6E]  text-[12px] font-normal leading-[16.8px]">
            {docSize}
          </p>
        </div>
      </div>

      <div className="p-[2px] rounded justify-end bg-[#E7F68E]">
        <CaretRight />
      </div>
    </div>
  );
};

export default ListDocs;
