import { useState } from "react";
import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";
import { MdClose } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

const dummyData = {
  Math: [
    { title: "Chapter 3 - Algebra", type: "pdf", link: "#" },
    { title: "Quadratic Equations", type: "ppt", link: "#" },
    { title: "Calculus Basics", type: "word", link: "#" },
  ],
  History: [
    { title: "World War II - Overview", type: "pdf", link: "#" },
    { title: "The Great Depression", type: "ppt", link: "#" },
  ],
  Science: [
    { title: "Newton's Laws", type: "pdf", link: "#" },
    { title: "Chemical Reactions", type: "ppt", link: "#" },
  ],
};

const ClassNotes = () => {
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = () => {
    if (noteTitle && noteContent) {
      setNotes([...notes, { title: noteTitle, content: noteContent }]);
      setNoteTitle("");
      setNoteContent("");
    }
  };

  const exportToPDF = (note) => {
    const doc = new jsPDF();
    doc.text(note.title, 10, 10);
    doc.text(note.content, 10, 20);
    doc.save(`${note.title}.pdf`);
  };

  const exportToWord = (note) => {
    const blob = new Blob([note.content], { type: "application/msword" });
    saveAs(blob, `${note.title}.doc`);
  };

  const openModal = (note) => {
    setSelectedNote(note);
  };

  const closeModal = () => {
    setSelectedNote(null);
  };

  return (
    <div className="p-6">
      <div className="space-y-6">
        <TitleComponent title="Class Notes" />

        {Object.keys(dummyData).map((subject, idx) => (
          <div key={idx}>
            <div className="font-bold text-md">{subject}</div>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {dummyData[subject].map((material, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-200 p-2 rounded-md"
                >
                  <div className="text-sm">{material.title}</div>
                  <a
                    href={material.link}
                    download
                    className="text-blue-600 hover:text-blue-500 text-lg font-semibold"
                  >
                    <IoMdDownload />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-100 p-6 rounded-md shadow-md">
        <div className="w-full flex justify-between items-center gap-2">
          <h2 className="text-lg font-semibold">Add Personal Notes</h2>
          <ButtonFilled text="Add Note" onClick={addNote} />
        </div>
        <div className="mt-4">
          <input
            type="text"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter note title"
          />
        </div>
        <div className="my-4">
          <textarea
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="5"
            placeholder="Enter your notes here"
          />
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-md flex gap-4 justify-between items-center"
          >
            <div className="space-y-2">
              <div className="font-semibold text-xl">{note.title}</div>
              <div className="flex gap-2">
                <div className="text-sm">
                  {note.content.length > 100
                    ? note.content.substring(0, 100) + "..."
                    : note.content}
                </div>
                <button
                  onClick={() => openModal(note)}
                  className="text-blue-500 text-xs"
                >
                  Read more
                </button>
              </div>
            </div>
            <div className="flex space-x-2 justify-end items-center">
              <button
                onClick={() => exportToPDF(note)}
                className="bg-green-500 text-white py-1.5 px-3 rounded-md text-xs"
              >
                Export PDF
              </button>
              <button
                onClick={() => exportToWord(note)}
                className="bg-yellow-500 text-white py-1.5 px-3 rounded-md text-xs"
              >
                Export Word
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedNote && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md shadow-xl w-2/3 max-h-[80vh] overflow-hidden">
            <div className="w-full flex justify-between items-start mb-4">
              <div className="text-xl font-semibold mb-4">
                {selectedNote.title}
              </div>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white p-1.5 rounded-full"
              >
                <MdClose />
              </button>
            </div>
            <div
              className="text-sm overflow-y-auto h-96"
              style={{ maxHeight: "400px" }}
            >
              {selectedNote.content.split("\n").map((para, index) => (
                <p key={index} className="mb-2">
                  {para}
                </p>
              ))}
            </div>
            <div className="flex space-x-2 justify-end items-center">
              <button
                onClick={() => exportToPDF(selectedNote)}
                className="bg-green-500 text-white py-1.5 px-3 rounded-md text-xs"
              >
                Export PDF
              </button>
              <button
                onClick={() => exportToWord(selectedNote)}
                className="bg-yellow-500 text-white py-1.5 px-3 rounded-md text-xs"
              >
                Export Word
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassNotes;
