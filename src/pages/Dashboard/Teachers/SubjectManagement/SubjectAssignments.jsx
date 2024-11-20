import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Assignment Title", "Due Date", "Total Submissions", "Pending Submissions", "Materials Available"];

const tableData = [
  ["Algebra Practice", "09/25/2024", "25/30", "5", "Grade"],
  ["Science Lab Experiment", "09/25/2024", "20/25", "18", "View Submissions"],
  ["Geometry Project", "09/25/2024", "15/30", "15", "View Submissions"],
];

const SubjectAssignments = () => {
  return (
    <div>
    <TitleComponent title="Subject Assignments" />
    <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  )
}

export default SubjectAssignments
