import { useState } from "react";
import Modal from "../Modal";
import EditInstitute from "./Modals/EditInstitute";
import { MdEdit, MdDelete } from "react-icons/md";

const InstituteList = ({ institutes }) => {
  const [showModal, setShowModal] = useState(false);

  const displayModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="border rounded-md bg-white my-4">
        <div className="hidden xl:grid grid-cols-5 px-4 py-2 bg-slate-100 rounded-tl-md rounded-tr-md">
          <p className="w-full">Name</p>
          <p className="w-1/2">Type</p>
          <p className="w-1/2">Status</p>
          <p className="w-full">Contact</p>
          <p className="w-1/2">Action</p>
        </div>
        <div>
          {institutes.map((data) => (
            <div
              key={data.id}
              className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 items-center px-4 py-2 bg-white border-t rounded-bl-md rounded-br-md text-sm"
            >
              <p className="w-full font-semibold">{data.name}</p>
              <p className="w-1/2 font-semibold text-gray-500">{data.type}</p>
              <p className={`w-1/2 flex`}>
                <span
                  className={`min-w-20 flex justify-center items-center p-1 rounded-full font-semibold ${
                    data.status === "Active"
                      ? "text-green-600 bg-green-100"
                      : "text-red-600 bg-red-100"
                  }`}
                >
                  {data.status}
                </span>
              </p>
              <p className="w-full text-gray-500">{data.contact}</p>
              <p className="w-1/2 flex gap-4">
                <span
                  onClick={() => displayModal()}
                  className="bg-green-100 hover:bg-green-200 text-green-600 p-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out"
                >
                  <MdEdit className="text-xl" />
                </span>
                <span className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out">
                  <MdDelete className="text-xl" />
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        title="Edit Institute"
      >
        <EditInstitute onCancel={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

export default InstituteList;
