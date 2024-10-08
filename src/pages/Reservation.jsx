import React from "react";
import TableCard from "../components/TableCard";

const Reservation = () => {
  return (
    <TableCard
      title="Reservation List"
      search={true}
      btnTitle="Add Booking"
      btn={true}
      selectDoubleIcon={true}
      selectDoubleIconTitle="All Status"
      selectDoubleIcon2={true}
      selectDoubleIconTitle2="19-20-200"
      color1="customGraySec"
      color2="customGraySec"
    >
      hello
    </TableCard>
  );
};
export default Reservation;
