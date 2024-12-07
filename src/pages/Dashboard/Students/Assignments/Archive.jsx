import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const archiveHeader = [
  "Assignment Name",
  "Subject",
  "Due Date",
  "Grade",
  "Instructor's Feedback",
  "Date Archived",
  "Actions",
];

const getDateAfterDays = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString(); // Formats date as MM/DD/YYYY
};

const archivedData = [
  [
    "Trigonometry Worksheet",
    "Math",
    getDateAfterDays(2),
    "A",
    "Great job! Excellent understanding of concepts.",
    getDateAfterDays(3),
    "View Feedback",
  ],
  [
    "Physics Lab Report",
    "Science",
    getDateAfterDays(7),
    "B+",
    "Solid work, but needed more analysis on results.",
    getDateAfterDays(5),
    "View Feedback",
  ],
  [
    "Shakespeare Essay",
    "English",
    getDateAfterDays(3),
    "C",
    "Needs more depth in the analysis. Could improve the structure.",
    getDateAfterDays(6),
    "View Feedback",
  ],
  [
    "Periodic Table Project",
    "Chemistry",
    getDateAfterDays(6),
    "A-",
    "Well done! Great presentation and research.",
    getDateAfterDays(7),
    "View Feedback",
  ],
  [
    "World War II Research Paper",
    "History",
    getDateAfterDays(1),
    "B",
    "Good start, but missed some important details.",
    getDateAfterDays(4),
    "View Feedback",
  ],
  [
    "Cell Division Presentation",
    "Biology",
    getDateAfterDays(4),
    "A+",
    "Excellent work! The presentation was clear and well-researched.",
    getDateAfterDays(8),
    "View Feedback",
  ],
  [
    "Landscape Painting",
    "Art",
    getDateAfterDays(5),
    "A",
    "Beautiful work! Strong use of colors and details.",
    getDateAfterDays(9),
    "View Feedback",
  ],
  [
    "Climate Change Report",
    "Geography",
    getDateAfterDays(14),
    "B-",
    "Some key points were missed, but overall well done.",
    getDateAfterDays(10),
    "View Feedback",
  ],
  [
    "JavaScript Quiz",
    "Computer Science",
    getDateAfterDays(7),
    "B+",
    "Good understanding of JavaScript concepts.",
    getDateAfterDays(11),
    "View Feedback",
  ],
  [
    "Macroeconomics Review",
    "Economics",
    getDateAfterDays(10),
    "A",
    "Excellent analysis of macroeconomic principles.",
    getDateAfterDays(12),
    "View Feedback",
  ],
  [
    "English Literature Project",
    "English",
    getDateAfterDays(12),
    "A",
    "Very creative! Strong research and presentation.",
    getDateAfterDays(14),
    "View Feedback",
  ],
  [
    "Advanced Calculus Homework",
    "Math",
    getDateAfterDays(9),
    "A-",
    "Good understanding of the problems, but minor mistakes in steps.",
    getDateAfterDays(15),
    "View Feedback",
  ],
  [
    "Artificial Intelligence Assignment",
    "Computer Science",
    getDateAfterDays(8),
    "B",
    "Interesting ideas, but needs more clarity and structure.",
    getDateAfterDays(16),
    "View Feedback",
  ],
  [
    "World History Essay",
    "History",
    getDateAfterDays(6),
    "C+",
    "Good start but lacks in-depth analysis of events.",
    getDateAfterDays(17),
    "View Feedback",
  ],
];

const Archive = () => {
  return (
    <div>
      <TitleComponent title="Past Assignments / Archives" />
      <TableComponent tableHeader={archiveHeader} tableData={archivedData} />
    </div>
  );
};

export default Archive;
