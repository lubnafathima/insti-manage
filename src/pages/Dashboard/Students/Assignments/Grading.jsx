import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const gradingHeader = [
  "Assignment Name",
  "Subject",
  "Due Date",
  "Grade",
  "Instructor's Comment",
  "Date Graded",
  "Actions",
];

const getDateAfterDays = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString();
};

const gradingData = [
  [
    "Trigonometry Worksheet",
    "Math",
    getDateAfterDays(2),
    "A",
    "Great work! Keep it up.",
    getDateAfterDays(1),
    "View Feedback",
  ],
  [
    "Physics Lab Report",
    "Science",
    getDateAfterDays(7),
    "B+",
    "Good effort, but improve the analysis.",
    getDateAfterDays(3),
    "View Feedback",
  ],
  [
    "Shakespeare Essay",
    "English",
    getDateAfterDays(3),
    "C",
    "Needs more depth in the analysis.",
    getDateAfterDays(5),
    "View Feedback",
  ],
  [
    "Periodic Table Project",
    "Chemistry",
    getDateAfterDays(6),
    "A-",
    "Excellent presentation.",
    getDateAfterDays(4),
    "View Feedback",
  ],
  [
    "World War II Research Paper",
    "History",
    getDateAfterDays(1),
    "B",
    "Interesting topic but lacks detail.",
    getDateAfterDays(2),
    "View Feedback",
  ],
  [
    "Cell Division Presentation",
    "Biology",
    getDateAfterDays(4),
    "A+",
    "Outstanding presentation and research.",
    getDateAfterDays(3),
    "View Feedback",
  ],
  [
    "Landscape Painting",
    "Art",
    getDateAfterDays(5),
    "A",
    "Beautiful work! Great use of colors.",
    getDateAfterDays(6),
    "View Feedback",
  ],
  [
    "Climate Change Report",
    "Geography",
    getDateAfterDays(14),
    "B-",
    "Some key points missed, but good research.",
    getDateAfterDays(10),
    "View Feedback",
  ],
  [
    "JavaScript Quiz",
    "Computer Science",
    getDateAfterDays(7),
    "B+",
    "Solid understanding of concepts.",
    getDateAfterDays(8),
    "View Feedback",
  ],
  [
    "Macroeconomics Review",
    "Economics",
    getDateAfterDays(10),
    "A",
    "Excellent understanding of macroeconomic principles.",
    getDateAfterDays(9),
    "View Feedback",
  ],
  [
    "English Literature Project",
    "English",
    getDateAfterDays(12),
    "A",
    "Creative and well-researched project.",
    getDateAfterDays(11),
    "View Feedback",
  ],
  [
    "Advanced Calculus Homework",
    "Math",
    getDateAfterDays(9),
    "A-",
    "Good problem-solving skills, slight errors in steps.",
    getDateAfterDays(8),
    "View Feedback",
  ],
  [
    "Artificial Intelligence Assignment",
    "Computer Science",
    getDateAfterDays(8),
    "B",
    "Interesting ideas, but could use more clarity.",
    getDateAfterDays(6),
    "View Feedback",
  ],
  [
    "World History Essay",
    "History",
    getDateAfterDays(6),
    "C+",
    "Needs more analysis of key events.",
    getDateAfterDays(7),
    "View Feedback",
  ],
];

const Grading = () => {
  return (
    <div>
      <TitleComponent title="Assignments Grading" />
      <TableComponent tableHeader={gradingHeader} tableData={gradingData} />
    </div>
  );
};

export default Grading;
