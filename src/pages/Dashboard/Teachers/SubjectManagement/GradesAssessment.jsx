import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Student Name", "Assignment Grade", "Test Grade", "Overall Grade", "Comments"];

const tableData = [
  ["John Doe", "95%", "95%", "95%", "Excellent Work"],
  ["Jane Smith", "65%", "65%", "65%", "Needs Improvement"],
  ["Mark Brown", "88%", "88%", "88%", "Consistent"],
];

const GradesAssessment = () => {
  return (
    <div>
      <TitleComponent title="Grades & Assessment" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  )
}

export default GradesAssessment
