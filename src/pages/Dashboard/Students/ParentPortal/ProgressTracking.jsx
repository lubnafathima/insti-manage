import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TitleComponent from "../../../../styledComponents/TitleComponent";

// Sample Data for Progress Tracking
const progressData = {
  overallProgress: 82,
  weeklySummary:
    "Completed all assignments, participated in class discussions, and improved in Science.",
  subjectTrends: {
    math: [70, 75, 78, 80, 85], // Score trend over 5 weeks
    english: [80, 82, 85, 83, 87],
    science: [65, 70, 75, 80, 85],
  },
  subjectImprovement: {
    math: "+5%",
    english: "+3%",
    science: "+8%",
  },
};

const subjectDetails = {
  math: {
    assignments: [
      "Assignment 1 - A",
      "Assignment 2 - B+",
      "Midterm - A",
      "Final Exam - B",
    ],
    assessments: ["Quiz 1 - 90%", "Quiz 2 - 85%", "Midterm - 92%"],
  },
  english: {
    assignments: [
      "Essay 1 - B",
      "Essay 2 - B+",
      "Midterm - A-",
      "Final Exam - A",
    ],
    assessments: ["Quiz 1 - 80%", "Quiz 2 - 88%", "Midterm - 85%"],
  },
  science: {
    assignments: [
      "Assignment 1 - C",
      "Assignment 2 - B",
      "Midterm - A-",
      "Final Exam - A",
    ],
    assessments: ["Quiz 1 - 70%", "Quiz 2 - 75%", "Midterm - 80%"],
  },
};

const ProgressTracking = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(selectedSubject === subject ? null : subject);
  };

  return (
    <div className="p-6">
      <TitleComponent title="Progress Tracking" />

      {/* Overall Progress Meter */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold">Overall Progress</h2>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">
              Progress: {progressData.overallProgress}%
            </span>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${progressData.overallProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Summary */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold">Weekly Summary</h2>
        <div className="mt-4">
          <p>{progressData.weeklySummary}</p>
        </div>
      </div>

      {/* Subject-wise Improvement Trends */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold">
          Subject-wise Improvement Trends
        </h2>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={[...Array(5).keys()].map((i) => ({
                week: `Week ${i + 1}`,
                math: progressData.subjectTrends.math[i],
                english: progressData.subjectTrends.english[i],
                science: progressData.subjectTrends.science[i],
              }))}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="math" stroke="#8884d8" />
              <Line type="monotone" dataKey="english" stroke="#82ca9d" />
              <Line type="monotone" dataKey="science" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Subject Breakdown */}
      {/* Detailed Subject Breakdown */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold">Subject Breakdown</h2>
        <div className="mt-4">
          {["math", "english", "science"].map((subject) => (
            <div key={subject} className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition"
                onClick={() => handleSubjectClick(subject)}
              >
                <span className="text-lg font-semibold">
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </span>
                {selectedSubject === subject ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </div>
              {selectedSubject === subject && (
                <div className="mt-2 space-y-4 transition-all duration-300 ease-in-out">
                  <div>
                    <h4 className="font-semibold text-lg">Assignments</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      {subjectDetails[subject].assignments.map(
                        (item, index) => (
                          <li key={index} className="text-sm">
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Assessments</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      {subjectDetails[subject].assessments.map(
                        (item, index) => (
                          <li key={index} className="text-sm">
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
