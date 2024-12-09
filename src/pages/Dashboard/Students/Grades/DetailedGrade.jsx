import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const DetailedGrade = () => {
  const assignmentData = [
    ["Assignment 1 (Trigonometry)", "85%", "20%"],
    ["Assignment 2 (Algebra)", "90%", "20%"],
  ];

  const examData = [
    ["Midterm Exam", "88%", "30%"],
    ["Final Exam", "92%", "30%"],
  ];

  const quizData = [
    ["Quiz 1", "95%", "10%"],
    ["Quiz 2", "89%", "10%"],
  ];

  const projectData = [["Project 1 (Group Work)", "90%", "10%"]];

  return (
    <div className="w-full p-4">
      <div className="w-full flex justify-between items-center mb-4">
        <TitleComponent title="Math - Detailed Grade Breakdown" />
        <ButtonFilled text="Check additional results" />
      </div>
      <div className="mb-6">
        <div className="mb-4">
          <h4 className="ftext-lg font-semibold">Assignments</h4>
          <TableComponent
            tableHeader={["Assessment Name", "Score", "Grading Weight"]}
            tableData={assignmentData}
          />
        </div>
        <div className="mb-4">
          <h4 className="ftext-lg font-semibold">Exams</h4>
          <TableComponent
            tableHeader={["Assessment Name", "Score", "Grading Weight"]}
            tableData={examData}
          />
        </div>
        <div className="mb-4">
          <h4 className="ftext-lg font-semibold">Quizzes</h4>
          <TableComponent
            tableHeader={["Assessment Name", "Score", "Grading Weight"]}
            tableData={quizData}
          />
        </div>
        <div className="mb-4">
          <h4 className="ftext-lg font-semibold">Projects</h4>
          <TableComponent
            tableHeader={["Assessment Name", "Score", "Grading Weight"]}
            tableData={projectData}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailedGrade;
