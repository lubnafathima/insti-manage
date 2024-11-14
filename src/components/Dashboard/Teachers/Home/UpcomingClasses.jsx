import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Class Name", "Time", "Subject", "Action"];

const tableData = [ 
  ["Grade 5C", "10:00 AM", "Mathematics", "View"],
  ["Grade 6B", "1:00 pM", "Science", "View"],
  ["Grade 7A", "2:00 pM", "History", "View"],
];

const UpcomingClasses = () => {
  return (
    <div>
      <TitleComponent title="Upcoming Classes" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
      
    </div>
  )
}

export default UpcomingClasses
