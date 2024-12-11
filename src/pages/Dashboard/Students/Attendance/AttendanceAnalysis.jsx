import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const analysisData = [
  ["John Doe", "45 days", "5 days", "85%", "Pass"],
  ["Jane Smith", "50 days", "3 days", "94%", "Pass"],
  ["Alice Johnson", "40 days", "10 days", "80%", "At Risk"],
  ["Bob Brown", "30 days", "20 days", "60%", "Below Minimum"],
];

const AttendanceAnalysis = () => {
  return (
    <div>
      <TitleComponent title="Attendance Analysis" />
      <div className="mt-6">
        <TableComponent
          tableHeader={[
            "Student Name",
            "Days Attended",
            "Absences",
            "Attendance Percentage",
            "Compliance Status",
          ]}
          tableData={analysisData}
        />
      </div>
    </div>
  );
};

export default AttendanceAnalysis;
