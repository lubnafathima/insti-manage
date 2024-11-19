import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableHeader = ["Resource Title", "Unit", "Date Uploaded", "Actions"];

const tableData = [
  ["Algebra Worksheet 1", "Algebra", "09/20/2024", "View / Download"],
  ["Science Lab Instructions", "Chemistry", "09/20/2024", "View / Download"],
  ["Geometry Notes", "Geometry", "09/20/2024", "View / Download"],
];

const SubjectResources = () => {
  return (
    <div>
      <TitleComponent title="" />
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  )
}

export default SubjectResources
