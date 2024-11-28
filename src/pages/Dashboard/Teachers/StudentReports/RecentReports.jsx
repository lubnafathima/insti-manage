import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Report Name", "Date Created", "Class/Subject", "Actions"];

const tableData = [
  ["John Doe Math Report", "09/25/2024", "Grade 5A - Math", "View / Export"],
  ["Jane Smith Math Assignment", "09/25/2024", "Grade 6A - Math", "View / Export"],
  ["Class 7B Math Test", "09/25/2024", "Grade 7B - Math", "View / Export"],
];

const RecentReports = () => {
  return (
    <div>
      <TitleComponent title="" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  )
}

export default RecentReports
