import TitleComponent from "../../../../styledComponents/TitleComponent";
import CardLinks from "../../../../styledComponents/CardLinks";

const LinksData = [
  {
    id: 1,
    link_text: "Inbox/Outbox",
    link_url: "mail",
  },
  {
    id: 2,
    link_text: "New Message/Announcements",
    link_url: "announcements",
  },
  {
    id: 5,
    link_text: "Real-Time Chat (Optional)",
    link_url: "chat",
  },
  {
    id: 6,
    link_text: "Export/Archive Communication (Optional)",
    link_url: "export",
  },
];

const ParentCommunication = () => {
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

export default ParentCommunication;
