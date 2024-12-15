import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import { FaPaperPlane } from "react-icons/fa";

const messageHistory = [
  {
    sender: "Parent",
    message: "Please share the latest report card with us.",
    time: "10/10/2024, 2:30 PM",
  },
  {
    sender: "Teacher",
    message: "The latest report card will be uploaded on the portal by Friday.",
    time: "10/10/2024, 2:45 PM",
  },
  {
    sender: "Parent",
    message: "Thanks! We'll check it then.",
    time: "10/10/2024, 3:00 PM",
  },
];

const quickReplies = [
  "Can you send the latest report card?",
  "What’s the student’s progress in Math?",
  "Can I have a meeting to discuss performance?",
];

const Communication = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(messageHistory);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMessageObj = {
        sender: "Student",
        message: newMessage,
        time: new Date().toLocaleString(),
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage("");
    }
  };

  const handleQuickReply = (reply) => {
    setNewMessage(reply);
  };

  return (
    <div className="p-6">
      <TitleComponent title="Parent-Teacher Communication" />

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Message History</h2>
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "Parent" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-xs p-4 rounded-lg shadow-lg ${
                  msg.sender === "Parent" ? "bg-gray-100" : "bg-blue-100"
                }`}
              >
                <p className="font-semibold text-sm">{msg.sender}</p>
                <p className="text-sm">{msg.message}</p>
                <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Send a New Message</h2>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSendMessage}
            className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <FaPaperPlane className="mr-2" /> Send
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Quick Reply Options</h2>
        <div className="space-y-2">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => handleQuickReply(reply)}
              className="w-full p-3 bg-gray-100 text-left rounded-lg hover:bg-gray-200 transition"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Communication;
