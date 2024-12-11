import TitleComponent from "../../../../styledComponents/TitleComponent";
import TestCalendar from "../../../../styledComponents/TestCalendar";

const attendanceData = {
  2: "Present",
  3: "Present",
  4: "Present",
  5: "Present",
  6: "Absent",
  9: "Present",
  10: "Present",
  11: "Present",
  12: "Present",
  13: "Present",
  16: "Present",
  17: "Present",
  18: "Present",
  19: "Absent",
  20: "Absent",
  23: "Present",
  24: "Present",
  25: "Present",
  26: "Present",
  27: "Present",
  30: "Present",
  31: "Present",
};

const AttendanceRecord = () => {
  return (
    <div>
      <TitleComponent title="Attendance Record" />
      <TestCalendar task={attendanceData} />
    </div>
  );
};

export default AttendanceRecord;
