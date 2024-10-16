import React from "react";
import Card from "./Card";
import {
  Dollar,
  TrendDown,
  TrendUp,
  StatSignin,
  StatSignout,
  StatsCal,
} from "../assets/assets";
const cardData = [
  {
    title: "New Bookings",
    value: 840,
    icon: StatsCal, // Replace with an actual icon component if needed
    icon2: TrendUp,
    percentage: 8.7,
    color: "customBlue",
    statColor: "white",
    trendColor: "subtleBlue",
  },
  {
    title: "Check-In",
    value: 231,
    icon: StatSignin, // Replace with an actual icon component if needed
    icon2: TrendUp,
    percentage: 3.56,
    color: "white",
    statColor: "customBlue",
    trendColor: "customYellow",
  },
  {
    title: "Check-Out",
    value: 124,
    icon: StatSignout, // Replace with an actual icon component if needed
    icon2: TrendDown,
    percentage: 1.06,
    color: "white",
    statColor: "customBlue",
    trendColor: "customPink",
  },
  {
    title: "Total Revenue",
    value: "$123,980",
    icon: Dollar, // Replace with an actual icon component if needed
    icon2: TrendUp,
    percentage: 5.7,
    color: "white",
    statColor: "customBlue",
    trendColor: "customYellow",
  },
];
const FourCards = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 ">
      {cardData.map((item) => {
        console.log({ ...item });
        return <Card {...item} key={item.title} />;
      })}
    </div>
  );
};

export default FourCards;
