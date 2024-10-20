import { DateTime } from "luxon";

export const bookings = [
  {
    bookingId: "LG-B00108",
    guestName: "Angus Copper",
    roomType: "Deluxe",
    roomNumber: "Room 101",
    duration: "3 nights",
    checkIn: "2028-06-19T00:00:00.000Z",
    checkOut: "2028-06-22T00:00:00.000Z",
    status: "Checked-In",
  },
  {
    bookingId: "LG-B00109",
    guestName: "Catherine Lopp",
    roomType: "Standard",
    roomNumber: "Room 202",
    duration: "2 nights",
    checkIn: "2028-06-19T00:00:00.000Z",
    checkOut: "2028-06-21T00:00:00.000Z",
    status: "Checked-In",
  },
  {
    bookingId: "LG-B00110",
    guestName: "Edgar Irving",
    roomType: "Suite",
    roomNumber: "Room 303",
    duration: "5 nights",
    checkIn: "2028-06-19T00:00:00.000Z",
    checkOut: "2028-06-24T00:00:00.000Z",
    status: "Pending",
  },
  {
    bookingId: "LG-B00111",
    guestName: "Ice B. Holand",
    roomType: "Standard",
    roomNumber: "Room 105",
    duration: "4 nights",
    checkIn: "2028-06-19T00:00:00.000Z",
    checkOut: "2028-06-23T00:00:00.000Z",
    status: "Checked-In",
  },
  {
    bookingId: "LG-B00112",
    guestName: "Gertrude Bale",
    roomType: "Deluxe",
    roomNumber: "Room 204",
    duration: "1 night",
    checkIn: "2028-06-19T00:00:00.000Z",
    checkOut: "2028-06-20T00:00:00.000Z",
    status: "Pending",
  },
];

export const bookingsColumns = [
  {
    header: "Booking Id",
    accessorKey: "bookingId",
    footer: "Booking Id",
  },
  {
    header: "Guest Name",
    accessorKey: "guestName",
    footer: "Guest Name",
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
    header: "Duration",
    accessorKey: "duration",
    footer: "Duration",
  },
  {
    header: "Check In / Check Out",
    accessorKey: "check-in", // Make sure this matches the property name
    footer: "Check In / Check Out",
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
    header: "Status",
    accessorKey: "status",
    footer: "Status",
    cell: (info) => {
      const status = info.getValue();
      return (
        <span
          className={`
           
              ${
                status === "Checked-In"
                  ? " px-[6px] py-[2px] pb-[3px] rounded-[4px] bg-[#E7F68E]"
                  : status === "Pending"
                  ? " px-[6px] py-[2px] pb-[3px] rounded-[4px] bg-[#D5F6E5]"
                  : "bg-white"
              }          
         `}
        >
          {status}
        </span>
      );
    },
  },
];
