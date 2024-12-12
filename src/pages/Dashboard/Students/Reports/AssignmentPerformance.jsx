import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const assignmentData = [
  {
    name: "Math Assignment 1",
    grade: "95%",
    status: "Completed",
    feedback: "Great work!",
  },
  {
    name: "Science Lab Report",
    grade: "85%",
    status: "Pending",
    feedback: "Due: Oct 10",
  },
  {
    name: "History Essay",
    grade: "88%",
    status: "Completed",
    feedback: "Well-written, but could use more analysis.",
  },
  {
    name: "English Research Paper",
    grade: "90%",
    status: "Completed",
    feedback: "Excellent work, great sources.",
  },
  {
    name: "Art Project",
    grade: "92%",
    status: "Completed",
    feedback: "Great creativity, well done!",
  },
  {
    name: "Physical Education Log",
    grade: "100%",
    status: "Completed",
    feedback: "Perfect attendance and effort.",
  },
  {
    name: "Computer Science Coding Assignment",
    grade: "88%",
    status: "Pending",
    feedback: "Due: Oct 15",
  },
];

const formattedAssignmentData = assignmentData.map((assignment) => [
  assignment.name,
  assignment.grade,
  assignment.status,
  assignment.feedback,
]);

const AssignmentPerformance = () => {
  return (
    <>
      <TitleComponent title="Assignment Performance" />
      <TableComponent
        tableHeader={["Assignment Name", "Grade/Score", "Status", "Feedback"]}
        tableData={formattedAssignmentData}
      />
    </>
  );
};

export default AssignmentPerformance;
