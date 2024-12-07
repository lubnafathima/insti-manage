import CardLinks from "../../../../styledComponents/CardLinks";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const assignmentsOverviewData = [
  {
    id: 0,
    link_text: "Assignments Overview",
    link_url: "assignments-overview",
  },
  {
    id: 1,
    link_text: "Upcoming Deadlines",
    link_url: "upcoming-deadlines",
  },
  {
    id: 2,
    link_text: "Submission",
    link_url: "submission",
  },
  {
    id: 3,
    link_text: "Grading",
    link_url: "grading",
  },
  {
    id: 4,
    link_text: "Archive",
    link_url: "archive",
  },
  {
    id: 5,
    link_text: "Calendar View",
    link_url: "calendar-view",
  },
];

const Assignments = () => {
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

export default Assignments;
