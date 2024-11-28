import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = [
  "Assignment Title",
  "Class",
  "Subject",
  "Due Date",
  "Status",
  "Total Submissions",
  "Actions",
];

const tableData = [
  [
    "Algebra Homework",
    "Grade 8A",
    "Mathematics",
    "2024-10-05",
    "Pending",
    "25/30",
    "View, Edit, Delete",
  ],
  [
    "English Essay",
    "Grade 10B",
    "English",
    "2024-10-02",
    "Graded",
    "30/30",
    "View, Edit, Delete",
  ],
];

const AssignmentsOverview = () => {
  return (
    <div>
      <TitleComponent title="Assignments Overview" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
      <p>
        Assignments Overview <br />
        This section provides a quick glance at all ongoing, upcoming, and past
        assignments with key details.
        <br />
        Create New Assignment <br />
        Teachers can create new assignments with the following fields: <br />
        Assignment Title <br />
        Class Selection (Dropdown to select multiple classes) <br />
        Subject Selection <br />
        Description/Instructions (Rich text editor) <br />
        Due Date <br />
        Attachments (Upload files, e.g., PDFs, Word documents) <br />
        Maximum Marks <br />
        Allow Late Submissions (Yes/No toggle) <br />
        <br />
        View Assignment/Exam Details
        <br />
        When a teacher clicks on an assignment or exam row, they are redirected
        to a detailed page with the following:
        <br />
        Assignment/Exam Title
        <br />
        Class & Subject
        <br />
        Description/Instructions
        <br />
        Submissions Overview (for assignments)
        <br />
        Student Grades & Status (for exams)
        <br />
        Total Submissions
        <br />
        Submitted Files (with download links)
        <br />
        Grade Input (Manual grading for written exams/assignments)
        <br />
        Mark as Complete/Graded (toggle for the teacher)
        <br />
      </p>
    </div>
  );
};

export default AssignmentsOverview;
