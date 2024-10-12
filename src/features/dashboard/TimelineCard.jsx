import {
  Maintainance,
  TimelineConference,
  CleaningCompleted,
  StatSignin,
  StatSignout,
} from "../../assets/assets";

const timeline = [
  {
    id: 1,
    title: "Conference Room Setup",
    content:
      "Events Team set up Conference Room B for 10 AM meeting, including AV equipment and refreshments.",
    time: "12:00 PM",
    icon: TimelineConference,
    iconBackground: "bg-customYellow",
  },
  {
    id: 2,
    content:
      "Sarah Johnson completed check-out process and updated room availability for Room 305.",
    title: "Guest Check-Out",
    time: "11:30 AM",
    icon: StatSignout,
    iconBackground: "bg-customBlue",
  },
  {
    id: 3,
    content:
      "Maria Gonzalez cleaned and prepared Room 204 for new guests.",
    title: "Room Cleaning Completed",
    time: "11:00 AM",
    icon: CleaningCompleted,
    iconBackground: "bg-customYellow",
  },
  {
    id: 4,
    content:
      "Broken toilet in Room 109, maintenance request assigned to technician.",
    title: "Maintenance Request Logged",
    time: "10:30 AM",
    icon: Maintainance,
    iconBackground: "bg-customBlue",
  },
  {
    id: 5,
    content:
      "Angus Copper completed check-in process and issued room key.",
    title: "Guest Check-In",
    time: "10:00 AM",
    icon: StatSignin,
    iconBackground: "bg-customYellow",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TimelineCard() {
  return (
    <div className="hide-scrollbar">
      <ul role="list">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      "flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white"
                    )}
                  >
                    <event.icon
                      aria-hidden="true"
                      className="h-5 w-5 text-white"
                    />
                  </span>
                </div>
                <div className="flex flex-col pb-3.5 ">
                  <p className="text-[8px] font-normal leading-[150%] text-customGray tracking-[0.08px]">
                    {event.time}
                  </p>
                  <p className="text-[12px] font-semibold leading-[140%] text-customBlack">
                    {event.title}
                  </p>
                  <p className="text-[9px] font-normal leading-[140%] text-customGray">
                    {event.content}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
