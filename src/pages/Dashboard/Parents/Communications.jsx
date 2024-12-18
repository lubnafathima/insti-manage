import { useState } from "react";
import TitleComponent from "../../../styledComponents/TitleComponent";
import TableComponent from "../../../styledComponents/TableComponent";
import ButtonFilled from "../../../styledComponents/ButtonFilled";

const communicationsData = [
  [
    "School Closure Notice",
    "2024-12-10",
    "Important",
    "The school will be closed on December 15 due to weather conditions.",
  ],
  [
    "Parent-Teacher Conference",
    "2024-12-12",
    "Upcoming",
    "Sign up for parent-teacher conferences on December 20th. Please check your emails for details.",
  ],
  [
    "Exam Schedule Update",
    "2024-12-14",
    "Update",
    "The exam schedule has been updated. Check the school portal for the latest changes.",
  ],
];

const Communications = () => {
  const [message, setMessage] = useState("");
  const [newMessages, setNewMessages] = useState(3); // For demonstration, show 3 new messages

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message) {
      alert(`Message sent: ${message}`);
      setMessage("");
      setNewMessages(newMessages + 1); // Increment new message count
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredData = communicationsData.filter(
      (item) =>
        item[0].toLowerCase().includes(query) ||
        item[2].toLowerCase().includes(query)
    );
    setFilteredCommunications(filteredData);
  };

  const [filteredCommunications, setFilteredCommunications] =
    useState(communicationsData);

  return (
    <div className="max-w-6xl">
      <TitleComponent title="Communications" />

      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-md font-semibold text-gray-800 mb-4">
          Send a New Message
        </h3>
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message..."
          rows="4"
          className="w-full mb-4 p-4 border-2 border-gray-300 rounded-lg shadow-sm transition duration-200"
        />
        <ButtonFilled onClick={handleSendMessage} text="Send Message" />
      </div>

      <div className="mt-8 w-full flex justify-between items-center">
        <TitleComponent title="Notifications" />
        <div className="bg-green-600 text-white text-sm font-semibold rounded-full py-2 px-4 inline-flex items-center mb-6">
          <span>{newMessages} New Messages</span>
        </div>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Communications..."
          onChange={handleSearch}
          className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm transition duration-200"
        />
      </div>

      <TableComponent
        tableHeader={["Title", "Date", "Category", "Message"]}
        tableData={filteredCommunications}
      />
    </div>
  );
};

export default Communications;
