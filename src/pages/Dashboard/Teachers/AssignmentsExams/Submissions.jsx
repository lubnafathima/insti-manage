import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = [
  "Student Name",
  "Submission Date (for assignments)",
  "Status",
  "Marks Scored",
  "Comments (if any)",
  "Actions",
];

const tableData = [
  [
    "John Doe",
    "2024-09-27",
    "Submitted",
    "45/50",
    "Well done!",
    "View Submission, Grade, Leave Feedback",
  ],
  [
    "Jane Smith",
    "2024-09-27",
    "Not Submitted",
    "0/50",
    "Late submission",
    "View Submission, Grade, Leave Feedback",
  ],
];

const Submissions = () => {
  return (
    <div>
      <TitleComponent title="" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  );
};

export default Submissions;
