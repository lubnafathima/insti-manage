import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = [
  "Exam Title",
  "Class",
  "Subject",
  "Exam Date",
  "Exam Type",
  "Actions",
];

const tableData = [
  [
    "Midterm Exam",
    "Grade 9A",
    "Science",
    "2024-10-05",
    "Written",
    "View, Edit, Delete",
  ],
  [
    "Online Quiz 1",
    "Grade 7B",
    "History",
    "2024-10-05",
    "Online",
    "View, Edit, Delete",
  ],
];

const ExamOverview = () => {
  return (
    <div>
      <TitleComponent title="Exam Overview" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
      <p>
        Exam Overview <br />
        Similar to assignments, this section provides an overview of scheduled,
        ongoing, and completed exams. <br />
        <br />
        Create New Exam <br />
        Teachers can schedule and create exams with the following options:{" "}
        <br />
        Exam Title <br />
        Class Selection <br />
        Subject Selection <br />
        Exam Date <br />
        Exam Type (Written/Online) <br />
        Time Limit <br />
        Exam Format (Multiple Choice, Short Answer, Essay, etc.) <br />
        Upload Exam Paper (if applicable) <br />
        Assign Grading Criteria <br />
        <br />
        View Assignment/Exam Details <br />
        When a teacher clicks on an assignment or exam row, they are redirected
        to a detailed page with the following: <br />
        Assignment/Exam Title <br />
        Class & Subject <br />
        Description/Instructions <br />
        Submissions Overview (for assignments) <br />
        Student Grades & Status (for exams) <br />
        Total Submissions <br />
        Submitted Files (with download links) <br />
        Grade Input (Manual grading for written exams/assignments) <br />
        Mark as Complete/Graded (toggle for the teacher) <br />
      </p>
    </div>
  );
};

export default ExamOverview;
