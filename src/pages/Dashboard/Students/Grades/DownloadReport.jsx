import TitleComponent from "../../../../styledComponents/TitleComponent"; 
import TableComponent from "../../../../styledComponents/TableComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const mathSubjectData = {
  subjectName: "Math",
  assignments: [
    {
      name: "Midterm Exam",
      score: "90%",
      feedback: "Great job on the calculations.",
      weightage: 40,
    },
    {
      name: "Assignment 1 (Trigonometry)",
      score: "85%",
      feedback: "Good but some minor mistakes in formulas.",
      weightage: 30,
    },
    {
      name: "Quiz 1",
      score: "92%",
      feedback: "Outstanding performance.",
      weightage: 30,
    },
  ],
};

const DownloadReport = () => {
  const totalGrade = mathSubjectData.assignments.reduce((total, assignment) => {
    const score = parseFloat(assignment.score.replace('%', ''));
    return total + (score * assignment.weightage) / 100;
  }, 0);

  const tableHeader = [
    "Assignment/Exam Name",
    "Score",
    "Teacher Comments",
    "Weightage",
  ];

  const tableData = mathSubjectData.assignments.map((item) => [
    item.name,
    item.score,
    item.feedback,
    `${item.weightage}%`,
  ]);

  return (
    <div className="p-6">
      <div className="w-full flex justify-between items-center mb-4">
        <TitleComponent title="Download Report - Math" />
        <ButtonFilled text="Download Report" />
      </div>
      <h2 className="text-xl font-bold mb-4">{mathSubjectData.subjectName}</h2>
      <TableComponent tableHeader={tableHeader} tableData={tableData} />
      <div className="mt-6">
        <p className="text-lg font-semibold">
          Total Grade: {totalGrade.toFixed(2)}%
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">
          Assignment Weightage Breakdown:
        </h3>
        <ul>
          {mathSubjectData.assignments.map((assignment, index) => (
            <li key={index} className="mb-1">
              <strong>{assignment.name}</strong>: {assignment.weightage}% of
              total grade.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DownloadReport;
