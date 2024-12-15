import CardLinks from "../../../../styledComponents/CardLinks";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const parentPortalOverviewData = [
  {
    id: 0,
    link_text: "Parent Information",
    link_url: "parent-information",
  },
  {
    id: 1,
    link_text: "Academic Reports",
    link_url: "academic-reports",
  },
  {
    id: 2,
    link_text: "Progress Tracking",
    link_url: "progress-tracking",
  },
  {
    id: 3,
    link_text: "Attendance Reports",
    link_url: "attendance-reports",
  },
  {
    id: 4,
    link_text: "Communication",
    link_url: "communication",
  },
  {
    id: 5,
    link_text: "Notifications",
    link_url: "notifications",
  },
  {
    id: 6,
    link_text: "Meeting Schedules",
    link_url: "meeting-schedules",
  },
  {
    id: 7,
    link_text: "Parental Permissions",
    link_url: "parental-permissions",
  },
  {
    id: 8,
    link_text: "Activity Logs",
    link_url: "activity-logs",
  },
];

const ParentPortal = () => {
  return (
    <>
      <TitleComponent title="Parent Portal Overview" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {parentPortalOverviewData.map((data) => (
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

export default ParentPortal;
