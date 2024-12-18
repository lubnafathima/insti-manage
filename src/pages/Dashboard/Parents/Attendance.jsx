import CardDetailed from "../../../styledComponents/CardDetailed";
import TitleComponent from "../../../styledComponents/TitleComponent";
import TableComponent from "../../../styledComponents/TableComponent";

const attendance = [
  {
    id: 0,
    title: "Overall Average",
    item: ["88%"],
  },
  {
    id: 1,
    title: "Days Attended",
    item: ["142 out of 150 days"],
  },
  {
    id: 2,
    title: "Days Absent",
    item: ["8 days"],
  },
  {
    id: 3,
    title: "Rate",
    item: ["Excellent"],
  },
];

const attendanceLogData = [
  ["Sep 1, 2024", "Monday", "Present", ""],
  ["Sep 2, 2024", "Tuesday", "Absent", "No reason provided"],
  ["Sep 3, 2024", "Wednesday", "Late", "Bus arrived late"],
  ["Sep 4, 2024", "Thursday", "Excused Absence", "Medical leave (Doctor’s note provided)"],
];

const attendanceAnalysis = [
  {
    id: 0,
    title: "Absence Days",
    item: ["Wednesdays (3 absences)"],
  },
  {
    id: 1,
    title: "Late Days",
    item: ["Fridays (2 late entries)"],
  },
  {
    id: 2,
    title: "Performance Impact",
    item: ["Lower exam scores in weeks following absences"],
  },
];

const notificationsData = [
  ["Sep 3, 2024", "Unexcused Absence Notification"],
  ["Sep 5, 2024", "Late Arrival Notification"],
  ["Sep 7, 2024", "Low Attendance Warning"],
];

const attendanceComparison = [
  {
    id: 0,
    title: "Child Attendance",
    item: ["95%"],
  },
  {
    id: 1,
    title: "Class Average Attendance",
    item: ["93%"],
  },
  {
    id: 2,
    title: "School Average Attendance",
    item: ["92%"],
  },
];

const feedbackData = [
  ["Sep 3, 2024", "Mrs. Thompson", "I noticed that Jane has been absent for 3 days this month, and it's affecting her performance in Math. Please ensure that she catches up on missed lessons."],
];

const Attendance = () => {
  return (
    <>
      <TitleComponent title="Attendance" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-8 gap-2">
        {attendance.map((data) => (
          <CardDetailed key={data.id} title={data.title} item={data.item} />
        ))}
      </div>
      <div className="pt-4">
        <TitleComponent title="Attendance Log" />
        <TableComponent
          tableHeader={["Date", "Day", "Status", "Reason/Notes"]}
          tableData={attendanceLogData}
        />
      </div>
      <TitleComponent title="Attendance Analysis" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-8 gap-2">
        {attendanceAnalysis.map((data) => (
          <CardDetailed key={data.id} title={data.title} item={data.item} />
        ))}
      </div>
      <div className="pt-4">
        <TitleComponent title="Notifications" />
        <TableComponent
          tableHeader={["Date", "Reasons"]}
          tableData={notificationsData}
        />
      </div>
      <TitleComponent title="Attendance Comparison" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-8 gap-2">
        {attendanceComparison.map((data) => (
          <CardDetailed key={data.id} title={data.title} item={data.item} />
        ))}
      </div>
      <div className="pt-4">
        <TitleComponent title="Feedback" />
        <TableComponent
          tableHeader={["Date", "Teacher's Name", "Feedback"]}
          tableData={feedbackData}
        />
      </div>
    </>
  );
};

export default Attendance;
