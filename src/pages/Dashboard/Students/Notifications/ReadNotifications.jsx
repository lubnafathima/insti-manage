import { useState } from "react";

const initialNotifications = [
  {
    id: 1,
    title: "Assignment Submission Reminder",
    message: "Submit your History project.",
    isRead: false,
  },
  {
    id: 2,
    title: "Grade Release Notification",
    message: "Your Midterm Exam grades are now available.",
    isRead: true,
  },
  {
    id: 3,
    title: "Library Hours Update",
    message: "The library will close early today.",
    isRead: false,
  },
  {
    id: 4,
    title: "Event Registration Reminder",
    message: "Don't forget to register for the upcoming event.",
    isRead: true,
  },
];

const ReadNotifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [selectedNotifications, setSelectedNotifications] = useState([]);

  const toggleReadStatus = (id) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id
        ? { ...notification, isRead: !notification.isRead }
        : notification
    );
    setNotifications(updatedNotifications);
  };

  const toggleSelectNotification = (id) => {
    setSelectedNotifications((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  const toggleBatchReadStatus = () => {
    const areAllRead = selectedNotifications.every(
      (id) =>
        notifications.find((notification) => notification.id === id).isRead
    );
    const updatedNotifications = notifications.map((notification) =>
      selectedNotifications.includes(notification.id)
        ? { ...notification, isRead: !areAllRead }
        : notification
    );
    setNotifications(updatedNotifications);
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-2xl font-semibold mb-4">Read Notifications</h1>

      {selectedNotifications.length > 0 && (
        <button
          onClick={toggleBatchReadStatus}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        >
          Mark as{" "}
          {notifications.some(
            (notification) =>
              selectedNotifications.includes(notification.id) &&
              notification.isRead
          )
            ? "Unread"
            : "Read"}
        </button>
      )}

      <table className="min-w-full table-auto border-collapse bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border border-gray-300">
              <input
                type="checkbox"
                onChange={(e) => {
                  setSelectedNotifications(
                    e.target.checked ? notifications.map((n) => n.id) : []
                  );
                }}
                checked={selectedNotifications.length === notifications.length}
              />
            </th>
            <th className="px-4 py-2 border border-gray-300">Title</th>
            <th className="px-4 py-2 border border-gray-300">Message</th>
            <th className="px-4 py-2 border border-gray-300">Status</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification.id}>
              <td className="px-4 py-2 border border-gray-300">
                <input
                  type="checkbox"
                  checked={selectedNotifications.includes(notification.id)}
                  onChange={() => toggleSelectNotification(notification.id)}
                />
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {notification.title}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {notification.message}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <span
                  className={`inline-block py-1 px-2 rounded-md text-sm ${
                    notification.isRead
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {notification.isRead ? "Read" : "Unread"}
                </span>
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <button
                  onClick={() => toggleReadStatus(notification.id)}
                  className="text-blue-500"
                >
                  Mark as {notification.isRead ? "Unread" : "Read"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadNotifications;
