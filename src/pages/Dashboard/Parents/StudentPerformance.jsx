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
    title: "Top Subject",
    item: ["Math - 92%"],
  },
  {
    id: 2,
    title: "Low Performing Subject",
    item: ["English - 78%"],
  },
  {
    id: 3,
    title: "Class Rank",
    item: ["7th"],
  },
];

const studentPerformanceHeader = [
  "Subject",
  "Assignment Average",
  "Exam Average",
  "Overall Average",
];

const studentPerformanceData = [
  ["Maths", "90%", "95%", "92%"],
  ["English", "85%", "70%", "78%"],
  ["Science", "89%", "87%", "88%"],
];

const upcomingAssignmentsHeader = [
  "Assignments Title",
  "Subject",
  "Grade",
  "Due Date",
  "Status",
];

const upcomingAssignmentsData = [
  ["Math Homework #5", "Maths", "90%", "Sep 20, 2024", "Submitted"],
  ["Essay Writing", "English", "89%", "Sep 20, 2024", "Submitted"],
  ["Lab Report #2", "Science", "92%", "Sep 20, 2024", "Pending"],
];

const upcomingExamsHeader = ["Exam Name", "Subject", "Grade", "Date"];

const upcomingExamsData = [
  ["Midterm Exam", "Maths", "90%", "Sep 20, 2024"],
  ["Midterm Exam", "English", "89%", "Sep 20, 2024"],
  ["Midterm Exam", "Science", "92%", "Sep 20, 2024"],
];

const classComparisonHeader = [
  "Subject",
  "Student Grade",
  "Class Average",
  "Difference",
];

const classComparisonData = [
  ["Maths", "95%", "87%", "-8%"],
  ["English", "70%", "82%", "+12%"],
  ["Science", "87%", "86%", "-1%"],
];

const feedbackHeader = ["Subject", "Feedack"];

const feedbackData = [
  [
    "Maths",
    "Great improvement in the last exam. Keep up the consistent effort!",
  ],
  ["English", "Needs to work on grammar and essay writing skills."],
  [
    "Science",
    "Good understanding of the concepts but needs to improve on lab work.",
  ],
];

const awardsHeader = ["Title", "Date"];

const awardsData = [
  ["Math Excellence Award", "Received on Sep 20, 2024"],
  ["Perfect Attendance", "Received on Sep 30, 2024"],
];

const StudentPerformance = () => {
  return (
    <>
      <TitleComponent title="Attendance" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-8 gap-2">
        {attendance.map((data) => (
          <CardDetailed key={data.id} title={data.title} item={data.item} />
        ))}
      </div>
      <div className="pt-4">
        <TitleComponent title="Student Performance" />
        <TableComponent
          tableHeader={studentPerformanceHeader}
          tableData={studentPerformanceData}
        />
      </div>
      <div className="pt-4">
        <TitleComponent title="Upcoming Assignments" />
        <TableComponent
          tableHeader={upcomingAssignmentsHeader}
          tableData={upcomingAssignmentsData}
        />
      </div>
      <div className="pt-4">
        <TitleComponent title="Upcoming Exams" />
        <TableComponent
          tableHeader={upcomingExamsHeader}
          tableData={upcomingExamsData}
        />
      </div>
      <div className="pt-4">
        <TitleComponent title="Class Comparison" />
        <TableComponent
          tableHeader={classComparisonHeader}
          tableData={classComparisonData}
        />
      </div>
      <div className="pt-4">
        <TitleComponent title="Feedback" />
        <TableComponent tableHeader={feedbackHeader} tableData={feedbackData} />
      </div>
      <div className="pt-4">
        <TitleComponent title="Awards & Recognition" />
        <TableComponent tableHeader={awardsHeader} tableData={awardsData} />
      </div>
    </>
  );
};

export default StudentPerformance;
