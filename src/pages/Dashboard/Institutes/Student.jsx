import { useState } from "react";
import InputComponent from "../../../styledComponents/InputComponent";
import ButtonFilled from "../../../styledComponents/ButtonFilled";
import TableComponent from "../../../styledComponents/TableComponent";
import Modal from "../../../styledComponents/Modal";
import AddStudent from "../../../components/Dashboard/Institutes/Student/Modals/AddStudent";

const tableHeader = [
  "Student Name",
  "Class",
  "Section",
  "Roll No.",
  "Parent",
  "Status",
  "Actions",
];

const tableData = [
  ["John Doe", "10", "A", "101", "Mr. Michael Doe", "Active", "View/Edit"],
  ["Jane Smith", "9", "B", "92", "Ms. Lisa Smith", "Promoted", "View/Edit"],
  ["Mary Adams", "11", "A", "110", "Mr. Gary Adams", "Active", "View/Edit"],
  ["Chris Johnson", "12", "C", "135", "Mrs. Emma Johnson", "Inactive", "View/Edit"],
];

const Student = () => {
  const [showModal, setShowModal] = useState(false);

  const displayModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <InputComponent placeholder="Search by student name, class, section, admission year, grades or roll number" />
      <div className="mt-4 flex flex-wrap gap-2">
        <ButtonFilled text="Add Student" onClick={() => displayModal()} />
        <ButtonFilled text="Export (CSV / PDF)" />
        <ButtonFilled text="Delete" />
        <ButtonFilled text="Archieve" />
        <ButtonFilled text="Deactivate" />
        <ButtonFilled text="Import (Bulk)" />
        <ButtonFilled text="Assign to class" />
        <ButtonFilled text="Promote" />
        <ButtonFilled text="Graduate" />
      </div>
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        title="Add Student"
      >
        <AddStudent onCancel={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

export default Student;
