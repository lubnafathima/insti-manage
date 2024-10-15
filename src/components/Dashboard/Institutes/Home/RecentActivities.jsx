import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";
import InputComponent from "../../../../styledComponents/InputComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Activity", "Performed By", "Date", "Status"];

const tableData = [ 
  ["Updated Class 10B timetable", "Jane Doe", "20-Sep-2024", "Completed"],
  ["Updated Class 1B timetable", "Jane", "20-Sep-2024", "Completed"],
  ["Updated Class 0B timetable", "Doe", "20-Sep-2024", "Completed"],
]

const RecentActivities = () => {
  return (
    <div className="w-full">
      <TitleComponent title="Recent Activities" />
      <div className="w-full flex gap-2 mb-4">
        <ButtonFilled text="Filter by Department" />
        <ButtonFilled text="Filter by Action Type" />
      </div>
      <InputComponent placeholder="Search by department, date or status" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  );
};

export default RecentActivities;
