import { FaFileAlt, FaEnvelope, FaCheckCircle } from "react-icons/fa"; // Icons for different activities
import TitleComponent from "../../../../styledComponents/TitleComponent";

const activities = [
  {
    title: "Report Card Shared with Parent",
    date: "October 10, 2024",
    action: "Shared the report card with the parent for review.",
    type: "Report Card",
  },
  {
    title: "Message Sent to Parent",
    date: "October 8, 2024",
    action: "Sent a message to the parent regarding student progress.",
    type: "Message",
  },
  {
    title: "Meeting Scheduled",
    date: "October 5, 2024",
    action: "Scheduled a parent-teacher meeting for the upcoming month.",
    type: "Meeting",
  },
];

const ActivityLogs = () => {
  return (
    <div className="p-6">
      <TitleComponent title="Activity Logs" />

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>

        <div className="space-y-6">
          {activities
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort activities by date (most recent first)
            .map((activity, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="ml-6 pb-4">
                  <div className="flex items-center space-x-3">
                    {activity.type === "Report Card" && (
                      <FaFileAlt className="text-blue-500 text-2xl" />
                    )}
                    {activity.type === "Message" && (
                      <FaEnvelope className="text-green-500 text-2xl" />
                    )}
                    {activity.type === "Meeting" && (
                      <FaCheckCircle className="text-orange-500 text-2xl" />
                    )}
                    <h3 className="text-lg font-semibold">{activity.title}</h3>
                  </div>
                  <p className="text-gray-500">{activity.date}</p>
                  <p>{activity.action}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;
