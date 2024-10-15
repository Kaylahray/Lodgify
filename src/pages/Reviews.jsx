import React from "react";
import ReviewGrid from "../components/ReviewGrid";
import LayoutCard from "../components/LayoutCard";
import CaretSelect from "../components/CaretSelect";
import MoreOptionCard from "../components/MoreOptionCard";
import { ReviewChart } from "../features/reviews/ReviewStatistics";
import { Maps } from "../features/reviews/Map";
import OverAllRating from "../features/reviews/OverAllRating";
import DoubleCaretSelect from "../components/DoubleCaretSelect";
const Reviews = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid lg:grid-cols-2 gap-5">
        <LayoutCard
          title="Review Statistics"
          component={
            <>
              <DoubleCaretSelect
                calender={true}
                bg="customYellow"
                btnText="Last 7 Days"
              />
            </>
          }
        >
          <ReviewChart />
        </LayoutCard>
        <LayoutCard
          title="Overall Rating"
          component={
            <>
              <CaretSelect btnText="This Week" />
            </>
          }
        >
          <OverAllRating />
        </LayoutCard>
      </div>
      <MoreOptionCard title="Reviews by Country">
        <Maps />
      </MoreOptionCard>
      <ReviewGrid />
    </div>
  );
};

export default Reviews;
