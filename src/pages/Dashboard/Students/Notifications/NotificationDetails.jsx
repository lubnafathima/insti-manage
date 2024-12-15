import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

// Reusable Notification Component
const NotificationCard = ({ title, message, buttonText }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-medium text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{message}</p>
      <div className="flex justify-start mt-4">
        <ButtonFilled text={buttonText} />
      </div>
    </div>
  );
};

const NotificationDetails = () => {
  const notifications = [
    {
      title: "Midterm Exam Results Released",
      message:
        "Your midterm exam results are now available in the Grades section. Please log in to view your grades.",
      buttonText: "Go to Grades",
    },
    {
      title: "New Message from Ms. Roberts",
      message:
        "You received a new message regarding your math class discussion. Check your inbox to read and respond.",
      buttonText: "Go to Inbox",
    },
    {
      title: "Important Library Renovation Update",
      message:
        "The library will be closed for renovations from October 7th to October 14th. Alternative study spaces will be available.",
      buttonText: "View Details",
    },
    {
      title: "Science Fair Participation Invitation",
      message:
        "The annual Science Fair will be held on October 25th. All students are encouraged to participate. Please RSVP online.",
      buttonText: "RSVP for Science Fair",
    },
    {
      title: "Health and Safety Reminder",
      message:
        "All students are reminded to follow the health and safety protocols during campus activities. Please stay safe.",
      buttonText: "View Health Guidelines",
    },
  ];

  return (
    <div className="min-h-screen py-10 px-4">
      <TitleComponent title="Notification" />
      <div className="max-w-full mx-auto p-4 space-y-6">
        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            title={notification.title}
            message={notification.message}
            buttonText={notification.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationDetails;
