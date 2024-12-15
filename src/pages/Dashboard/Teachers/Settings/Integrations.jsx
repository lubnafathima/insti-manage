import TitleComponent from "../../../../styledComponents/TitleComponent";
import { useState } from "react";

const sampleGoogleClassroomStatus = "Linked";
const sampleGoogleCalendarStatus = "Linked";
const sampleLMSIntegrationStatus = "Enabled";

const Integrations = () => {
  const [isGoogleClassroomLinked, setIsGoogleClassroomLinked] = useState(true);
  const [isGoogleCalendarLinked, setIsGoogleCalendarLinked] = useState(true);
  const [isLMSIntegrationEnabled, setIsLMSIntegrationEnabled] = useState(true);

  const handleGoogleClassroomToggle = () => {
    setIsGoogleClassroomLinked((prevState) => !prevState);
  };

  const handleGoogleCalendarToggle = () => {
    setIsGoogleCalendarLinked((prevState) => !prevState);
  };

  const handleLMSToggle = () => {
    setIsLMSIntegrationEnabled((prevState) => !prevState);
  };

  return (
    <div>
      <TitleComponent title="Integrations" />

      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Google Classroom</h2>
        <p className="text-sm text-gray-500 mb-2">
          Link your Google Classroom to manage assignments and class activities
          directly from the dashboard.
        </p>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleGoogleClassroomToggle}
            className={`px-4 py-2 rounded-full text-white transition-all duration-300 
            ${isGoogleClassroomLinked ? "bg-green-500" : "bg-gray-300"}`}
          >
            {isGoogleClassroomLinked ? "Linked" : "Not Linked"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">Google Calendar</h2>
        <p className="text-sm text-gray-500 mb-2">
          Integrate Google Calendar to sync your schedule with your class events
          and deadlines.
        </p>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleGoogleCalendarToggle}
            className={`px-4 py-2 rounded-full text-white transition-all duration-300 
            ${isGoogleCalendarLinked ? "bg-green-500" : "bg-gray-300"}`}
          >
            {isGoogleCalendarLinked ? "Linked" : "Not Linked"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-6 border-b">
        <h2 className="font-semibold text-md">
          Learning Management System (LMS)
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          Enable integration with your institution’s Learning Management System
          (LMS) for seamless course management.
        </p>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLMSToggle}
            className={`px-4 py-2 rounded-full text-white transition-all duration-300 
            ${isLMSIntegrationEnabled ? "bg-green-500" : "bg-gray-300"}`}
          >
            {isLMSIntegrationEnabled ? "Enabled" : "Disabled"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
