import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const AccountSettings = () => {
  // State to manage form data and edit mode
  const [accountData, setAccountData] = useState({
    username: "johnsmith05",
    accountType: "Student",
    creationDate: "September 1, 2023",
    recoveryEmail: "john.smith.alternate@example.com",
  });

  const [isUsernameEditable, setIsUsernameEditable] = useState(false); // To toggle username edit
  const [newUsername, setNewUsername] = useState(accountData.username); // New username input

  // Handle change in username field
  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  // Handle save changes for username
  const handleSaveUsername = () => {
    setAccountData((prevData) => ({ ...prevData, username: newUsername }));
    setIsUsernameEditable(false);
  };

  // Handle account deactivation request
  const handleDeactivationRequest = () => {
    // Logic to handle deactivation request (e.g., API call)
    alert("Your account deactivation request has been submitted.");
  };

  return (
    <div className="p-6">
      <TitleComponent title="Account Settings" />

      {/* Account Settings Form */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          {/* Username Section */}
          <div className="flex items-center justify-between">
            <label htmlFor="username" className="text-lg font-medium">Username:</label>
            {isUsernameEditable ? (
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  id="username"
                  value={newUsername}
                  onChange={handleUsernameChange}
                  className="p-2 border border-gray-300 rounded-md"
                />
                <button
                  onClick={handleSaveUsername}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Save
                </button>
              </div>
            ) : (
              <span className="text-lg">{accountData.username}</span>
            )}
            {!isUsernameEditable && (
              <button
                onClick={() => setIsUsernameEditable(true)}
                className="text-blue-500"
              >
                Change Username
              </button>
            )}
          </div>

          {/* Account Type Section */}
          <div className="flex items-center justify-between">
            <label htmlFor="accountType" className="text-lg font-medium">Account Type:</label>
            <span className="text-lg">{accountData.accountType}</span>
          </div>

          {/* Account Creation Date Section */}
          <div className="flex items-center justify-between">
            <label htmlFor="creationDate" className="text-lg font-medium">Account Creation Date:</label>
            <span className="text-lg">{accountData.creationDate}</span>
          </div>

          {/* Recovery Email Section */}
          <div className="flex items-center justify-between">
            <label htmlFor="recoveryEmail" className="text-lg font-medium">Account Recovery Email:</label>
            <span className="text-lg">{accountData.recoveryEmail}</span>
          </div>

          {/* Account Deactivation Section */}
          <div className="flex items-center justify-between">
            <label htmlFor="deactivation" className="text-lg font-medium">Account Deactivation:</label>
            <button
              onClick={handleDeactivationRequest}
              className="px-6 py-2 bg-red-500 text-white rounded-lg"
            >
              Request Deactivation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
