import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const historyData = [
  {
    id: 1,
    type: "Conversation",
    teacher: "Ms. Roberts (Math Teacher)",
    subject: "Math",
    date: "September 22",
    messages: [
      {
        sender: "Student",
        text: "Can I get help with the quadratic equations?",
      },
      { sender: "Teacher", text: "Sure, let's meet after class." },
    ],
  },
  {
    id: 2,
    type: "Forum Post",
    teacher: "N/A",
    subject: "Science",
    date: "September 10",
    messages: [
      {
        sender: "Student",
        text: "Does anyone need help with the photosynthesis project?",
      },
    ],
  },
];

const CommunicationHistory = () => {
  const [filteredHistory, setFilteredHistory] = useState(historyData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterHistory(e.target.value);
  };

  const filterHistory = (term) => {
    const result = historyData.filter((entry) =>
      entry.messages.some((msg) =>
        msg.text.toLowerCase().includes(term.toLowerCase())
      )
    );
    setFilteredHistory(result);
  };

  const downloadHistory = () => {
    const blob = new Blob([JSON.stringify(filteredHistory, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "history.json";
    link.click();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="w-full flex justify-between items-center mb-4">
        <TitleComponent title="Communication History" />
        <ButtonFilled onClick={downloadHistory} text="Download History" />
      </div>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search conversations or tickets..."
          className="px-4 py-2 w-full border rounded-lg"
        />
      </div>

      <div className="mb-6 flex justify-center space-x-4">
        <ButtonFilled text="Filter by Date" />
        <ButtonFilled text="Filter by Subject" />
        <ButtonFilled text="Filter by Teacher" />
        <ButtonFilled text="Filter by Ticket" />
      </div>

      <div className="space-y-6">
        {filteredHistory.length === 0 ? (
          <div className="text-center text-gray-500">
            No conversations or posts found.
          </div>
        ) : (
          filteredHistory.map((entry) => (
            <div
              key={entry.id}
              className="p-6 border rounded-lg shadow-md bg-gray-50"
            >
              <TitleComponent title={entry.type} />
              <div className="flex gap-2 text-gray-600">
                <p>{entry.subject}</p>
                <span>|</span>
                <p>{entry.date}</p>
              </div>
              <div className="mt-4">
                {entry.messages.map((msg, idx) => (
                  <div key={idx} className="mb-2">
                    <strong>{msg.sender}:</strong> {msg.text}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommunicationHistory;
