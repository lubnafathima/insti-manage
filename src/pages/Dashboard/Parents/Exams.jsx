import TitleComponent from "../../../styledComponents/TitleComponent";
import TableComponent from "../../../styledComponents/TableComponent";

const examsData = [
  ["Math Final", "2024-12-18", "Scheduled"],
  ["Science Midterm", "2024-12-20", "Scheduled"],
  ["History Final", "2024-12-22", "Scheduled"],
  ["English Literature Exam", "2024-12-25", "Scheduled"],
  ["Physics Final", "2025-01-05", "Scheduled"],
  ["Chemistry Midterm", "2025-01-10", "Scheduled"],
  ["Geography Final", "2025-01-15", "Scheduled"],
  ["Computer Science Final", "2025-01-18", "Scheduled"],
  ["Music Theory Exam", "2025-01-20", "Scheduled"],
  ["Art History Final", "2025-01-22", "Scheduled"],
];

const Exams = () => {
  return (
    <div>
      <div className="pt-4">
        <TitleComponent title="Exams" />
        <TableComponent
          tableHeader={["Exam", "Date", "Status"]}
          tableData={examsData}
        />
      </div>
    </div>
  );
};

export default Exams;
