import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const performanceData = [
  ["GPA", "3.8 (out of 4.0)"],
  ["Attendance", "88%"],
  ["Completed Assignments", "95%"],
  ["Pending Assignments", "2 (Math: Essay, Science: Lab Report)"],
  ["Exams Completed", "4 out of 5"],
];

const pendingAssignments = [
  ["Math", "Essay"],
  ["Science", "Lab Report"]
];

const PerformanceSummary = () => {
  return (
    <>
      <TitleComponent title="Performance Summary" />
      
      <TableComponent
        tableHeader={["Metric", "Value"]}
        tableData={performanceData}
      />

      <TitleComponent title="Pending Assignments" />
      
      <TableComponent
        tableHeader={["Subject", "Assignment"]}
        tableData={pendingAssignments}
      />
    </>
  );
};

export default PerformanceSummary;
