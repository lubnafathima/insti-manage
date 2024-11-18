import TitleComponent from "../../../../styledComponents/TitleComponent";
import CardLinks from "../../../../styledComponents/CardLinks";

const LinksData = [
  {
    id: 0,
    link_text: "Personal Information",
    link_url: "personal-information",
  },
  {
    id: 1,
    link_text: "Account Settings",
    link_url: "account-settings",
  },
  {
    id: 2,
    link_text: "Notifications Settings",
    link_url: "notifications",
  },
  {
    id: 3,
    link_text: "Privacy Settings",
    link_url: "privacy",
  },
  {
    id: 4,
    link_text: "Classroom Preferences",
    link_url: "preferences",
  },
  {
    id: 5,
    link_text: "Security Settings",
    link_url: "security",
  },
  {
    id: 6,
    link_text: "Integrations",
    link_url: "integrations",
  },
  {
    id: 7,
    link_text: "Support and Help",
    link_url: "support-help",
  },
];

const Settings = () => {
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

export default Settings;
