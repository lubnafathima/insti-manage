import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const submissionHeader = [
  "Assignment Name",
  "Subject",
  "Due Date",
  "Status",
  "Submission Date",
  "Actions",
];

const getDateAfterDays = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString(); // Formats date as MM/DD/YYYY
};

const assignmentData = [
  ["Trigonometry Worksheet", "Math", getDateAfterDays(2), "Pending", "-", "Submit"],
  ["Physics Lab Report", "Science", getDateAfterDays(7), "Submitted", "09/25/2024", "View"],
  ["Shakespeare Essay", "English", getDateAfterDays(3), "Overdue", "09/28/2024", "View"],
  ["Periodic Table Project", "Chemistry", getDateAfterDays(6), "Pending", "-", "Submit"],
  ["World War II Research Paper", "History", getDateAfterDays(1), "Pending", "-", "Submit"],
  ["Cell Division Presentation", "Biology", getDateAfterDays(4), "Submitted", "09/27/2024", "View"],
  ["Landscape Painting", "Art", getDateAfterDays(5), "Pending", "-", "Submit"],
  ["Climate Change Report", "Geography", getDateAfterDays(14), "Pending", "-", "Submit"],
  ["JavaScript Quiz", "Computer Science", getDateAfterDays(7), "Submitted", "09/29/2024", "View"],
  ["Macroeconomics Review", "Economics", getDateAfterDays(10), "Pending", "-", "Submit"],
  ["English Literature Project", "English", getDateAfterDays(12), "Pending", "-", "Submit"],
  ["Advanced Calculus Homework", "Math", getDateAfterDays(9), "Submitted", "09/26/2024", "View"],
  ["Artificial Intelligence Assignment", "Computer Science", getDateAfterDays(8), "Pending", "-", "Submit"],
  ["World History Essay", "History", getDateAfterDays(6), "Overdue", "09/29/2024", "View"],
];

const Submission = () => {
  return (
    <div>
      <TitleComponent title="Assignments Submission" />
      <TableComponent
        tableHeader={submissionHeader}
        tableData={assignmentData}
      />
    </div>
  );
};

export default Submission;
