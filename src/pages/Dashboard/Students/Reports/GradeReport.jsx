import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const gradeData = [
  {
    subject: "Math",
    assignments: "95%",
    quizzes: "92%",
    midtermExam: "88%",
    finalExam: "90%",
    overallGrade: "A- (91%)",
  },
  {
    subject: "Science",
    assignments: "85%",
    quizzes: "89%",
    midtermExam: "83%",
    finalExam: "86%",
    overallGrade: "B+ (88%)",
  },
  {
    subject: "English",
    assignments: "88%",
    quizzes: "90%",
    midtermExam: "85%",
    finalExam: "87%",
    overallGrade: "B (86%)",
  },
  {
    subject: "History",
    assignments: "92%",
    quizzes: "90%",
    midtermExam: "94%",
    finalExam: "93%",
    overallGrade: "A (93%)",
  },
  {
    subject: "Physical Education",
    assignments: "100%",
    quizzes: "98%",
    midtermExam: "100%",
    finalExam: "100%",
    overallGrade: "A+ (99%)",
  },
  {
    subject: "Computer Science",
    assignments: "90%",
    quizzes: "88%",
    midtermExam: "92%",
    finalExam: "91%",
    overallGrade: "A (90%)",
  },
  {
    subject: "Art",
    assignments: "87%",
    quizzes: "85%",
    midtermExam: "89%",
    finalExam: "84%",
    overallGrade: "B (86%)",
  },
  {
    subject: "Chemistry",
    assignments: "90%",
    quizzes: "93%",
    midtermExam: "91%",
    finalExam: "92%",
    overallGrade: "A (91%)",
  },
];

const formattedGradeData = gradeData.map((subject) => [
  subject.subject,
  subject.assignments,
  subject.quizzes,
  subject.midtermExam,
  subject.finalExam,
  subject.overallGrade,
]);

const GradeReport = () => {
  return (
    <>
      <TitleComponent title="Grade Report" />
      
      <TableComponent
        tableHeader={[
          "Subject",
          "Assignments",
          "Quizzes",
          "Midterm Exam",
          "Final Exam",
          "Overall Grade",
        ]}
        tableData={formattedGradeData}
      />
    </>
  );
};

export default GradeReport;
