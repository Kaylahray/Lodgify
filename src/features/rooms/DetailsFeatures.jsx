import React from "react";

const DetailsFeatures = ({ children, title }) => {
  return (
    <div>
      <p>{title}</p>
      <div className="grid grid-cols-2">{children}</div>
    </div>
  );
};

export default DetailsFeatures;
