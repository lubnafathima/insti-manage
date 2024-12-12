import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell, Tooltip as PieTooltip } from "recharts";

const gradeData = [
  { term: "Term 1", GPA: 3.6 },
  { term: "Term 2", GPA: 3.8 },
  { term: "Term 3", GPA: 3.9 },
];

const attendanceData = [
  { week: "Week 1", attendance: 90 },
  { week: "Week 2", attendance: 85 },
  { week: "Week 3", attendance: 88 },
  { week: "Week 4", attendance: 95 },
];

const assignmentData = [
  { name: "Completed", value: 75 },
  { name: "Pending", value: 25 },
];

const ProgressTracking = () => {
  return (
    <div>
      <TitleComponent title="Progress Tracking" />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div>
          <TitleComponent title="Grade Progress" />
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={gradeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="term" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="GPA"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <TitleComponent title="Attendance Progress" />
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="attendance"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <TitleComponent title="Assignment Completion Rates" />
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={assignmentData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#82ca9d"
                label
              >
                <Cell fill="#4caf50" />
                <Cell fill="#ff4d4d" />
              </Pie>
              <PieTooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row gap-2">
        <div className="w-full">
          <TitleComponent title="Term-by-Term Analysis" />
          <TableComponent
            tableHeader={["Term", "GPA"]}
            tableData={gradeData.map((item) => [item.term, item.GPA])}
          />
        </div>

        <div className="w-full">
          <TitleComponent title="Week-by-Week Attendance" />
          <TableComponent
            tableHeader={["Week", "Attendance Percentage"]}
            tableData={attendanceData.map((item) => [
              item.week,
              `${item.attendance}%`,
            ])}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
