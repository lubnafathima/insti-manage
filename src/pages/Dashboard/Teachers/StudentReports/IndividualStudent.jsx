import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const performanceTableHeader = [
  "Test/Assignment",
  "Marks Obtained",
  "Max Marks",
  "Date",
  "Remarks",
];

const performanceTableData = [
  [
    "Algebra Test",
    "80",
    "100",
    "09/10/2024",
    "Great understanding of algebra concepts",
  ],
  [
    "Geometry Homework",
    "84",
    "100",
    "09/10/2024",
    "Needs improvement in shapes",
  ],
  ["Class Quiz", "84", "100", "09/10/2024", "Excellent performance"],
  ["End-Term Exam", "85", "100", "09/10/2024", "Consistent improvement"],
];

const attendanceTableHeader = [
  "Month",
  "Days Present",
  "Days Absent",
  "Status",
];

const attendanceTableData = [
  ["September", "20", "2", "91%"],
  ["October", "22", "1", "96%"],
];

const IndividualStudent = () => {
  return (
    <div>
      <TitleComponent title="John Doe's Performance Report (Grade 5A - Math)" />
      <TableComponent
        tableHeader={performanceTableHeader}
        tableData={performanceTableData}
      />
      <TitleComponent title="Attendance Overview" />
      <TableComponent
        tableHeader={attendanceTableHeader}
        tableData={attendanceTableData}
      />
      <TitleComponent title="Teacher's Comments:" />
      <div>
        <p className="">
          <span className="font-semibold">1. General Performance:</span> John has been performing consistently well in
          mathematics. He is attentive in class and completes assignments on
          time.
        </p>
        <p className="">
        <span className="font-semibold">2. Behavioral Notes:</span> Positive behavior, respectful, and participates
          actively in discussions.
        </p>
      </div>
    </div>
  );
};

export default IndividualStudent;
