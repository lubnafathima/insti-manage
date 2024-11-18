import TitleComponent from "../../../../styledComponents/TitleComponent";
import CardLinks from "../../../../styledComponents/CardLinks";

const LinksData = [
  {
    id: 0,
    link_text: "Assignments Overview",
    link_url: "overview",
  },
  {
    id: 1,
    link_text: "Create New Assignment",
    link_url: "new-assignment",
  },
  {
    id: 2,
    link_text: "Exam Overview",
    link_url: "exam-overview",
  },
  {
    id: 3,
    link_text: "Create New Exam",
    link_url: "new-exam",
  },
  {
    id: 4,
    link_text: "View Assignment/Exam Details",
    link_url: "view",
  },
  {
    id: 5,
    link_text: "Grading & Submissions",
    link_url: "submissions",
  },
  {
    id: 6,
    link_text: "Notifications",
    link_url: "notifications",
  },
];

const AssignmentsExams = () => {
  return (
    <div>
      <TitleComponent title="Subject Management" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {LinksData.map((data) => (
          <CardLinks
            key={data.id}
            icon={data.icon}
            link_text={data.link_text}
            link_url={data.link_url}
          />
        ))}
      </div>
    </div>
  );
};

export default AssignmentsExams;
