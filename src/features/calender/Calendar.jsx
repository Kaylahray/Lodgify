import {
  categories,
  events as defaultEvents,
  handleEventDrop,
  handleEventResize,
  viewBtns,
} from "./data";
import "./calendar.css";
import { useRef, useState } from "react";

import CalendarMini from "./CalendarMini";
import { FaChevronDown } from "react-icons/fa6";
import { FaEllipsisH } from "react-icons/fa";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  const calendarRef = useRef(null);
  const [view, setCurrentView] = useState("dayGridMonth");
  const [events, setEvents] = useState(defaultEvents);

  const customButtons = {
    addSchedule: {
      text: "Add Schedule",
      className: "bds",
      click: function () {
        alert("clicked the custom button!");
      },
    },
  };

  const setView = (viewName = "dayGridDay") => {
    const calendarApi = calendarRef.current?.getApi();
    calendarApi.changeView(viewName);
    setCurrentView(viewName);
  };

  const setData = (e) => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.setOption("validRange", {
        start: new Date(e.view.currentStart),
        end: new Date(e.view.currentEnd),
      });
    }
  };

  return (
    <>
      <div className="p-4 bg-white shadow-xl rounded-2xl">
        <div className="grid grid-cols-6 gap-4">
          {/* {startStr} = {endStr} */}
          <div className="col-span-6 p-2 bg-gray-100 lg:col-span-2 rounded-2xl">
            <CalendarMini datesSet={setData} />
            <hr className="border-white border-y-2" />
            <section className="category">
              <div className="flex items-center justify-between">
                <h2>Category</h2>
                <button className="flex items-center justify-center w-6 h-6 transition-opacity rounded-full hover:bg-gray-300 hover:text-gray-700">
                  <FaEllipsisH />
                </button>
              </div>
              <ul className="space-y-1">
                {categories.map((e) => (
                  <li
                    key={e.value}
                    className="flex items-center gap-x-2"
                  >
                    <span
                      className={
                        e.color + " w-2 h-2 block rounded-full"
                      }
                    ></span>
                    {e.label}
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className="col-span-6 lg:col-span-4 big-calendar">
            <div className="flex items-center justify-between mb-5 text-xs">
              <h3 className="text-sm font-semibold">Schedule</h3>
              <div className="flex items-center gap-2">
                <div className="bg-gray-50 fc-button-group">
                  {viewBtns.map((e) => (
                    <button
                      key={e.value}
                      onClick={() => setView(e.value)}
                      className={
                        "fc-button-primary px-4" +
                        (view === e.value ? " fc-button-active" : "")
                      }
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
                <div className="bg-gray-50 fc-button-group">
                  <button className="flex items-center gap-1 px-4 fc-button-primary">
                    All Category
                    <FaChevronDown size={10} />
                  </button>
                </div>
                <div className="bg-gray-50 fc-button-group">
                  <button className="flex items-center gap-1 px-4 fc-button-primary">
                    Add Schedule
                  </button>
                </div>
              </div>
            </div>
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, interactionPlugin]}
              customButtons={customButtons}
              headerToolbar={false}
              events={events}
              editable={true}
              droppable={true}
              selectable={true}
              dayHeaderFormat={{ weekday: "long" }}
              eventContent={renderEventContent}
              eventDrop={(e) => handleEventDrop(e, setEvents)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const renderEventContent = (eventInfo) => {
  return (
    <div
      className={
        eventInfo.event.extendedProps.color + " p-1 rounded-md w-full"
      }
    >
      <div className="flex mb-2 text-gray-500">
        <span>
          {eventInfo.event.start.getHours()}:
          {eventInfo.event.start.getMinutes()}
        </span>
        -
        <span>
          {eventInfo.event.end.getHours()}:
          {eventInfo.event.end.getMinutes()}
        </span>
      </div>
      <div>{eventInfo.event.title}</div>
      <div className="mt-4 text-gray-500">
        {eventInfo.event.extendedProps.category}
      </div>
    </div>
  );
};

export default Calendar;
