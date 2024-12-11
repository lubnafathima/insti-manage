import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const tableData = [
  ["09/25/2024", "Unexcused", "None", "Submit/Update Reason"],
  ["09/26/2024", "Excused", "Medical Certificate", "Submit/Update Reason"],
  ["09/24/2024", "Excused", "Family Emergency", "Submit/Update Reason"],
];

const AbsenceHistory = () => {
  return (
    <>
      <TitleComponent title="" />
      <TableComponent
        tableHeader={[
          "Date of Absence",
          "Status",
          "Reason for Absence",
          "Action",
        ]}
        tableData={tableData}
      />
    </>
  );
};

export default AbsenceHistory;
