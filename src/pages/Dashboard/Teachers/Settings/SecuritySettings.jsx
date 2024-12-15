import TitleComponent from "../../../../styledComponents/TitleComponent";
import { useState } from "react";

const sampleLastLogin = "2024-09-25, 10:30 AM, IP: 192.168.1.1";
const sampleActiveDevices = ["MacBook Pro", "iPhone 12"];

const SecuritySettings = () => {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [securityQuestions, setSecurityQuestions] = useState({
    question1: "",
    question2: "",
  });
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  const handleToggleTwoFactor = () => {
    setIsTwoFactorEnabled((prevState) => !prevState);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleSecurityQuestionChange = (event, questionNumber) => {
    setSecurityQuestions((prev) => ({
      ...prev,
      [questionNumber]: event.target.value,
    }));
  };

  return (
    <div>
      <TitleComponent title="Security Settings" />

      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Change Password</h2>
        <p className="text-sm text-gray-500 mb-2">
          Update your account password for added security.
        </p>
        {/* <button
          onClick={() => setShowPasswordFields((prev) => !prev)}
          className="text-blue-500 underline"
        >
          {showPasswordFields ? "Cancel" : "Change Password"}
        </button> */}

        {/* {showPasswordFields && ( */}
        <div className="mt-4">
          <input
            type="password"
            value={newPassword}
            onChange={handlePasswordChange}
            placeholder="Enter new password"
            className="h-10 w-full border-gray-300 rounded p-2 mb-2"
          />
          <button className="px-6 py-2 bg-blue-500 text-white rounded">
            Update Password
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Set Security Questions</h2>
        <p className="text-sm text-gray-500 mb-2">
          Select and answer two security questions for account recovery.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Security Question 1</label>
            <input
              type="text"
              value={securityQuestions.question1}
              onChange={(e) => handleSecurityQuestionChange(e, "question1")}
              placeholder="Enter your answer"
              className="h-10 w-full border-gray-300 rounded p-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Security Question 2</label>
            <input
              type="text"
              value={securityQuestions.question2}
              onChange={(e) => handleSecurityQuestionChange(e, "question2")}
              placeholder="Enter your answer"
              className="h-10 w-full border-gray-300 rounded p-2"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Two-Factor Authentication</h2>
        <p className="text-sm text-gray-500 mb-2">
          Add an extra layer of security to your account by enabling two-factor
          authentication.
        </p>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleToggleTwoFactor}
            className={`px-4 py-2 rounded-full text-white transition-all duration-300 
            ${isTwoFactorEnabled ? "bg-green-500" : "bg-gray-300"}`}
          >
            {isTwoFactorEnabled ? "Enabled" : "Disabled"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Last Login Details</h2>
        <p className="text-sm text-gray-500 mb-2">
          View the details of your last login to monitor activity.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-sm text-gray-700">{sampleLastLogin}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-6">
        <h2 className="font-semibold text-md">Device Management</h2>
        <p className="text-sm text-gray-500 mb-2">
          View and manage the devices that are currently logged into your
          account.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <ul>
            {sampleActiveDevices.map((device, index) => (
              <li key={index} className="text-sm text-gray-700">
                {device}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
