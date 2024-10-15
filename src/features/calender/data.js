const makeDate = (hrsToAdd = 0) => {
  const date = new Date();
  if (hrsToAdd) {
    date.setHours(date.getHours() + hrsToAdd);
  }
  return date;
};

export const events = [
  {
    title: "Fire Safety Training",
    start: makeDate(10),
    end: makeDate(15),
    extendedProps: {
      category: "Training",
      color: "bg-green-100",
    },
  },
  {
    title: "VP Guest Arrival",
    start: "2028-06-07T12:00:00",
    end: "2028-06-07T13:00:00",
    extendedProps: {
      category: "Meeting",
      color: "bg-yellow-100",
    },
  },
  {
    title: "Room Inspection",
    start: "2028-06-01T11:00:00",
    end: "2028-06-01T13:00:00",
    extendedProps: {
      category: "Maintenance",
      color: "bg-yellow-100",
    },
  },
  {
    title: "Team Building Activity",
    start: "2028-06-10T17:00:00",
    end: "2028-06-10T19:00:00",
    extendedProps: {
      category: "Event",
      color: "bg-blue-100",
    },
  },
  {
    title: "Inventory Check",
    start: "2028-06-12T09:00:00",
    end: "2028-06-12T13:00:00",
    extendedProps: {
      category: "Maintenance",
      color: "bg-yellow-100",
    },
  },
  {
    title: "Staff Meeting",
    start: "2028-06-20T09:00:00",
    end: "2028-06-20T10:00:00",
    extendedProps: {
      category: "Meeting",
      color: "bg-yellow-100",
    },
  },
  {
    title: "Marketing Strategy Meeting",
    start: "2028-06-18T10:00:00",
    end: "2028-06-18T12:00:00",
    extendedProps: {
      category: "Meeting",
      color: "bg-yellow-100",
    },
  },
  {
    title: "Guest Welcome Event",
    start: "2028-06-21T16:00:00",
    end: "2028-06-21T20:00:00",
    extendedProps: {
      category: "Guest Service",
      color: "bg-green-100",
    },
  },
  {
    title: "Monthly Performance Review",
    start: "2028-06-29T11:00:00",
    end: "2028-06-29T13:00:00",
    extendedProps: {
      category: "Meeting",
      color: "bg-yellow-100",
    },
  },
  {
    title: "End of Month Celebration",
    start: "2028-06-30T17:00:00",
    end: "2028-06-30T19:00:00",
    extendedProps: {
      category: "Event",
      color: "bg-blue-100",
    },
  },
  {
    title: "Fire Drill",
    start: "2028-06-23T11:00:00",
    end: "2028-06-23T12:00:00",
    extendedProps: {
      category: "Training",
      color: "bg-green-100",
    },
  },
  {
    title: "Wedding Reception",
    start: "2028-06-25T18:00:00",
    end: "2028-06-25T22:00:00",
    extendedProps: {
      category: "Event",
      color: "bg-blue-100",
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
