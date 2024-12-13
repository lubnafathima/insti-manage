import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "New message from Ms. Roberts (Math Teacher)",
      status: "unread",
    },
    {
      id: 2,
      message: "Your ticket regarding grade access has been resolved.",
      status: "unread",
    },
    {
      id: 3,
      message: "New post in the Science Forum: ‘Upcoming Science Fair’",
      status: "unread",
    },
  ]);

  const toggleReadStatus = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              status: notification.status === "unread" ? "read" : "unread",
            }
          : notification
      )
    );
  };

  const clearNotifications = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({
        ...notification,
        status: "read",
      }))
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="w-full flex justify-between items-center mb-4">
        <TitleComponent title="Notifications" />
        {notifications.length > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={clearNotifications}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
            >
              Clear All Notifications
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {notifications.length === 0 ? (
          <div className="text-center text-gray-500">No new notifications.</div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg shadow-md flex justify-between items-center ${
                notification.status === "unread"
                  ? "bg-blue-100 border-l-4 border-blue-500"
                  : "bg-gray-100"
              }`}
            >
              <p className="text-gray-800">{notification.message}</p>

              <button
                onClick={() => toggleReadStatus(notification.id)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                {notification.status === "unread"
                  ? "Mark as Read"
                  : "Mark as Unread"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
