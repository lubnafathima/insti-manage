import { useState } from "react";

const notificationsData = [
  {
    id: 1,
    title: "Assignment Submission Reminder",
    message: "Submit your History project before the deadline.",
  },
  {
    id: 2,
    title: "Grade Release Notification",
    message: "Your Midterm Exam grades are now available in the portal.",
  },
  {
    id: 3,
    title: "Library Hours Update",
    message: "The library will close early today at 4 PM.",
  },
  {
    id: 4,
    title: "System Maintenance Alert",
    message:
      "Scheduled system maintenance will occur tonight from 12 AM to 3 AM.",
  },
  {
    id: 5,
    title: "Event Registration Reminder",
    message: "Don't forget to register for the upcoming Science Fair.",
  },
];

const SearchNotifications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNotifications, setFilteredNotifications] =
    useState(notificationsData);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = notificationsData.filter(
      (notification) =>
        notification.title.toLowerCase().includes(query.toLowerCase()) ||
        notification.message.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNotifications(filtered);
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-2xl font-semibold mb-6">Search Notifications</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search notifications..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      {filteredNotifications.length === 0 ? (
        <p>No notifications found</p>
      ) : (
        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white p-4 rounded-md shadow-md"
            >
              <h2 className="text-lg font-medium text-gray-800">
                {notification.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                {notification.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchNotifications;
