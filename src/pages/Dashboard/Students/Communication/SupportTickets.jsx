import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const SupportTickets = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState(null);

  const [tickets, setTickets] = useState([
    {
      id: 1,
      subject: "I need help accessing my grades for last term.",
      description:
        "I'm unable to find my grades for the last term in the portal.",
      status: "In Progress",
      replies: [
        { sender: "Support", text: "We are looking into your grades issue." },
      ],
    },
    {
      id: 2,
      subject: "How do I update my contact details?",
      description: "I need to change my contact email and phone number.",
      status: "Closed",
      replies: [
        { sender: "Support", text: "Your contact details have been updated." },
      ],
    },
  ]);

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    if (subject.trim() && description.trim()) {
      const newTicket = {
        id: tickets.length + 1,
        subject,
        description,
        status: "Open",
        replies: [],
      };
      setTickets([...tickets, newTicket]);
      setSubject("");
      setDescription("");
      setAttachments(null);
    }
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    setAttachments(file);
  };

  return (
    <div className="container mx-auto p-6">
      <TitleComponent title="Support Ticket" />

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="w-full flex justify-between">
          <TitleComponent title="Submit a New Query" />
          <ButtonFilled text="Submit a Query" />
        </div>
        <form onSubmit={handleSubmitTicket}>
          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-1">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-200"
              placeholder="Enter the subject of your query"
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-200"
              rows="4"
              placeholder="Describe your query"
              required
            />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Attachments (Optional)
            </label>
            <input
              type="file"
              onChange={handleAttachmentChange}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
        </form>
      </div>

      <div className="space-y-6">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <TitleComponent title={ticket.subject} />
              <span
                className={`px-4 py-1 text-white rounded-full ${
                  ticket.status === "Open"
                    ? "bg-red-500"
                    : ticket.status === "In Progress"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              >
                {ticket.status}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{ticket.description}</p>

            <div className="space-y-4 mb-4">
              {ticket.replies.length > 0 ? (
                ticket.replies.map((reply, idx) => (
                  <div key={idx} className="text-gray-600">
                    <strong>{reply.sender}:</strong> {reply.text}
                  </div>
                ))
              ) : (
                <div className="text-gray-600">No replies yet.</div>
              )}
            </div>

            {ticket.status === "Open" || ticket.status === "In Progress" ? (
              <div className="text-gray-600 mt-4">
                <p>Management will respond soon.</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportTickets;
