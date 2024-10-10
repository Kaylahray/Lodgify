import React from "react";
import ReviewGrid from "../components/ReviewGrid";
import LayoutCard from "../components/LayoutCard";
import CaretSelect from "../components/CaretSelect";
import MoreOptionCard from "../components/MoreOptionCard";
import RadialChartStacked from "../features/reviews/LinearBar";
const Reviews = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-5">
        <LayoutCard
          title="hello"
          component={
            <>
              <CaretSelect btnText="imhokayyyyeee" />
            </>
          }
        >
          <RadialChartStacked />
        </LayoutCard>
        <LayoutCard
          title="hello"
          component={
            <>
              <CaretSelect btnText="imhokayyyyeee" />
            </>
          }
        >
          <p>sorrryyyy</p>
        </LayoutCard>
      </div>
      <MoreOptionCard title="okat" />
      <ReviewGrid />
    </div>
  );
};

export default Reviews;
