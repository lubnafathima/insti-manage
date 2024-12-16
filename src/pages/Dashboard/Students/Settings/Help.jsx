import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const Help = () => {
  // State to manage support tickets and articles
  const [ticketTitle, setTicketTitle] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample data for Help Articles and Tickets
  const helpArticles = [
    { title: "How to Submit an Assignment", link: "/help/submit-assignment" },
    { title: "Understanding Grading Policies", link: "/help/grading-policies" },
    { title: "Managing Your Profile", link: "/help/manage-profile" },
  ];

  const supportTickets = [
    { title: "Issue with Assignment Submission", date: "October 1, 2024", status: "Resolved" },
    { title: "Unable to Access Course Materials", date: "September 28, 2024", status: "Pending" },
  ];

  // Handle form submission
  const handleTicketSubmit = (e) => {
    e.preventDefault();
    // Submit ticket logic goes here, e.g., API call
    alert("Support ticket submitted successfully!");
    setTicketTitle("");
    setTicketDescription("");
  };

  // Handle search for help articles
  const filteredArticles = helpArticles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <TitleComponent title="Help & Support" />

      {/* Search Bar for Help Articles */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Help Articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      {/* Help Articles */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h3 className="text-xl font-semibold">Help Articles</h3>
        <ul className="space-y-2">
          {filteredArticles.map((article, index) => (
            <li key={index}>
              <a href={article.link} className="text-blue-500 hover:underline">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Support Tickets */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6 mt-6">
        <h3 className="text-xl font-semibold">Recent Support Tickets</h3>
        <ul className="space-y-2">
          {supportTickets.map((ticket, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{ticket.title}</span>
              <span className="text-gray-500 text-sm">{ticket.date} - {ticket.status}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Submit Support Ticket Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6 mt-6">
        <h3 className="text-xl font-semibold">Submit a Support Ticket</h3>
        <form onSubmit={handleTicketSubmit} className="space-y-4">
          <div>
            <label htmlFor="ticketTitle" className="block text-lg font-medium">Ticket Title</label>
            <input
              type="text"
              id="ticketTitle"
              name="ticketTitle"
              value={ticketTitle}
              onChange={(e) => setTicketTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="ticketDescription" className="block text-lg font-medium">Description</label>
            <textarea
              id="ticketDescription"
              name="ticketDescription"
              value={ticketDescription}
              onChange={(e) => setTicketDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 w-full"
          >
            Submit Ticket
          </button>
        </form>
      </div>

      {/* Live Chat (If available) */}
      <div className="mt-6">
        <button
          className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 w-full"
          onClick={() => alert("Live chat is not available at the moment")}
        >
          Start Live Chat
        </button>
      </div>
    </div>
  );
};

export default Help;
