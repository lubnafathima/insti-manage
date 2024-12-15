import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const academicData = {
  term1: {
    overall: "85%",
    subjects: {
      math: 90,
      english: 80,
      science: 85,
    },
    gradeBreakdown: {
      math: "A",
      english: "B",
      science: "A-",
    },
    teacherComment:
      "Shows strong improvement in Math. Needs more focus on English essays.",
  },
};

const chartData = [
  { subject: "Math", score: 90 },
  { subject: "English", score: 80 },
  { subject: "Science", score: 85 },
];

const AcademicReports = () => {
  return (
    <div className="p-6">
      <div className="w-full flex justify-between items-center mb-6">
        <TitleComponent title="Academic Report" />
        <div className="flex space-x-4 mt-8">
          <ButtonFilled text="Download Report" />
          <ButtonFilled text="Email Report" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold">Term 1 Report Card</h2>

        <div className="mt-4 space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold">Overall Performance:</span>
            <span>{academicData.term1.overall}</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Math:</span>
              <span>
                {academicData.term1.subjects.math}% (
                {academicData.term1.gradeBreakdown.math})
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">English:</span>
              <span>
                {academicData.term1.subjects.english}% (
                {academicData.term1.gradeBreakdown.english})
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Science:</span>
              <span>
                {academicData.term1.subjects.science}% (
                {academicData.term1.gradeBreakdown.science})
              </span>
            </div>
          </div>

          {academicData.term1.teacherComment && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <span className="font-semibold">Teacher&#39;s Comment:</span>
              <p>{academicData.term1.teacherComment}</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold">Subject-wise Performance</h2>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AcademicReports;
