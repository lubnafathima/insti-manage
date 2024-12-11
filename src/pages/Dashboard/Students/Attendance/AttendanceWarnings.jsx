import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableData = [
  ["80%", "85%", "At Risk"],
  ["90%", "85%", "Pass"],
  ["60%", "75%", "Below Minimum"],
];
const AttendanceWarnings = () => {
  return (
    <>
      <TitleComponent title="Attendance Warnings" />
      <TableComponent tableHeader={["Current Attendance", "Minimum Required Attendance", "Compliance Status"]} tableData={tableData} />
    </>
  );
};

export default AttendanceWarnings;
