import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Student Name", "Overall Grade", "Attendance", "Performance Trend"];

const tableData = [
  ["John Doe", "85%", "85%", "Steady"],
  ["Jane Smith", "70%", "79%", "Improving"],
  ["Mark Brown", "70%", "65%", "Declining"],
  ["Emily Davis", "60%", "60%", "Needs Improvement"],
];

const SubjectReports = () => {
  return (
    <div>
      <TitleComponent title="Class/Subject-wide Reports" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
      <TitleComponent title="Grade Distribution Bar Chart:" />
      <p className="">
        A bar chart visualizing the range of grades within the class (e.g.,
        60%-70%, 70%-80%, 80%-90%).
      </p>
      <TitleComponent title="Attendance Trend Line Graph:" />
      <p className="">
        A line graph showing attendance trends for the subject, visualizing
        which months or periods had lower attendance.
      </p>
    </div>
  );
};

export default SubjectReports;
