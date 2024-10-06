import React from "react";
import FourCards from "../components/FourCards";

const Dashboard = () => {
  return (
    <div className="text-3xl grid grid-cols-[3fr_1fr] gap-4">
      <div className="bg-green-300">
        <FourCards />
      </div>
      <div className="bg-green-600"></div>
    </div>
  );
};

export default Dashboard;
