import CardLinks from "../../../../styledComponents/CardLinks";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const reportsOverviewData = [
  {
    id: 0,
    link_text: "Performance Summary",
    link_url: "performance-summary",
  },
  {
    id: 1,
    link_text: "Grade Report",
    link_url: "grade-report",
  },
  {
    id: 2,
    link_text: "Assignment Performance",
    link_url: "assignment-performance",
  },
  {
    id: 3,
    link_text: "Exam Performance",
    link_url: "exam-performance",
  },
  {
    id: 4,
    link_text: "Attendance Report",
    link_url: "attendance-report",
  },
  {
    id: 5,
    link_text: "Progress Tracking",
    link_url: "progress-tracking",
  }
];

const Reports = () => {
  return (
    <>
      <TitleComponent title="Reports Overview" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {reportsOverviewData.map((data) => (
          <CardLinks
            key={data.id}
            link_text={data.link_text}
            link_url={data.link_url}
          />
        ))}
      </div>
    </>
  );
};

export default Reports;
