import TitleComponent from "../../../styledComponents/TitleComponent";
import Cards from "../../../styledComponents/Cards";

const analyticsOverview = [
  {
    id: 0,
    title: "Total Students",
    content: "1200",
  },
  {
    id: 1,
    title: "Total Teachers",
    content: "75",
  },
  {
    id: 2,
    title: "Average Class Size",
    content: "30 students/class",
  },
  {
    id: 3,
    title: "Avg. Attendance Rate",
    content: "95%",
  },
  {
    id: 4,
    title: "Avg. Graduation Rate",
    content: "85%",
  },
  {
    id: 5,
    title: "Open Support Tickets",
    content: "3",
  },
  {
    id: 6,
    title: "Close Support Tickets",
    content: "15",
  },
];

const studentEnrollment = [
  {
    id: 0,
    title: "Line Chart",
    content: "Jan: 150, Feb: 140, Mar: 160, Apr: 170, etc.",
  },
];

const teacherStudentRatio = [
  {
    id: 0,
    title: "Pie Chart",
    content: "75 teachers,, 1200 students,, ratio: 1:16",
  },
];

const attendanceOverview = [
  {
    id: 0,
    title: "Bar Graph",
    content: "Grade 1: 98%, Grade 2: 94%, etc.",
  },
];

const financialHealth = [
  {
    id: 0,
    title: "Pie Chart",
    content: "Revenue: $1,200,000, Expenses: $800,000",
  },
];

const Reports = () => {
  return (
    <div>
      <div>
        <TitleComponent title="Analytics Overview" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
          {analyticsOverview.map((data) => (
            <Cards key={data.id} title={data.title} content={data.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
