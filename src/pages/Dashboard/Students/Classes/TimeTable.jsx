const TimeTable = () => {
  const timeSlots = [
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "10:00 AM - 10:15 AM",
    "10:15 AM - 11:15 AM",
    "11:15 AM - 12:15 PM",
    "12:15 PM - 1:15 PM",
    "1:15 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
  ];

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dummyData = {
    Mon: [
      { subject: "Maths", room: "Room 205", teacher: "Mrs. Doe" },
      { subject: "English", room: "Room 204", teacher: "Mr. Smith" },
      { subject: "Break", room: "", teacher: "" },
      { subject: "Physics", room: "Room 307", teacher: "Dr. Brown" },
      { subject: "Chemistry", room: "Room 308", teacher: "Mr. Green" },
      { subject: "Biology", room: "Room 309", teacher: "Ms. White" },
      { subject: "Lunch", room: "", teacher: "" },
      { subject: "History", room: "Room 201", teacher: "Mr. Johnson" },
      { subject: "Geography", room: "Room 202", teacher: "Mrs. Clark" },
    ],
    Tue: [
      { subject: "Art", room: "Room 102", teacher: "Ms. Taylor" },
      { subject: "Music", room: "Room 105", teacher: "Mr. Harris" },
      { subject: "Break", room: "", teacher: "" },
      { subject: "Maths", room: "Room 205", teacher: "Mrs. Doe" },
      { subject: "PE", room: "Gym", teacher: "Coach Lee" },
      { subject: "English", room: "Room 204", teacher: "Mr. Smith" },
      { subject: "Lunch", room: "", teacher: "" },
      { subject: "Chemistry", room: "Room 308", teacher: "Mr. Green" },
      { subject: "History", room: "Room 201", teacher: "Mr. Johnson" },
    ],
    Wed: [
      { subject: "Biology", room: "Room 309", teacher: "Ms. White" },
      { subject: "Maths", room: "Room 205", teacher: "Mrs. Doe" },
      { subject: "Break", room: "", teacher: "" },
      { subject: "Chemistry", room: "Room 308", teacher: "Mr. Green" },
      { subject: "History", room: "Room 201", teacher: "Mr. Johnson" },
      { subject: "Geography", room: "Room 202", teacher: "Mrs. Clark" },
      { subject: "Lunch", room: "", teacher: "" },
      { subject: "Physics", room: "Room 307", teacher: "Dr. Brown" },
      { subject: "English", room: "Room 204", teacher: "Mr. Smith" },
    ],
    Thu: [
      { subject: "PE", room: "Gym", teacher: "Coach Lee" },
      { subject: "Art", room: "Room 102", teacher: "Ms. Taylor" },
      { subject: "Break", room: "", teacher: "" },
      { subject: "Biology", room: "Room 309", teacher: "Ms. White" },
      { subject: "Maths", room: "Room 205", teacher: "Mrs. Doe" },
      { subject: "Chemistry", room: "Room 308", teacher: "Mr. Green" },
      { subject: "Lunch", room: "", teacher: "" },
      { subject: "English", room: "Room 204", teacher: "Mr. Smith" },
      { subject: "History", room: "Room 201", teacher: "Mr. Johnson" },
    ],
    Fri: [
      { subject: "Geography", room: "Room 202", teacher: "Mrs. Clark" },
      { subject: "History", room: "Room 201", teacher: "Mr. Johnson" },
      { subject: "Break", room: "", teacher: "" },
      { subject: "Music", room: "Room 105", teacher: "Mr. Harris" },
      { subject: "Art", room: "Room 102", teacher: "Ms. Taylor" },
      { subject: "PE", room: "Gym", teacher: "Coach Lee" },
      { subject: "Lunch", room: "", teacher: "" },
      { subject: "Physics", room: "Room 307", teacher: "Dr. Brown" },
      { subject: "Maths", room: "Room 205", teacher: "Mrs. Doe" },
    ],
    Sat: [
      { subject: "Maths", room: "Room 205", teacher: "Mrs. Doe" },
      { subject: "Geography", room: "Room 202", teacher: "Mrs. Clark" },
      { subject: "Break", room: "", teacher: "" },
      { subject: "History", room: "Room 201", teacher: "Mr. Johnson" },
      { subject: "Chemistry", room: "Room 308", teacher: "Mr. Green" },
      { subject: "Physics", room: "Room 307", teacher: "Dr. Brown" },
      { subject: "Lunch", room: "", teacher: "" },
      { subject: "Biology", room: "Room 309", teacher: "Ms. White" },
      { subject: "English", room: "Room 204", teacher: "Mr. Smith" },
    ],
  };

  return (
    <div className="w-full h-full p-2">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 bg-gray-200 px-4 py-2"></th>
            {timeSlots.map((time, index) => (
              <th
                key={index}
                className="text-sm border border-gray-300 px-4 py-2 text-center bg-gray-200"
              >
                {time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {daysOfWeek.map((day, dayIndex) => (
            <tr key={dayIndex}>
              <td className="text-sm border border-gray-300 px-4 py-2 text-center font-bold bg-gray-200">
                {day}
              </td>
              {timeSlots.map((_, timeIndex) => {
                const classInfo = dummyData[day][timeIndex];
                return (
                  <td
                    key={timeIndex}
                    className={`border border-gray-300 px-4 py-2 text-center ${
                      classInfo.subject === "Break" ||
                      classInfo.subject === "Lunch"
                        ? "bg-gray-200"
                        : ""
                    }`}
                  >
                    {classInfo ? (
                      <div className="py-2">
                        <h3 className="text-sm font-semibold">
                          {classInfo.subject}
                        </h3>
                        <p className="text-xs my-1">{classInfo.room}</p>
                        <p className="text-xs">{classInfo.teacher}</p>
                      </div>
                    ) : (
                      <div>No class</div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
