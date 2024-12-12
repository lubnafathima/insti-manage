import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const examData = [
  {
    name: "Math Midterm Exam",
    grade: "88%",
    status: "Completed",
    feedback: "Solid understanding, but review some concepts.",
  },
  {
    name: "Science Final Exam",
    grade: "90%",
    status: "Completed",
    feedback: "Well done! Excellent work on the lab section.",
  },
  {
    name: "History Final Exam",
    grade: "85%",
    status: "Completed",
    feedback: "Good effort, but focus more on the historical context.",
  },
  {
    name: "English Final Exam",
    grade: "93%",
    status: "Completed",
    feedback: "Great analysis and writing skills.",
  },
  {
    name: "Computer Science Final Exam",
    grade: "91%",
    status: "Completed",
    feedback: "Excellent understanding of programming concepts.",
  },
  {
    name: "Art Final Exam",
    grade: "87%",
    status: "Completed",
    feedback: "Good effort, but your project lacked some details.",
  },
  {
    name: "Physical Education Exam",
    grade: "100%",
    status: "Completed",
    feedback: "Perfect performance, well done!",
  },
];

const formattedExamData = examData.map((exam) => [
  exam.name,
  exam.grade,
  exam.status,
  exam.feedback,
]);

const ExamPerformance = () => {
  return (
    <>
      <TitleComponent title="Exam Performance" />
      <TableComponent
        tableHeader={["Exam Name", "Grade/Score", "Status", "Feedback"]}
        tableData={formattedExamData}
      />
    </>
  );
};

export default ExamPerformance;
