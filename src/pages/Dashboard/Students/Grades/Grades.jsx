import CardLinks from "../../../../styledComponents/CardLinks";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const assignmentsOverviewData = [
  {
    id: 0,
    link_text: "Grade Overview",
    link_url: "grade-overview",
  },
  {
    id: 1,
    link_text: "Detailed Grade",
    link_url: "detailed-grade",
  },
  {
    id: 2,
    link_text: "Cumulative Grade",
    link_url: "cumulative-grade",
  },
  {
    id: 3,
    link_text: "Grade Analysis",
    link_url: "grade-analysis",
  },
  {
    id: 4,
    link_text: "Grade Feedback",
    link_url: "grade-feedback",
  },
  {
    id: 5,
    link_text: "Grade Comparison",
    link_url: "grade-comparison",
  },
  {
    id: 6,
    link_text: "Download Report",
    link_url: "download-report",
  },
];

const Grades = () => {
  return (
    <div>
      <TitleComponent title="Assignments Overview" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {assignmentsOverviewData.map((data) => (
          <CardLinks
            key={data.id}
            link_text={data.link_text}
            link_url={data.link_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Grades;
