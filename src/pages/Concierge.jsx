import React from "react";
import SecondLayoutCard from "../components/SecondLayoutCard";
import SearchBar from "../components/SearchBar";
import CaretSelect from "../components/CaretSelect";
const Concierge = () => {
  return (
    <SecondLayoutCard
      search={<SearchBar />}
      component={
        <>
          <CaretSelect btnText="one" />
          <CaretSelect btnText="two" />
        </>
      }
    >
      hello
    </SecondLayoutCard>
  );
};

export default Concierge;
