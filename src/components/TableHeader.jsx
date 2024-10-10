import React from "react";

const TableHeader = ({ children, check }) => {
  return (
    <thead className="bg-blueSubtle text-left rounded-lg text-customGray text-[11px] font-lato font-normal leading-[1.4">
      <tr className=" p-4">
        {check && (
          <th
            scope="col"
            className="relative px-7 py-6 sm:w-12 sm:px-6 rounded-tr-none"
          >
            <input
              type="checkbox"
              className={`absolute left-4 top-1/2 -mt-2 h-4 w-4  rounded border-[#8F8F8F] text-customYellow focus:ring-indigo-600 `}
            />
          </th>
        )}
        {children}
      </tr>
    </thead>
  );
};

export default TableHeader;
