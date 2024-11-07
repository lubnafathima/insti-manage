import { useState } from "react";
import InputComponent from "../../../styledComponents/InputComponent";
import ButtonFilled from "../../../styledComponents/ButtonFilled";
import TableComponent from "../../../styledComponents/TableComponent";
import Modal from "../../../styledComponents/Modal";
import AddParent from "../../../components/Dashboard/Institutes/Parent/Modals/AddParent";
import Cards from "../../../styledComponents/Cards";

const parentData = [
  {
    id: 0,
    title: "Total Parents",
    content: "125",
  },
  {
    id: 1,
    title: "Parents with Multiple Children",
    content: "23",
  },
  {
    id: 2,
    title: "Parents without Email Registered",
    content: "25",
  },
  {
    id: 3,
    title: "Active Parents",
    content: "115",
  },
];

const tableHeader = [
  "Parent Name",
  "Email",
  "Phone Number",
  "Linked Students",
  "Status (sort)",
  "Actions",
];

const tableData = [
  [
    "John Doe",
    "john.doe@email.com",
    "123-456-7890",
    "Jane Doe (Class 10)",
    "Active",
    "View/Edit/Notify",
  ],
  [
    "Mary Smith",
    "mary.smith@email.com",
    "987-654-3210",
    "Mark Smith (Class 8), Luke Smith (Class 6)",
    "Active",
    "View/Edit/Notify",
  ],
  [
    "Alan Green",
    "-",
    "555-555-5555",
    "Emily Green (Class 9)",
    "Inactive",
    "View/Edit/Notify",
  ],
];

const Parent = () => {
  const [showModal, setShowModal] = useState(false);

  const displayModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
        {parentData.map((data) => (
          <Cards key={data.id} title={data.title} content={data.content} />
        ))}
      </div>
      <InputComponent placeholder="Search by parent name, phone number, or student name" />
      <div className="mt-4 flex flex-wrap gap-2">
        <ButtonFilled text="Add Parent" onClick={() => displayModal()} />
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
        title="Add Parent"
      >
        <AddParent onCancel={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

export default Parent;
