import { useState } from "react";

// NotificationSettings component with settings options
const NotificationSettings = () => {
  // State to manage notification preferences (on/off)
  const [notificationPreferences, setNotificationPreferences] = useState({
    academic: true,
    systemUpdates: false,
    reminders: true,
  });

  // State to manage delivery preferences (email, SMS, in-app)
  const [deliveryPreference, setDeliveryPreference] = useState("email");

  // State to manage frequency preference (instant, daily, weekly)
  const [frequencyPreference, setFrequencyPreference] = useState("instant");

  // Handle toggling of notification preferences
  const handleNotificationToggle = (category) => {
    setNotificationPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Handle saving settings (could be an API call or localStorage update)
  const saveSettings = () => {
    const settings = {
      notificationPreferences,
      deliveryPreference,
      frequencyPreference,
    };
    console.log("Settings saved:", settings);
    // You can replace the above with an API call to save the settings.
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-2xl font-semibold mb-6">Notification Settings</h1>

      {/* Notification Preferences Section */}
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Notification Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={notificationPreferences.academic}
              onChange={() => handleNotificationToggle("academic")}
              className="mr-2"
            />
            <span>Academic Notifications</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={notificationPreferences.systemUpdates}
              onChange={() => handleNotificationToggle("systemUpdates")}
              className="mr-2"
            />
            <span>System Updates</span>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={notificationPreferences.reminders}
              onChange={() => handleNotificationToggle("reminders")}
              className="mr-2"
            />
            <span>Reminders</span>
          </div>
        </div>
      </div>

      {/* Delivery Preferences Section */}
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Delivery Preferences</h2>
        <div>
          <label htmlFor="deliveryPreference" className="block text-sm mb-2">
            Choose your preferred delivery method:
          </label>
          <select
            id="deliveryPreference"
            value={deliveryPreference}
            onChange={(e) => setDeliveryPreference(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="email">Email</option>
            <option value="sms">SMS</option>
            <option value="inApp">In-App</option>
          </select>
        </div>
      </div>

      {/* Frequency Settings Section */}
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Frequency Settings</h2>
        <div>
          <label htmlFor="frequencyPreference" className="block text-sm mb-2">
            How often would you like to receive notifications?
          </label>
          <select
            id="frequencyPreference"
            value={frequencyPreference}
            onChange={(e) => setFrequencyPreference(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="instant">Instant</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
      </div>

      {/* Save Settings Button */}
      <button
        onClick={saveSettings}
        className="bg-blue-500 text-white px-6 py-2 rounded-md mt-6"
      >
        Save Settings
      </button>
    </div>
  );
};

export default NotificationSettings;
