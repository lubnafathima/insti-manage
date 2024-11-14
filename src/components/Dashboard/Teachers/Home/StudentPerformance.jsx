import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Student Name", "Class", "Details", "Action"];

const tableData = [ 
  ["Lily Evans", "Grade 5A", "Mathematics Grade <50%", "View"],
  ["John Doe", "Grade 6B", "Frequent Absences", "View"],
];

const StudentPerformance = () => {
  return (
    <div>
      <TitleComponent title="Student Performance Alerts" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
      
    </div>
  )
}

export default StudentPerformance
