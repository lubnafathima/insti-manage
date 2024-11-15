import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Activity", "Date", "Status", "Action"];

const tableData = [ 
  ["Uploaded Math Assignment", "09/25/2024", "Completed", "View"],
  ["Scheduled Parent-Teacher Meeting", "09/24/2024", "In Progress", "View"],
  ["Graded Science Quiz", "09/23/2024", "Completed", "View"],
  ["Responded to Parent Query", "09/22/2024", "Pending", "View"],
];

const RecentActivities = () => {
  return (
    <div>
      <TitleComponent title="Recent Activities" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  )
}

export default RecentActivities
