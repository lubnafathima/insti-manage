import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Event Name", "Date", "Details", "Action"];

const tableData = [ 
  ["Parent-Teacher Meeting - 5A", "09/19/2024", "Discuss progress with Lily’s parents", "View"],
  ["Science Project Presentation", "09/18/2024", "Grade 6B students presenting projects", "View"],
  ["Annual Sports Day", "09/15/2024", "Participation details for Grade 5", "View"],
];

const UpcomingEvents = () => {
  return (
    <div>
      <TitleComponent title="Upcoming Events" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  )
}

export default UpcomingEvents
