import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Event", "Date", "Type"];

const tableData = [ 
  ["Science Exhibition", "20-Sep-2024", "School Event"],
  ["Quarterly Exams Start", "01-Oct-2024", "Examination"],
  ["Diwali Holiday", "15-Oct-2024", "Holiday"],
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
