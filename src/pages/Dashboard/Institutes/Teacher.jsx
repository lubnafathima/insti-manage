import { useState } from "react";
import InputComponent from "../../../styledComponents/InputComponent";
import ButtonFilled from "../../../styledComponents/ButtonFilled";
import TableComponent from "../../../styledComponents/TableComponent";
import Modal from "../../../styledComponents/Modal";
import AddTeacher from "../../../components/Dashboard/Institutes/Teacher/Modals/AddTeacher";

const tableHeader = [
  "Teacher Name",
  "Department",
  "Class Teacher",
  "Subjects Taught",
  "Actions",
];

const tableData = [
  ["Ms. Smith", "Science", "10B", "Physics (9A, 10A)", "View/Edit"],
  ["Mr. John", "Mathematics", "9A", "Algebra (8A, 9A)", "View/Edit"],
  ["Ms. Jane", "English", "None", "English (10B, 11A)", "View/Edit"],
  ["Mr. Lee", "History", "12A", "History (9B, 12A)", "View/Edit"],
];

const Teacher = () => {
  const [showModal, setShowModal] = useState(false);

  const displayModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <InputComponent placeholder="Search by teacher name, department, subjects, or classes they teach" />
      <div className="mt-4 flex flex-wrap gap-2">
        <ButtonFilled text="Add Teacher" onClick={() => displayModal()} />
        <ButtonFilled text="Export (CSV / PDF)" />
        <ButtonFilled text="Delete" />
        <ButtonFilled text="Archieve" />
        <ButtonFilled text="Deactivate" />
        <ButtonFilled text="Import (Bulk)" />
        <ButtonFilled text="Show Unassigned Teacher" />
      </div>
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        title="Add Teacher"
      >
        <AddTeacher onCancel={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

export default Teacher;
