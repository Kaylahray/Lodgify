import React from "react";

const TableBody = ({ children }) => {
  return (
    <tbody className="bg-white font-normal text-sm capitalize">
      {children}
    </tbody>
  );
};

export default TableBody;
