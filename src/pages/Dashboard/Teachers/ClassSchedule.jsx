import TableComponent from "../../../styledComponents/TableComponent";

const tableHeader = ["Day", "Roll Number", "Subject", "Class", "Action"];

const tableData = [
  ["Monday", "10:00 AM", "Mathematics", "Grade 5A", "Edit"],
  ["Monday", "11:00 AM", "Mathematics", "Grade 6B", "Edit"],
  ["Monday", "12:00 PM", "Mathematics", "Grade 5A", "Edit"],
  ["Tuesday", "10:00 AM", "Mathematics", "Grade 5A", "Edit"],
  ["Tuesday", "11:00 AM", "Mathematics", "Grade 6B", "Edit"],
  ["Tuesday", "12:00 PM", "Mathematics", "Grade 5A", "Edit"],
  ["Wednesday", "10:00 AM", "Mathematics", "Grade 5A", "Edit"],
  ["Wednesday", "11:00 AM", "Mathematics", "Grade 6B", "Edit"],
  ["Wednesday", "12:00 PM", "Mathematics", "Grade 5A", "Edit"],
  ["Thursday", "10:00 AM", "Mathematics", "Grade 5A", "Edit"],
  ["Thursday", "11:00 AM", "Mathematics", "Grade 6B", "Edit"],
  ["Thursday", "12:00 PM", "Mathematics", "Grade 5A", "Edit"],
  ["Friday", "10:00 AM", "Mathematics", "Grade 5A", "Edit"],
  ["Friday", "11:00 AM", "Mathematics", "Grade 6B", "Edit"],
  ["Friday", "12:00 PM", "Mathematics", "Grade 5A", "Edit"],
];

const ClassSchedule = () => {
  return (
    <div>
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
    </div>
  );
};

export default ClassSchedule;
