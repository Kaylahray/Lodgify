import React from "react";

const TableHeader = ({ children, check }) => {
  return (
    <thead className="bg-blueSubtle text-left rounded-lg text-customGray text-[11px] font-normal leading-[1.4]">
      {children}
    </thead>
  );
};

export default TableHeader;
