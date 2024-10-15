import React from "react";

const DetailsFeatures = ({ children, title, threeCol }) => {
  return (
    <div className="flex flex-col gap-3.5">
      <p>{title}</p>
      <div
        className={`grid  ${
          threeCol ? "grid-cols-3" : "grid-cols-2"
        } gap-3 `}
      >
        {children}
      </div>
    </div>
  );
};

export default DetailsFeatures;
