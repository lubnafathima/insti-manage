import { useState } from "react";
import { FaBell, FaCommentAlt, FaRegPaperPlane } from "react-icons/fa";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const dummyData = {
  announcements: [
    {
      subject: "Math",
      message: "Mid-term Exam on Algebra will take place on Oct 5.",
    },
    { subject: "History", message: "Final Project Due on November 15th." },
    {
      subject: "Science",
      message: "Please submit your assignments by next Monday.",
    },
  ],
  teacherMessages: [
    { subject: "Math", message: "Complete your Chapter 4 problems by Friday." },
    {
      subject: "English",
      message: "Please review the essay format for next week's assignment.",
    },
  ],
};

const Communication = () => {
  const [showModal, setShowModal] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSendMessage = () => {
    if (subject && newMessage) {
      alert("Message Sent!");
      setShowModal(false);
      setSubject("");
      setNewMessage("");
    }
  };

  return (
    <div className="p-6 space-y-8">
      <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <TitleComponent title="Class Announcements" />
          <div className="flex items-center space-x-2 text-gray-500">
            <FaBell size={20} />
            <div className="text-sm">3 New Announcements</div>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          {dummyData.announcements.map((announcement, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="font-semibold text-md text-blue-800">
                {announcement.subject}
              </div>
              <div className="mt-2 text-sm">{announcement.message}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <TitleComponent title="Teacher Messages" />
          <div className="flex items-center space-x-2 text-gray-500">
            <FaCommentAlt size={20} />
            <div className="text-sm">2 New Messages</div>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          {dummyData.teacherMessages.map((message, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="font-semibold text-md text-green-800">
                {message.subject}
              </div>
              <div className="mt-2 text-sm">{message.message}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-2">
          <FaRegPaperPlane size={20} className="text-blue-500" />
          <div className="text-xl font-semibold">Send a Message</div>
        </div>
        <div className="mt-4">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-4">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write your message..."
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mt-6 text-right">
          <ButtonFilled text="Send Message" />
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-1/3">
            <div className="text-xl font-semibold text-center mb-4">
              Compose New Message
            </div>
            <div>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              />
            </div>
            <div>
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Communication;
