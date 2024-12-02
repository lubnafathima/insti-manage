import TitleComponent from "../../../../styledComponents/TitleComponent";
import { useState } from "react";

// Grading scales options
const gradingScales = ["Percentage", "Letter Grade", "Pass/Fail"];

const ClassroomPreferences = () => {
  const [gradingScale, setGradingScale] = useState("Percentage");
  const [deadlineReminders, setDeadlineReminders] = useState("Yes");
  const [allowDirectMessages, setAllowDirectMessages] = useState("Yes");

  // Handle changes to the dropdown (grading scale)
  const handleGradingScaleChange = (event) => {
    setGradingScale(event.target.value);
  };

  // Handle changes to the Yes/No fields (Deadline reminders, Direct Messages)
  const handleToggleChange = (setter) => {
    setter((prevState) => (prevState === "Yes" ? "No" : "Yes"));
  };

  return (
    <div>
      <TitleComponent title="Classroom Preferences" />

      {/* Grading Scale Section */}
      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Default Grading Scale</h2>
        <p className="text-sm text-gray-500 mb-2">
          Select the default grading scale for your class.
        </p>
        <div className="flex items-center space-x-4">
          <select
            value={gradingScale}
            onChange={handleGradingScaleChange}
            className="h-10 w-60 border-gray-300 rounded p-2"
          >
            {gradingScales.map((scale, index) => (
              <option key={index} value={scale}>
                {scale}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Assignment Deadline Reminders Section */}
      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Assignment Deadline Reminders</h2>
        <p className="text-sm text-gray-500 mb-2">
          Decide if you would like to receive reminders about upcoming assignment deadlines.
        </p>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleToggleChange(setDeadlineReminders)}
            className={`px-4 py-2 rounded-full text-white transition-all duration-300 
            ${deadlineReminders === "Yes" ? "bg-green-500" : "bg-gray-300"}`}
          >
            {deadlineReminders === "Yes" ? "Yes" : "No"}
          </button>
        </div>
      </div>

      {/* Student-Teacher Communication Preferences Section */}
      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Student-Teacher Communication Preferences</h2>
        <p className="text-sm text-gray-500 mb-2">
          Allow direct communication from students and parents.
        </p>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleToggleChange(setAllowDirectMessages)}
            className={`px-4 py-2 rounded-full text-white transition-all duration-300 
            ${allowDirectMessages === "Yes" ? "bg-green-500" : "bg-gray-300"}`}
          >
            {allowDirectMessages === "Yes" ? "Allow" : "Block"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassroomPreferences;
