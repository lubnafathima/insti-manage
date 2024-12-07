import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const dueSoonHeader = [
  "Subject Name",
  "Assignment Title",
  "Due Date",
  "Status",
  "Actions",
];

const dueSoonData = [
  [
    "Math",
    "Assignment 1 (Trigonometry Worksheet)",
    "09/25/2024",
    "Pending",
    "View/Submit",
  ],
  [
    "History",
    "History Essay (World War II Analysis)",
    "09/25/2024",
    "Submitted",
    "View/Submit",
  ],
  [
    "Science",
    "Science Project (Lab Report)",
    "09/25/2024",
    "Not Started",
    "View/Submit",
  ],
];

const upcomingDeadlinesHeader = [
  "Subject Name",
  "Due",
  "Title",
  "Exam Date",
  "Actions",
];

const upcomingDeadlinesData = [
  ["Math", "2 Days", "Trigonometry Worksheet", "09/25/2024", "View"],
  ["Science", "4 Days", "Science Project", "09/25/2024", "View"],
];

const feedbackHeader = [
  "Subject Name",
  "Category",
  "Grade",
  "Feedback",
  "Actions",
];

const feedbackData = [
  [
    "Math",
    "Assignment 1",
    "85%",
    "Good work, but be careful with calculations in Section 3",
    "View",
  ],
  ["History", "Essay", "92%", "Excellent analysis of the topic", "View"],
];

const AssignmentsOverview = () => {
  return (
    <>
      <TitleComponent title="Assignments Overview" />
      <div>
        <TitleComponent title="Due Soon" />
        <TableComponent tableHeader={dueSoonHeader} tableData={dueSoonData} />
      </div>
      <div>
        <TitleComponent title="Upcoming Deadlines" />
        <TableComponent
          tableHeader={upcomingDeadlinesHeader}
          tableData={upcomingDeadlinesData}
        />
      </div>
      <div>
        <TitleComponent title="Feedback" />
        <TableComponent tableHeader={feedbackHeader} tableData={feedbackData} />
      </div>
    </>
  );
};

export default AssignmentsOverview;
