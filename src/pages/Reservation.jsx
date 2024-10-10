// import React from "react";
// import TableCard from "../components/TableCard";

// const Reservation = () => {
//   return (
//     <TableCard
//       title="Reservation List"
//       search={true}
//       btnTitle="Add Booking"
//       btn={true}
//       selectDoubleIcon={true}
//       selectDoubleIconTitle="All Status"
//       selectDoubleIcon2={true}
//       selectDoubleIconTitle2="19-20-200"
//       color1="customGraySec"
//       color2="customGraySec"
//     >
//       hello
//     </TableCard>
//   );
// };
// export default Reservation;

import React from "react";
import SearchBar from "../components/SearchBar";
import DoubleCaretSelect from "../components/DoubleCaretSelect";
import Button from "../components/Button";
import LayoutCard from "../components/LayoutCard";

const Reservation = () => {
  return (
    <LayoutCard
      title="Reservation List"
      component={
        <>
          <SearchBar placeholder="Search guest, status, etc" />
          <DoubleCaretSelect
            btnText="All Status"
            funnel={true}
            bg="customG"
          />
          <DoubleCaretSelect
            btnText="19 - 24 June, 2028"
            calender={true}
            bg="customG"
          />
          <Button btnText="Add Booking" />
        </>
      }
    >
      <p>sorrryyyy</p>
    </LayoutCard>
  );
};

export default Reservation;
