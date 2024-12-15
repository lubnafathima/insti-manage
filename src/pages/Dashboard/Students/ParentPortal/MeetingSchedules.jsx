import { useState } from "react";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import { FaDownload } from "react-icons/fa";

const ptmData = {
  next: {
    date: "October 15, 2024",
    agenda: "Discussion on overall academic performance",
    teacherNotes: "Focus on improving English writing skills.",
  },
  past: [
    {
      date: "September 10, 2024",
      summary:
        "Reviewed the student's math progress and discussed steps for improvement.",
      downloadLink: "#",
    },
    {
      date: "June 12, 2024",
      summary:
        "Discussed student's behavior in class and set goals for the next semester.",
      downloadLink: "#",
    },
  ],
};

const MeetingSchedules = () => {
  const [showPastPTMs, setShowPastPTMs] = useState(false);

  return (
    <div className="p-6">
      <TitleComponent title="Meeting Schedules" />

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Next Parent-Teacher Meeting
        </h2>
        <div className="space-y-2">
          <p className="text-lg font-medium">
            <strong>Date:</strong> {ptmData.next.date}
          </p>
          <p>
            <strong>Agenda:</strong> {ptmData.next.agenda}
          </p>
          <p>
            <strong>Teacher&#39;s Notes:</strong> {ptmData.next.teacherNotes}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Past Parent-Teacher Meetings
        </h2>

        <button
          onClick={() => setShowPastPTMs(!showPastPTMs)}
          className="text-blue-500 mb-4 text-sm font-medium"
        >
          {showPastPTMs ? "Hide Past PTMs" : "Show Past PTMs"}
        </button>

        {showPastPTMs && (
          <div className="space-y-4">
            {ptmData.past.map((ptm, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 mb-4 last:mb-0"
              >
                <p className="text-lg font-semibold">{ptm.date}</p>
                <p>{ptm.summary}</p>
                <div className="flex justify-between items-center mt-2">
                  <a
                    href={ptm.downloadLink}
                    className="text-blue-500 flex items-center"
                    download
                  >
                    <FaDownload className="mr-2" />
                    Download Summary
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Calendar View</h2>
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day, index) => (
              <div key={index} className="text-center font-semibold">
                {day}
              </div>
            )
          )}
          {Array.from({ length: 30 }).map((_, index) => {
            const date = index + 1;
            const isNextPTM = ptmData.next.date.includes(date.toString());
            return (
              <div
                key={index}
                className={`p-2 text-center ${
                  isNextPTM ? "bg-blue-500 text-white rounded-full" : ""
                }`}
              >
                {date}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MeetingSchedules;
