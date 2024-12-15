import { FaPaperPlane, FaCheckCircle } from "react-icons/fa"; // Action icons
import ButtonFilled from "../../../../styledComponents/ButtonFilled";
import TitleComponent from "../../../../styledComponents/TitleComponent";

// Reusable Notification Component
const NotificationCard = ({ title, message, buttonText, icon }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>
        <div className="text-gray-500">{icon}</div>
      </div>
      <p className="text-sm text-gray-600 mt-2">{message}</p>
      <div className="flex justify-start mt-4">
        <ButtonFilled text={buttonText} />
      </div>
    </div>
  );
};

const ActionableNotifications = () => {
  const notifications = [
    {
      title: "Assignment Submission Reminder",
      message: "Assignment Due Tomorrow: Submit your History project.",
      buttonText: "Submit Assignment",
      icon: <FaPaperPlane />, // Submission icon
    },
    {
      title: "Grade Release Notification",
      message: "Your Midterm Exam grades are now available.",
      buttonText: "View Grades",
      icon: <FaCheckCircle />, // Grade release icon
    },
  ];

  return (
    <div className="min-h-screen py-10 px-4">
      <TitleComponent title="Actionable Notifications" />
      <div className="max-w-full mx-auto space-y-6">
        {notifications.map((notification, index) => (
          <NotificationCard
            key={index}
            title={notification.title}
            message={notification.message}
            buttonText={notification.buttonText}
            icon={notification.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ActionableNotifications;
