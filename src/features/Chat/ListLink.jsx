import React from "react";
import { Link } from "../../assets/assets";
const ListLink = ({ text, url }) => {
  return (
    <div className="flex gap-3">
      <div className="p-2 rounded-md bg-[#D5F6E5]">
        <Link />
      </div>
      <div className="flex flex-col gap-[2px]">
        <p className="text-[#0D0E0D] text-[14px] font-semibold leading-[19.6px]">
          {text}
        </p>
        <p className="text-[#6E6E6E]  text-[12px] font-normal leading-[16.8px]">
          {url}
        </p>
      </div>
    </div>
  );
};

export default ListLink;
