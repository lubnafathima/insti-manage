import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const AcademicPreferences = () => {
  // State to manage user preferences
  const [preferences, setPreferences] = useState({
    gradeFormat: "Percentage",
    assignmentSorting: "By Due Date",
    classScheduleView: "Weekly",
    preferredLanguage: "English",
  });

  // Handle change for dropdown selections
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: value,
    }));
  };

  return (
    <div className="p-6">
      <TitleComponent title="Academic Preferences" />

      {/* Preferences Form */}
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        {/* Grade Format Section */}
        <div className="flex justify-between items-center">
          <label htmlFor="gradeFormat" className="text-lg font-medium">
            Grade Format:
          </label>
          <select
            id="gradeFormat"
            name="gradeFormat"
            value={preferences.gradeFormat}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="Percentage">Percentage</option>
            <option value="Letter Grade">Letter Grade</option>
            <option value="GPA">GPA</option>
          </select>
        </div>

        {/* Assignment Sorting Section */}
        <div className="flex justify-between items-center">
          <label htmlFor="assignmentSorting" className="text-lg font-medium">
            Assignment Sorting:
          </label>
          <select
            id="assignmentSorting"
            name="assignmentSorting"
            value={preferences.assignmentSorting}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="By Due Date">By Due Date</option>
            <option value="By Subject">By Subject</option>
            <option value="By Priority">By Priority</option>
          </select>
        </div>

        {/* Class Schedule View Section */}
        <div className="flex justify-between items-center">
          <label htmlFor="classScheduleView" className="text-lg font-medium">
            Class Schedule View:
          </label>
          <select
            id="classScheduleView"
            name="classScheduleView"
            value={preferences.classScheduleView}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>

        {/* Preferred Language Section */}
        <div className="flex justify-between items-center">
          <label htmlFor="preferredLanguage" className="text-lg font-medium">
            Preferred Language:
          </label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            value={preferences.preferredLanguage}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
          </select>
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

export default AcademicPreferences;
