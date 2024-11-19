import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Unit", "Topic", "Date", "Status", "Materials Available"];

const tableData = [
  ["Algebra", "Linear Equations", "09/25/2024", "In Progress", "View Materials"],
  ["Geometry", "Area of Triangles", "09/25/2024", "Pending", "Upload Materials"],
  ["Chemistry", "Atomic Structure", "09/25/2024", "Scheduled", "View Materials"],
];

const CurriculumManagement = () => {
  return (
    <div>
      <TitleComponent title="" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  );
};

export default CurriculumManagement;
