import React from "react";

const Button = ({ title }) => {
  return (
    <button className="py-1.5 px-3 rounded-md text-nowrap h-10 bg-customYellow">
      {title}
    </button>
  );
};

export default Button;
