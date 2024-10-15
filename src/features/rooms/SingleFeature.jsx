import React from "react";
import { RoomCheck } from "../../assets/assets";
const SingleFeature = ({ text, check, others, icon }) => {
  return (
    <div className="flex gap-2">
      {check && (
        <div className=" w-5 h-5 p-1 rounded-xl bg-[#D5F6E5]">
          <RoomCheck />
        </div>
      )}
      {others && icon}
      <p className="text-[#0D0E0D] text-xs font-normal leading-[1.4]">
        {text}
      </p>
    </div>
  );
};

export default SingleFeature;
