import TitleComponent from "../../../../styledComponents/TitleComponent";
import CardLinks from "../../../../styledComponents/CardLinks";

const LinksData = [
  {
    id: 0,
    link_text: "Student Report Overview",
    link_url: "student-overview",
  },
  {
    id: 1,
    link_text: "Individual Student Performance Reports",
    link_url: "student",
  },
  {
    id: 2,
    link_text: "Class/Subject-wide Reports",
    link_url: "subject-reports",
  },
  {
    id: 3,
    link_text: "Generate Custom Reports",
    link_url: "custom-Reports",
  },
  {
    id: 4,
    link_text: "Recent Student Reports",
    link_url: "recent-reports",
  },
  {
    id: 5,
    link_text: "Export & Print Options",
    link_url: "export",
  },
];

const StudentReports = () => {
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

export default StudentReports;
