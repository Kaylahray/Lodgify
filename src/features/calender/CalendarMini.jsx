/* eslint-disable react/prop-types */
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { useRef } from "react";

export default function CalendarMini({ datesSet }) {
  const calendarRef = useRef(null);

  return (
    <div className="mini-calendar">
      <FullCalendar
        dayCellClassNames={"text-xs"}
        dayHeaderClassNames={
          "font-normal !border-none text-xs text-gray-400"
        }
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "next",
        }}
        dayMinWidth={"100px"}
        datesSet={datesSet}
      />
    </div>
  );
}
