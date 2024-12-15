import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const attendanceData = {
  overallAttendance: 95,
  absentDates: ["09/12/2024", "09/22/2024", "10/01/2024"],
  reasonsForAbsence: [
    "Family Event (approved by school)",
    "Medical Leave (approved by school)",
    "Family Event (approved by school)",
  ],
  teacherComment: "Please make sure to catch up on missed assignments.",
  attendanceTrends: [
    { week: "Week 1", attendance: 100 },
    { week: "Week 2", attendance: 90 },
    { week: "Week 3", attendance: 95 },
    { week: "Week 4", attendance: 98 },
    { week: "Week 5", attendance: 92 },
  ],
};

const AttendanceReports = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="p-6">
      <div className="w-full flex justify-between items-center mb-4">
        <TitleComponent title="Attendance Reports" />
        <ButtonFilled text="Download Report" />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold">Total Attendance</h2>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">
              Attendance: {attendanceData.overallAttendance}%
            </span>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${attendanceData.overallAttendance}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold">Absent Dates & Reasons</h2>
        <div className="mt-4 space-y-4">
          {attendanceData.absentDates.map((date, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{date}</span>
              <span className="text-sm text-gray-600">
                {attendanceData.reasonsForAbsence[index]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {attendanceData.teacherComment && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold">Teacher&#39;s Comment</h2>
          <div className="mt-4">
            <p>{attendanceData.teacherComment}</p>
          </div>
        </div>
      )}
      <div className="w-full flex gap-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold">Attendance Calendar</h2>
          <div className="mt-4">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              tileClassName={({ date }) =>
                attendanceData.absentDates.includes(date.toLocaleDateString())
                  ? "bg-red-200"
                  : ""
              }
            />
          </div>
        </div>

        <div className="w-full bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold">Attendance Trends</h2>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData.attendanceTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="attendance" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReports;
