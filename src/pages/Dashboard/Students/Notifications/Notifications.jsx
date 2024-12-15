import CardLinks from "../../../../styledComponents/CardLinks";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const communicationOverviewData = [
  {
    id: 0,
    link_text: "Categorized Notifications",
    link_url: "categorized-notifications",
  },
  {
    id: 2,
    link_text: "Notification Details",
    link_url: "notification-details",
  },
  {
    id: 3,
    link_text: "Actionable Notifications",
    link_url: "actionable-notifications",
  },
  {
    id: 4,
    link_text: "Read Notifications",
    link_url: "read-notifications",
  },
  {
    id: 5,
    link_text: "Search Notifications",
    link_url: "search-notifications",
  },
  {
    id: 6,
    link_text: "Notification Settings",
    link_url: "notification-settings",
  },
];

const Notifications = () => {
  return (
    <>
      <TitleComponent title="Notifications Overview" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {communicationOverviewData.map((data) => (
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

export default Notifications;
