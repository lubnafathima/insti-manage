import { useState } from "react";
import InputComponent from "../../../styledComponents/InputComponent";
import ButtonFilled from "../../../styledComponents/ButtonFilled";
import TableComponent from "../../../styledComponents/TableComponent";
import Modal from "../../../styledComponents/Modal";
import AddSupport from "../../../components/Dashboard/Institutes/Support/Modals/AddSupport";
import Cards from "../../../styledComponents/Cards";

const supportData = [
  {
    id: 0,
    title: "Total Tickets",
    content: "125",
  },
  {
    id: 1,
    title: "Open Tickets",
    content: "23",
  },
  {
    id: 2,
    title: "Closed Tickets",
    content: "95",
  },
  {
    id: 3,
    title: "Pending Tickets",
    content: "11",
  },
];

const tableHeader = [
  "Ticket ID",
  "Subject",
  "Category (sort)",
  "Date Created (sort)",
  "Status (sort)",
  "Priority (sort)",
  "Assigned To",
  "Actions",
];

const tableData = [
  [
    "12345",
    "Payment Issue",
    "Billing",
    "2024-09-10",
    "Open",
    "High",
    "John Smith",
    "View/Edit/delete",
  ],
  [
    "12346",
    "Login Issue",
    "Technical",
    "2024-09-12",
    "Closed",
    "Medium",
    "Jane Doe",
    "View/Edit/delete",
  ],
  [
    "12347",
    "Account Access",
    "General",
    "2024-09-15",
    "Pending",
    "Low",
    "-",
    "View/Edit/delete/assign",
  ],
];

const Support = () => {
  const [showModal, setShowModal] = useState(false);

  const displayModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
        {supportData.map((data) => (
          <Cards key={data.id} title={data.title} content={data.content} />
        ))}
      </div>
      <InputComponent placeholder="Search by ticket ID, subject, or category" />
      <div className="mt-4 flex flex-wrap gap-2">
        <ButtonFilled text="Add Ticket" onClick={() => displayModal()} />
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
        title="Add Ticket"
      >
        <AddSupport onCancel={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

export default Support;
