import TitleComponent from "../../../../styledComponents/TitleComponent";
import { useState } from "react";

const SupportHelp = () => {
  // Sample data for the support page
  const [supportTicketSubmitted, setSupportTicketSubmitted] = useState(false);
  const [contactDetails, setContactDetails] = useState({
    email: "itsupport@school.com",
    phone: "+1 234 567 890"
  });

  // Toggle support ticket submission
  const handleSubmitTicket = () => {
    setSupportTicketSubmitted(true);
  };

  return (
    <div>
      <TitleComponent title="Support and Help" />

      {/* Help Center Section */}
      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Help Center</h2>
        <p className="text-sm text-gray-500 mb-2">
          Access the Knowledge Base to find articles, guides, and frequently asked questions to help resolve issues.
        </p>
        <a
          href="https://help.school.com" // Replace with actual Help Center URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Visit the Help Center
        </a>
      </div>

      {/* Submit a Support Ticket Section */}
      <div className="flex flex-col items-start gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Submit a Support Ticket</h2>
        <p className="text-sm text-gray-500 mb-2">
          If you cannot find the answer to your issue, you can submit a support ticket and our team will assist you.
        </p>
        <button
          onClick={handleSubmitTicket}
          className={`px-4 py-2 rounded-full text-white transition-all duration-300 
          ${supportTicketSubmitted ? "bg-green-500" : "bg-blue-600"}`}
        >
          {supportTicketSubmitted ? "Ticket Submitted" : "Submit a Ticket"}
        </button>
        {supportTicketSubmitted && (
          <p className="mt-2 text-xs text-gray-500">
            Your support ticket has been successfully submitted. Our team will get back to you shortly.
          </p>
        )}
      </div>

      {/* Contact IT Support Section */}
      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Contact IT Support</h2>
        <p className="text-sm text-gray-500 mb-2">
          If you're unable to resolve your issue, you can contact IT support directly for further assistance.
        </p>
        <div className="flex flex-col space-y-2">
          <p className="text-sm text-gray-700">
            <strong>Email:</strong> {contactDetails.email}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Phone:</strong> {contactDetails.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportHelp;
