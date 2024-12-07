import TitleComponent from "../../../../styledComponents/TitleComponent";
import TableComponent from "../../../../styledComponents/TableComponent";

const upcomingDeadlinesHeader = [
  "Subject Name",
  "Due",
  "Title",
  "Exam Date",
  "Actions",
];

const getDateAfterDays = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString(); 
};

const upcomingDeadlinesData = [
  ["Math", "2 Days", "Trigonometry Worksheet", getDateAfterDays(2), "View"],
  ["Science", "1 Week", "Physics Lab Report", getDateAfterDays(7), "View"],
  ["English", "3 Days", "Shakespeare Essay", getDateAfterDays(3), "View"],
  ["Chemistry", "6 Days", "Periodic Table Project", getDateAfterDays(6), "View"],
  ["History", "1 Day", "World War II Research Paper", getDateAfterDays(1), "View"],
  ["Biology", "4 Days", "Cell Division Presentation", getDateAfterDays(4), "View"],
  ["Art", "5 Days", "Landscape Painting", getDateAfterDays(5), "View"],
  ["Geography", "2 Weeks", "Climate Change Report", getDateAfterDays(14), "View"],
  ["Computer Science", "1 Week", "JavaScript Quiz", getDateAfterDays(7), "View"],
  ["Economics", "10 Days", "Macroeconomics Review", getDateAfterDays(10), "View"],
];

const UpcomingDeadlines = () => {
  return (
    <div>
      <TitleComponent title="Upcoming Deadlines" />
      <TableComponent
        tableHeader={upcomingDeadlinesHeader}
        tableData={upcomingDeadlinesData}
      />
    </div>
  );
};

export default UpcomingDeadlines;
