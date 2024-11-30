import TitleComponent from "../../../../styledComponents/TitleComponent";
import CardLinks from "../../../../styledComponents/CardLinks";

const LinksData = [
  {
    id: 1,
    link_text: "Inbox",
    link_url: "mail",
  },
  {
    id: 2,
    link_text: "Announcements",
    link_url: "announcements",
  },
  {
    id: 5,
    link_text: "Real-Time Chat",
    link_url: "chat",
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
