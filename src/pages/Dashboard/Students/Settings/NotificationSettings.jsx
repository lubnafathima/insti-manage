import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const NotificationSettings = () => {
  // State for managing notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsAlerts: true,
    notificationFrequency: "Daily",
    customNotifications: {
      assignmentReminders: true,
      gradesReleased: false,
      attendanceWarnings: false,
      eventAnnouncements: true,
    },
  });

  // Handle toggle change (Email, Push, SMS)
  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  // Handle custom notification change (Assignment Reminders, etc.)
  const handleCustomNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings((prevSettings) => ({
      ...prevSettings,
      customNotifications: {
        ...prevSettings.customNotifications,
        [name]: checked,
      },
    }));
  };

  // Handle frequency change
  const handleFrequencyChange = (e) => {
    const { value } = e.target;
    setNotificationSettings((prevSettings) => ({
      ...prevSettings,
      notificationFrequency: value,
    }));
  };

  return (
    <div className="p-6">
      <TitleComponent title="Notification Settings" />

      {/* Notification Settings Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        {/* Email Notifications */}
        <div className="flex justify-between items-center">
          <label htmlFor="emailNotifications" className="text-lg font-medium">
            Email Notifications:
          </label>
          <label className="flex items-center cursor-pointer">
            <span className="mr-2">Disabled</span>
            <input
              type="checkbox"
              name="emailNotifications"
              checked={notificationSettings.emailNotifications}
              onChange={handleToggleChange}
              className="toggle-checkbox"
            />
            <span className="ml-2">Enabled</span>
          </label>
        </div>

        {/* Push Notifications */}
        <div className="flex justify-between items-center">
          <label htmlFor="pushNotifications" className="text-lg font-medium">
            Push Notifications:
          </label>
          <label className="flex items-center cursor-pointer">
            <span className="mr-2">Disabled</span>
            <input
              type="checkbox"
              name="pushNotifications"
              checked={notificationSettings.pushNotifications}
              onChange={handleToggleChange}
              className="toggle-checkbox"
            />
            <span className="ml-2">Enabled</span>
          </label>
        </div>

        {/* SMS Alerts */}
        <div className="flex justify-between items-center">
          <label htmlFor="smsAlerts" className="text-lg font-medium">
            SMS Alerts:
          </label>
          <label className="flex items-center cursor-pointer">
            <span className="mr-2">Disabled</span>
            <input
              type="checkbox"
              name="smsAlerts"
              checked={notificationSettings.smsAlerts}
              onChange={handleToggleChange}
              className="toggle-checkbox"
            />
            <span className="ml-2">Enabled</span>
          </label>
        </div>

        {/* Notification Frequency */}
        <div className="flex justify-between items-center">
          <label htmlFor="notificationFrequency" className="text-lg font-medium">
            Notification Frequency:
          </label>
          <select
            name="notificationFrequency"
            value={notificationSettings.notificationFrequency}
            onChange={handleFrequencyChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="Immediate">Immediate</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>

        {/* Custom Notifications */}
        <div className="space-y-4">
          <div className="text-lg font-medium">Custom Notifications:</div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="assignmentReminders"
              checked={notificationSettings.customNotifications.assignmentReminders}
              onChange={handleCustomNotificationChange}
              className="mr-2"
            />
            <label htmlFor="assignmentReminders">Assignment Reminders</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="gradesReleased"
              checked={notificationSettings.customNotifications.gradesReleased}
              onChange={handleCustomNotificationChange}
              className="mr-2"
            />
            <label htmlFor="gradesReleased">Grades Released</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="attendanceWarnings"
              checked={notificationSettings.customNotifications.attendanceWarnings}
              onChange={handleCustomNotificationChange}
              className="mr-2"
            />
            <label htmlFor="attendanceWarnings">Attendance Warnings</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="eventAnnouncements"
              checked={notificationSettings.customNotifications.eventAnnouncements}
              onChange={handleCustomNotificationChange}
              className="mr-2"
            />
            <label htmlFor="eventAnnouncements">Event Announcements</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
