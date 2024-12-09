import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const feedbackData = [
  {
    assignment: "Math Midterm",
    feedback:
      "Great job on problem-solving but try to improve on time management.",
  },
  {
    assignment: "History Essay",
    feedback:
      "Excellent analysis of the topic. Well-structured and researched.",
  },
  {
    assignment: "Science Lab Report",
    feedback:
      "Good understanding of the concepts, but some experimental procedures were unclear. Work on clarifying your steps next time.",
  },
  {
    assignment: "English Final Exam",
    feedback:
      "Great use of literary devices and strong argumentation. However, ensure that your conclusion ties back more clearly to your main thesis.",
  },
  {
    assignment: "Biology Project Presentation",
    feedback:
      "Strong presentation, but your slides were a bit too text-heavy. Try to balance text with more visuals for clarity.",
  },
  {
    assignment: "Chemistry Quiz 2",
    feedback:
      "Well done on the calculations! Try to focus more on conceptual understanding in future quizzes.",
  },
  {
    assignment: "Art Portfolio Submission",
    feedback:
      "Creative and unique ideas. However, try to refine your technique in certain areas, especially with shading and proportions.",
  },
];


const GradeFeedback = () => {
  const feedbackTableData = feedbackData.map((item) => [
    item.assignment,
    item.feedback,
  ]);

  const tableHeader = ["Assignment/Exam Name", "Teacher Comments"];

  return (
    <div className="p-6">
      <div className="w-full flex justify-between items-center mb-4">
        <TitleComponent title="Grade Feedback" />
        <ButtonFilled text="Request Feedback Clarification" />
      </div>
      <TableComponent tableHeader={tableHeader} tableData={feedbackTableData} />
    </div>
  );
};

export default GradeFeedback;
