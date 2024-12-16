import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const CommunicationPreferences = () => {
  // State for managing communication preferences
  const [preferences, setPreferences] = useState({
    communicationMethod: "In-App Messaging",
    allowMessagesFromPeers: true,
    allowMessagesFromTeachers: true,
    allowNotificationsFromExtracurriculars: false,
  });

  // Handle changes to preferences
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: value,
    }));
  };

  const handleToggle = (name) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: !prevPreferences[name],
    }));
  };

  return (
    <div className="p-6">
      <TitleComponent title="Communication Preferences" />

      {/* Communication Preferences Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        {/* Preferred Communication Method Section */}
        <div className="flex justify-between items-center">
          <label htmlFor="communicationMethod" className="text-lg font-medium">
            Preferred Communication Method:
          </label>
          <select
            id="communicationMethod"
            name="communicationMethod"
            value={preferences.communicationMethod}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="Email">Email</option>
            <option value="SMS">SMS</option>
            <option value="In-App Messaging">In-App Messaging</option>
          </select>
        </div>

        {/* Allow Messages from Peers Section */}
        <div className="flex justify-between items-center">
          <label htmlFor="allowMessagesFromPeers" className="text-lg font-medium">
            Allow Messages from Peers:
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="allowMessagesFromPeers"
              name="allowMessagesFromPeers"
              checked={preferences.allowMessagesFromPeers}
              onChange={() => handleToggle("allowMessagesFromPeers")}
              className="mr-2"
            />
            <span>{preferences.allowMessagesFromPeers ? "Yes" : "No"}</span>
          </label>
        </div>

        {/* Allow Messages from Teachers Section */}
        <div className="flex justify-between items-center">
          <label htmlFor="allowMessagesFromTeachers" className="text-lg font-medium">
            Allow Messages from Teachers:
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="allowMessagesFromTeachers"
              name="allowMessagesFromTeachers"
              checked={preferences.allowMessagesFromTeachers}
              onChange={() => handleToggle("allowMessagesFromTeachers")}
              className="mr-2"
            />
            <span>{preferences.allowMessagesFromTeachers ? "Yes" : "No"}</span>
          </label>
        </div>

        {/* Allow Notifications from Extracurricular Activities Section */}
        <div className="flex justify-between items-center">
          <label htmlFor="allowNotificationsFromExtracurriculars" className="text-lg font-medium">
            Allow Notifications from Extracurricular Activities:
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="allowNotificationsFromExtracurriculars"
              name="allowNotificationsFromExtracurriculars"
              checked={preferences.allowNotificationsFromExtracurriculars}
              onChange={() => handleToggle("allowNotificationsFromExtracurriculars")}
              className="mr-2"
            />
            <span>{preferences.allowNotificationsFromExtracurriculars ? "Yes" : "No"}</span>
          </label>
        </div>

        {/* Save Preferences Button */}
        <button
          onClick={() => alert("Preferences saved successfully!")}
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 w-full"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default CommunicationPreferences;
