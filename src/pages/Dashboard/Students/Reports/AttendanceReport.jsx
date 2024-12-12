import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const attendanceData = [
  {
    subject: "Math",
    percentage: "90%",
    attended: 18,
    total: 20,
  },
  {
    subject: "Science",
    percentage: "85%",
    attended: 17,
    total: 20,
  },
  {
    subject: "English",
    percentage: "92%",
    attended: 18,
    total: 20,
  },
  {
    subject: "History",
    percentage: "95%",
    attended: 19,
    total: 20,
  },
  {
    subject: "Physical Education",
    percentage: "88%",
    attended: 17,
    total: 20,
  },
  {
    subject: "Computer Science",
    percentage: "94%",
    attended: 19,
    total: 20,
  },
  {
    subject: "Art",
    percentage: "91%",
    attended: 18,
    total: 20,
  },
  {
    subject: "Chemistry",
    percentage: "89%",
    attended: 18,
    total: 20,
  },
];

const termComparisonData = [
  {
    subject: "Math",
    term1: 18,
    term2: 16,
  },
  {
    subject: "Science",
    term1: 17,
    term2: 15,
  },
  {
    subject: "English",
    term1: 18,
    term2: 17,
  },
  {
    subject: "History",
    term1: 19,
    term2: 18,
  },
  {
    subject: "Ph.Ed",
    term1: 17,
    term2: 16,
  },
  {
    subject: "CS",
    term1: 19,
    term2: 18,
  },
  {
    subject: "Art",
    term1: 18,
    term2: 17,
  },
  {
    subject: "Chemistry",
    term1: 18,
    term2: 17,
  },
];

const formattedAttendanceData = attendanceData.map((subject) => [
  subject.subject,
  subject.percentage,
  `${subject.attended} out of ${subject.total}`,
]);

const AttendanceReport = () => {
  return (
    <>
      <TitleComponent title="Attendance Report" />

      <TableComponent
        tableHeader={[
          "Subject",
          "Attendance Percentage",
          "Total Classes Attended",
        ]}
        tableData={formattedAttendanceData}
      />

      <div className="mt-8">
        <TitleComponent title="Comparison Between Terms" />

        <div className="w-full">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={termComparisonData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="term1" fill="#8884d8">
                <LabelList dataKey="term1" position="top" />
              </Bar>
              <Bar dataKey="term2" fill="#82ca9d">
                <LabelList dataKey="term2" position="top" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default AttendanceReport;
