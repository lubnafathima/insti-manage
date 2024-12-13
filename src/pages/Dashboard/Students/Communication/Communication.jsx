import CardLinks from "../../../../styledComponents/CardLinks";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const communicationOverviewData = [
  {
    id: 0,
    link_text: "Announcements",
    link_url: "announcements",
  },
  {
    id: 1,
    link_text: "Contact Teachers",
    link_url: "contact-teachers",
  },
  {
    id: 2,
    link_text: "Class Discussions",
    link_url: "class-discussions",
  },
  {
    id: 3,
    link_text: "Support Tickets",
    link_url: "support-tickets",
  },
  {
    id: 4,
    link_text: "Notifications",
    link_url: "notifications",
  },
  {
    id: 5,
    link_text: "Attachments",
    link_url: "attachments",
  },
  {
    id: 6,
    link_text: "Communication History",
    link_url: "history",
  },
];

const Communication = () => {
  return (
    <>
      <TitleComponent title="Communication Overview" />
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

export default Communication;
