import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const Security = () => {
  // State for managing form inputs
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [recentLogins, setRecentLogins] = useState([
    { date: "October 2, 2024", ip: "192.168.0.1", device: "Chrome Browser, MacBook" },
    { date: "October 1, 2024", ip: "192.168.0.2", device: "Mobile App, iPhone" },
  ]);

  // Handle password changes
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle enabling 2FA
  const toggle2FA = () => {
    setIs2FAEnabled((prev) => !prev);
  };

  // Handle password change form submission
  const handleSubmitPasswordChange = (e) => {
    e.preventDefault();
    if (passwordData.newPassword === passwordData.confirmNewPassword) {
      // Handle password change logic (e.g., API request)
      alert("Password changed successfully!");
    } else {
      alert("Passwords do not match.");
    }
  };

  return (
    <div className="p-6">
      <TitleComponent title="Security Settings" />

      {/* Change Password Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div className="text-xl font-semibold">Change Password</div>
        <form onSubmit={handleSubmitPasswordChange} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="currentPassword" className="text-lg font-medium">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="newPassword" className="text-lg font-medium">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmNewPassword" className="text-lg font-medium">Confirm New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={passwordData.confirmNewPassword}
              onChange={handlePasswordChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600">
            Change Password
          </button>
        </form>
      </div>

      {/* Two-Factor Authentication Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6 mt-6">
        <div className="text-xl font-semibold">Two-Factor Authentication (2FA)</div>
        <div className="flex justify-between items-center">
          <div className="text-lg">Enable Two-Factor Authentication</div>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={is2FAEnabled}
              onChange={toggle2FA}
              className="mr-2"
            />
            <span>{is2FAEnabled ? "Enabled" : "Disabled"}</span>
          </label>
        </div>
        <div className="text-sm text-gray-600">
          {is2FAEnabled ? (
            <p>Two-factor authentication is enabled. Choose your preferred method: mobile app or SMS.</p>
          ) : (
            <p>Two-factor authentication is currently disabled.</p>
          )}
        </div>
        <button
          onClick={toggle2FA}
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 mt-4"
        >
          {is2FAEnabled ? "Disable 2FA" : "Enable 2FA"}
        </button>
      </div>

      {/* Recent Login Activity Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6 mt-6">
        <div className="text-xl font-semibold">Recent Login Activity</div>
        <button
          onClick={() => alert("Displaying recent logins...")}
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 mb-4"
        >
          View Recent Logins
        </button>

        {/* Displaying recent login details */}
        <div className="space-y-4">
          {recentLogins.map((login, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-md">
              <div className="text-lg font-medium">{login.date}</div>
              <div className="text-sm text-gray-600">
                IP: {login.ip} | Device: {login.device}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Security;
