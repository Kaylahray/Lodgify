import React from "react";

const InfoItem = ({ label, value }) => {
  return (
    <div>
      <p className="text-[#6E6E6E] text-[10px] font-normal leading-[140%]">
        {label}
      </p>
      <p className="text-[#0D0E0D] text-[12px] font-normal leading-[140%]">
        {value}
      </p>
    </div>
  );
};

export default InfoItem;
