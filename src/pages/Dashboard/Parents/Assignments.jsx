import TitleComponent from "../../../styledComponents/TitleComponent";
import TableComponent from "../../../styledComponents/TableComponent";

const assignmentsData = [
  ["Math Homework", "2024-12-18", "Completed"],
  ["Science Project", "2024-12-20", "Pending"],
  ["History Essay", "2024-12-22", "Completed"],
  ["English Reading", "2024-12-25", "Pending"],
  ["Art Project", "2024-12-28", "In Progress"],
  ["Physics Lab Report", "2024-12-30", "Pending"],
  ["Chemistry Quiz", "2025-01-05", "Completed"],
  ["Geography Presentation", "2025-01-10", "Pending"],
  ["Music Assignment", "2025-01-12", "Completed"],
  ["Computer Science Final", "2025-01-15", "Pending"]
];

const Assignments = () => {
  return (
    <>
      <div className="pt-4">
        <TitleComponent title="Assignments" />
        <TableComponent
          tableHeader={["Assignment", "Due Date", "Status"]}
          tableData={assignmentsData}
        />
      </div>
    </>
  );
};

export default Assignments;
