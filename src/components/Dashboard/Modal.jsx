import { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";

const Modal = ({ showModal, onClose, title, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, onClose]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative animate-fade-in"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold mb-4">{title}</h3>
          <button onClick={onClose} className="text-2xl text-red-600"><MdClose /></button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
