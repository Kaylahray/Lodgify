import React from "react";
import SelectCard from "../components/SelectCard";
import MoreCard from "../components/MoreCard";
import ReviewGrid from "../components/ReviewGrid";
const Reviews = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-5">
        <SelectCard
          title="Revenue"
          selectDoubleIcon2={true}
          selectDoubleIconTitle2="19-20-200"
        >
          okayyyy
        </SelectCard>
        <SelectCard
          title="Revenue"
          normalSelectText="This Week"
          normalSelect={true}
          first={true}
        >
          okayyyy
        </SelectCard>
      </div>
      <MoreCard />
      <ReviewGrid />
    </div>
  );
};

export default Reviews;
