import { DateTime } from "luxon";
import { FaEllipsis } from "react-icons/fa6";

export const guestBookingsColumns = [
  {
    header: "Image",
    accessorKey: "image",
    footer: "Image",
    cell: (info) => {
      return (
        <img src={info.row.original.image} className="w-20 h-14" />
      );
    },
  },
  {
    header: "Booking Id",
    accessorKey: "bookingId",
    footer: "Booking Id",
  },
  {
    header: "Booking Date",
    accessorKey: "bookingDate", // Make sure this matches the property name
    footer: "Booking Date",
    cell: (info) => {
      const checkInDate = DateTime.fromISO(info.row.original.checkIn); // Use the correct property name
      const checkOutDate = DateTime.fromISO(
        info.row.original.checkOut
      );
      const formattedCheckIn = checkInDate.toLocaleString(
        DateTime.DATE_MED
      );
      const formattedCheckOut = checkOutDate.toLocaleString(
        DateTime.DATE_MED
      );

      return `${formattedCheckIn} - ${formattedCheckOut}`;
    },
  },
  {
    header: "Room Type ",
    accessorKey: "roomType",
    footer: "Room Type",
  },
  {
    header: "Room Number",
    accessorKey: "roomNumber",
    footer: "Room Number",
  },
  {
    header: "Check In",
    accessorKey: "checkIn", // Make sure this matches the property name
    footer: "Check In",
    cell: (info) => {
      const checkInDate = DateTime.fromISO(info.row.original.checkIn); // Use the correct property name
      return checkInDate.toLocaleString(DateTime.DATE_MED);
    },
  },
  {
    header: "Check Out",
    accessorKey: "checkOut", // Make sure this matches the property name
    footer: "Check Out",
    cell: (info) => {
      const checkOutDate = DateTime.fromISO(
        info.row.original.checkOut
      ); // Use the correct property name
      return checkOutDate.toLocaleString(DateTime.DATE_MED);
    },
  },

  {
    header: "",
    accessorKey: "action",
    footer: "",
    cell: () => {
      return (
        <button className="">
          <FaEllipsis />
        </button>
      );
    },
  },
];
