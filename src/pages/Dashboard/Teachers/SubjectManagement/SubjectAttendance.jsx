import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Student Name", "Present", "Absent", "Date", "Notes"];

const tableData = [
  ["John Doe", "✔", "", "09/25/2024", ""],
  ["Jane Smith", "✔", "", "09/25/2024", ""],
  ["Mark Brown", "", "✔", "09/25/2024", "Sick Leave"],
];

const SubjectAttendance = () => {
  return (
    <div>
      <TitleComponent title="" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  )
}

export default SubjectAttendance
