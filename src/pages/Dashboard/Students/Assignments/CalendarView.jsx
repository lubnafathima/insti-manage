import TitleComponent from "../../../../styledComponents/TitleComponent";
import TestCalendar from "../../../../styledComponents/TestCalendar";

const tasks = {
  2: "Maths Assignment Due",
  5: "History Assignment Due",
  10: "Chemistry Assignment Due",
  13: "English Assignment Due",
  15: "Biology Assignment Due",
  17: "Computer Science Assignment",
  20: "Art Assignment Due",
  23: "Geography Assignment Due",
  28: "Economics Assignment Due",
  30: "Physics Assignment Due",
};


const CalendarView = () => {
  return (
    <div>
      <TitleComponent title="Assignments in Calendar View" />
      <TestCalendar task={tasks} />
    </div>
  );
};

export default CalendarView;
