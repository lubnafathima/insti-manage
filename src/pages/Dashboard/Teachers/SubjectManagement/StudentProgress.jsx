import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Student Name", "Attendance", "Grades (Average)", "Progress", "Comments"];

const tableData = [
  ["John Doe", "75%", "80%", "Improving", "Excellent Work"],
  ["Jane Smith", "75%", "70%", "Declining", "Needs Improvement"],
  ["Mark Brown", "95%", "95%", "Steady", "Consistent"],
];

const StudentProgress = () => {
  return (
    <div>
      <TitleComponent title="" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  )
}

export default StudentProgress
