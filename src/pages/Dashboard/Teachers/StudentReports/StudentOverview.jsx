import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Class/Subject", "Average Grade", "Attendance", "Top Performer", "Lowest Performer", "Action"];

const tableData = [
  ["Grade 5A - Math", "82%", "82%", "John Doe", "Mark Brown", "View Report"],
  ["Grade 6B - Science", "82%", "82%", "Jane Smith", "John Doe", "View Report"],
  ["Grade 5A - English", "82%", "82%", "Mark Brown", "Jane Smith", "View Report"],
];

const StudentOverview = () => {
  return (
    <div>
      <TitleComponent title="Student Report Overview" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  );
};

export default StudentOverview;
