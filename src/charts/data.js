const makeDate = (hrsToAdd = 0) => {
  const date = new Date();
  if (hrsToAdd) {
    date.setHours(date.getHours() + hrsToAdd);
  }
  return date;
};

export const events = [
  {
    title: "Room Inspection",
    start: makeDate(),
    end: makeDate(1),
    extendedProps: {
      color: "!bg-[#E7F68E]",
      category: "Maintenance",
    },
  },
  {
    title: "VIP Guest Arrival",
    start: makeDate(22),
    end: makeDate(27),
    extendedProps: {
      color: "!bg-[#D5F6E5]",
      category: "Meeting",
    },
  },
  {
    title: "Fire Safety Training",
    start: makeDate(122),
    end: makeDate(130.5),
    extendedProps: {
      color: "!bg-[#BCD9CA]",
      category: "Training",
    },
  },
];

export const categories = [
  { label: "Training", value: "training", color: "bg-red-400" },
  { label: "Meeting", value: "meeting", color: "bg-green-400" },
  {
    label: "Guest Service",
    value: "guest-service",
    color: "bg-orange-400",
  },
  {
    label: "Maintenance",
    value: "maintenance",
    color: "bg-blue-400",
  },
  { label: "Event", value: "event", color: "bg-teal-400" },
];

export const viewBtns = [
  { label: "Day", value: "dayGridDay" },
  { label: "Week", value: "dayGridWeek" },
  { label: "Month", value: "dayGridMonth" },
];
