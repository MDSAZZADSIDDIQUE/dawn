import {
  viewDay,
  viewMonthAgenda,
  viewMonthGrid,
  viewWeek,
} from "@schedule-x/calendar";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import "@schedule-x/theme-default/dist/index.css";
import CustomDateGridEvent from "../components/CustomDateGridEvent.jsx";
import CustomTimeGridEvent from "../components/CustomTimeGridEvent.jsx";

function FarmingCalendar() {
  const calendar = useCalendarApp({
    selectedDate: "2023-12-16",
    defaultView: viewWeek.name,
    views: [viewDay, viewWeek, viewMonthGrid, viewMonthAgenda],
    plugins: [createEventModalPlugin(), createDragAndDropPlugin()],
    events: [
      {
        id: "1",
        title: "Event 1",
        start: "2023-12-16",
        end: "2023-12-16",
      },
      {
        id: "2",
        title: "Event 2",
        start: "2023-12-16 03:00",
        end: "2023-12-16 05:00",
      },
    ],
  });

  return (
    <div className="w-full">
      <ScheduleXCalendar
        calendarApp={calendar}
        customComponents={{
          timeGridEvent: CustomTimeGridEvent,
          dateGridEvent: CustomDateGridEvent,
        }}
      />
    </div>
  );
}

export default FarmingCalendar;
