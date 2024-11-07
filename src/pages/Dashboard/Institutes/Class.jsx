import { useState } from "react";
import InputComponent from "../../../styledComponents/InputComponent";
import ButtonFilled from "../../../styledComponents/ButtonFilled";
import TableComponent from "../../../styledComponents/TableComponent";
import Modal from "../../../styledComponents/Modal";
import AddClass from "../../../components/Dashboard/Institutes/Class/Modals/AddClass";
import Cards from "../../../styledComponents/Cards";

const classData = [
  {
    id: 0,
    title: "Total Classes",
    content: "25",
  },
  {
    id: 1,
    title: "Active Classes",
    content: "23",
  },
  {
    id: 2,
    title: "Classes without Teachers",
    content: "2",
  },
  {
    id: 3,
    title: "Total Students",
    content: "500",
  },
];

const tableHeader = [
  "Grade",
  "Section",
  "Class Teacher",
  "Total Students",
  "Subjects",
  "Status (sort)",
  "Actions",
];

const tableData = [
  ["10th", "A", "Mrs. Johnson", "30", "6", "Active", "Edit/View"],
  ["9th", "B", "Mr. Brown", "28", "5", "Active", "Edit/View"],
  ["8th", "A", "Mrs. Smith", "25", "6", "Pending", "Assign"],
  ["7th", "C", "Ms. White", "27", "4", "Active", "Edit/View"],
];

const Class = () => {
  const [showModal, setShowModal] = useState(false);

  const displayModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
        {classData.map((data) => (
          <Cards key={data.id} title={data.title} content={data.content} />
        ))}
      </div>
      <InputComponent placeholder="Search by Class Name or Teacher Name" />
      <div className="mt-4 flex flex-wrap gap-2">
        <ButtonFilled text="Add Class" onClick={() => displayModal()} />
        <ButtonFilled text="Export (CSV / PDF)" />
        <ButtonFilled text="Delete" />
        <ButtonFilled text="Archive" />
        <ButtonFilled text="Deactivate" />
        <ButtonFilled text="Import (Bulk)" />
      </div>
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        title="Add New Class"
      >
        <AddClass onCancel={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

export default Class;
