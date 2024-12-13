import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const ContactTeachers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [conversations, setConversations] = useState([
    {
      teacher: "Ms. Roberts (Math Teacher)",
      messages: [
        {
          sender: "Student",
          text: "Can I get extra help on the upcoming math test?",
        },
        {
          sender: "Teacher",
          text: "Sure, I can meet you after class tomorrow at 3 PM.",
        },
      ],
    },
    {
      teacher: "Mr. Adams (History Teacher)",
      messages: [
        {
          sender: "Student",
          text: "When is the deadline for the History project?",
        },
        { sender: "Teacher", text: "You need to submit it by Friday." },
      ],
    },
  ]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleMessageChange = (e) => setNewMessage(e.target.value);

  const filteredConversations = conversations.filter((conversation) =>
    conversation.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = (teacher) => {
    if (newMessage.trim()) {
      const updatedConversations = conversations.map((conversation) =>
        conversation.teacher === teacher
          ? {
              ...conversation,
              messages: [
                ...conversation.messages,
                { sender: "Student", text: newMessage },
              ],
            }
          : conversation
      );
      setConversations(updatedConversations);
      setNewMessage("");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <TitleComponent title="Contact Teachers" />
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for Teachers"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-4 border rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredConversations.length === 0 ? (
        <p className="text-center text-gray-600">No conversations found.</p>
      ) : (
        filteredConversations.map((conversation, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm mb-6 hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {conversation.teacher}
            </h2>
            <div className="border-t-2 border-gray-200 mt-4 pt-4">
              {conversation.messages.map((msg, idx) => (
                <div key={idx} className="mb-4">
                  <div
                    className={`font-medium ${
                      msg.sender === "Student"
                        ? "text-blue-600"
                        : "text-green-600"
                    }`}
                  >
                    {msg.sender}:
                  </div>
                  <p className="text-gray-600">{msg.text}</p>
                </div>
              ))}
            </div>

            <textarea
              value={newMessage}
              onChange={handleMessageChange}
              placeholder="Type your message"
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-between items-center mb-4">
              <input
                type="file"
                className="border border-gray-300 rounded-lg p-2 cursor-pointer"
              />
              <ButtonFilled
                onClick={() => handleSendMessage(conversation.teacher)}
                text="Send Message"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ContactTeachers;
