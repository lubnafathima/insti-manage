import { useState } from "react";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const weeks = [];
    let week = [];

    for (let i = 0; i < firstDay; i++) {
      week.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      weeks.push(week);
    }

    return weeks;
  };

  const tasks = {
    2: "Maths Test",
    13: "History Assignment Due",
    30: "Science Lab Report Due",
  };

  return (
    <div className="w-full max-w-7xl mt-8 bg-white rounded-md shadow-md p-6">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, idx) => (
                <th
                  key={idx}
                  className="py-2 px-4 border-b border-r text-center text-lg font-semibold"
                >
                  {day}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {generateCalendar().map((week, weekIdx) => (
            <tr key={weekIdx}>
              {week.map((day, idx) => (
                <td
                  key={idx}
                  className="h-28 py-4 px-4 text-center border-b border-r relative"
                >
                  {day && (
                    <div className="absolute top-1 left-1 text-lg font-semibold">
                      {day}
                    </div>
                  )}
                  {day && tasks[day] && (
                    <div className="mt-2 bg-blue-100 p-2 rounded-sm text-sm absolute bottom-2 left-2 right-2 max-h-24 overflow-auto">
                      {tasks[day]}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
