import React from "react";

const Button = ({ btnText }) => {
  return (
    <button className="py-1.5 px-3 rounded-md text-nowrap text-[12px] font-semibold leading-[1.1] tracking-[0.12px] bg-customYellow">
      {btnText}
    </button>
  );
};

export default Button;
