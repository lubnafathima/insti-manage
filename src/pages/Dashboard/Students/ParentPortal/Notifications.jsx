import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";

// Sample Data for Notifications
const notificationsData = [
  {
    title: "Parent-Teacher Meeting Scheduled for October 15",
    description: "A meeting to discuss student progress and upcoming events.",
    dateReceived: "10/01/2024",
    type: "Event",
  },
  {
    title: "History Assignment Due October 9",
    description: "Don't forget to submit your history assignment by the due date.",
    dateReceived: "10/05/2024",
    type: "Academic",
  },
  {
    title: "Meeting Scheduled with Student's Guardian",
    description: "A meeting to discuss the student's progress in school.",
    dateReceived: "09/28/2024",
    type: "Communication",
  },
];

const Notifications = () => {
  const [filterType, setFilterType] = useState("All");
  const [filterDate, setFilterDate] = useState("");

  // Filter notifications based on selected type and date
  const filteredNotifications = notificationsData.filter((notification) => {
    const matchesType =
      filterType === "All" || notification.type === filterType;
    const matchesDate =
      !filterDate || notification.dateReceived === filterDate;

    return matchesType && matchesDate;
  });

  return (
    <div className="p-6">
      <TitleComponent title="Notifications" />

      {/* Filter Options */}
      <div className="flex space-x-4 mb-8">
        <select
          onChange={(e) => setFilterType(e.target.value)}
          value={filterType}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="All">All Categories</option>
          <option value="Event">Event</option>
          <option value="Academic">Academic</option>
          <option value="Communication">Communication</option>
        </select>

        <input
          type="date"
          onChange={(e) => setFilterDate(e.target.value)}
          value={filterDate}
          className="p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Notification List */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Notification List</h2>
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <p className="text-center text-gray-500">No notifications found.</p>
          ) : (
            filteredNotifications
              .sort((a, b) => new Date(b.dateReceived) - new Date(a.dateReceived))
              .map((notification, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4 mb-4 last:mb-0"
                >
                  <h3 className="text-lg font-semibold">{notification.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{notification.description}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{notification.dateReceived}</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-lg">
                      {notification.type}
                    </span>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
