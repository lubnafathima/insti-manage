import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const PrivacySettings = () => {
  // State for managing privacy settings
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "Friends Only",
    academicSharing: true, // Enable sharing of academic information
    classScheduleSharing: false, // Disable class schedule sharing
    attendanceSharing: true, // Enable attendance sharing
  });

  // Handle changes for privacy settings (Profile Visibility)
  const handlePrivacyChange = (e) => {
    const { name, value } = e.target;
    setPrivacySettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  // Handle toggle change for sharing preferences (Academic, Schedule, Attendance)
  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setPrivacySettings((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  return (
    <div className="p-6">
      <TitleComponent title="Privacy Settings" />

      {/* Privacy Settings Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        {/* Profile Visibility Section */}
        <div className="flex justify-between items-center">
          <label htmlFor="profileVisibility" className="text-lg font-medium">
            Profile Visibility:
          </label>
          <select
            name="profileVisibility"
            value={privacySettings.profileVisibility}
            onChange={handlePrivacyChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="Public">Public</option>
            <option value="Friends Only">Friends Only</option>
            <option value="Private">Private</option>
          </select>
        </div>

        {/* Academic Information Sharing */}
        <div className="flex justify-between items-center">
          <label htmlFor="academicSharing" className="text-lg font-medium">
            Academic Information Sharing:
          </label>
          <label className="flex items-center cursor-pointer">
            <span className="mr-2">Disabled</span>
            <input
              type="checkbox"
              name="academicSharing"
              checked={privacySettings.academicSharing}
              onChange={handleToggleChange}
              className="toggle-checkbox"
            />
            <span className="ml-2">Enabled (Visible to Parents)</span>
          </label>
        </div>

        {/* Class Schedule Sharing */}
        <div className="flex justify-between items-center">
          <label htmlFor="classScheduleSharing" className="text-lg font-medium">
            Class Schedule Sharing:
          </label>
          <label className="flex items-center cursor-pointer">
            <span className="mr-2">Disabled</span>
            <input
              type="checkbox"
              name="classScheduleSharing"
              checked={privacySettings.classScheduleSharing}
              onChange={handleToggleChange}
              className="toggle-checkbox"
            />
            <span className="ml-2">Enabled (Visible to Peers)</span>
          </label>
        </div>

        {/* Attendance Sharing */}
        <div className="flex justify-between items-center">
          <label htmlFor="attendanceSharing" className="text-lg font-medium">
            Attendance Sharing:
          </label>
          <label className="flex items-center cursor-pointer">
            <span className="mr-2">Disabled</span>
            <input
              type="checkbox"
              name="attendanceSharing"
              checked={privacySettings.attendanceSharing}
              onChange={handleToggleChange}
              className="toggle-checkbox"
            />
            <span className="ml-2">Enabled (Visible to Parents and Teachers)</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
