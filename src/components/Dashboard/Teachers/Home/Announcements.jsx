import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Title", "Date", "Details", "Action"];

const tableData = [ 
  ["Midterm Exam Schedule Released", "09/23/2024", "Exams will start on October 5th", "View Details"],
  ["Teacher Training Session Reminder", "09/22/2024", "Training on the new grading system", "View Details"],
  ["School Annual Day Announcement", "09/20/2024", "Scheduled for November 1st", "View Details"],
];

const Announcements = () => {
  return (
    <div>
      <TitleComponent title="Announcements" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
      
    </div>
  )
}

export default Announcements
