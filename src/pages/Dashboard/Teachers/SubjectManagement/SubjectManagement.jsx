import TitleComponent from "../../../../styledComponents/TitleComponent";
import CardLinks from "../../../../styledComponents/CardLinks";

const LinksData = [
  {
    id: 0,
    link_text: "Subject Overview",
    link_url: "overview",
  },
  {
    id: 1,
    link_text: "Curriculum Management",
    link_url: "curriculum",
  },
  {
    id: 2,
    link_text: "Subject Assignments",
    link_url: "assignments",
  },
  {
    id: 3,
    link_text: "Subject Attendance",
    link_url: "attendance",
  },
  {
    id: 4,
    link_text: "Grades & Assessment",
    link_url: "grades",
  },
  {
    id: 5,
    link_text: "Student Progress Tracker",
    link_url: "progress",
  },
  {
    id: 6,
    link_text: "Subject-specific Resources",
    link_url: "resources",
  },
  {
    id: 7,
    link_text: "Subject Announcements",
    link_url: "announcements",
  },
];

const SubjectManagement = () => {
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

export default SubjectManagement;
