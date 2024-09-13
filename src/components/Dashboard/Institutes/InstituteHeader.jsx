import { useState } from "react";
import Modal from "../Modal";
import AddInstitute from "./Modals/AddInstitute";

const InstituteHeader = () => {
  const [showModal, setShowModal] = useState(false);

  const displayModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-xl font-semibold my-4">Institutes</h2>
        <button
          onClick={() => displayModal()}
          className="bg-blue-100 hover:bg-blue-200 text-blue-600 text-sm font-semibold py-2 px-4 rounded"
        >
          Add Institute
        </button>
      </div>
      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        title="Add New Institute"
      >
        <AddInstitute onCancel={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

export default InstituteHeader;
