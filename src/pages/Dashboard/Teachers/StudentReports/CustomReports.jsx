import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Student Name", "Test 1", "Test 2", "Homework", "Attendance", "Behavior Notes"];

const tableData = [
  ["John Doe", "88%", "88%", "88%", "88%", "Excellent Work"],
  ["Jane Smith", "78%", "80%", "85%", "88%", "Good Improvement"],
  ["Mark Brown", "88%", "85%", "80%", "75%", "Needs Attention"],
];

const CustomReports = () => {
  return (
    <div>
      <TitleComponent title="Custom Report for Grade 5A - Math (September 2024):" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  );
};

export default CustomReports;
