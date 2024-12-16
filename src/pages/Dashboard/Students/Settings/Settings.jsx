import CardLinks from "../../../../styledComponents/CardLinks";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const settingsOverviewData = [
  {
    id: 0,
    link_text: "Profile Settings",
    link_url: "profile-settings",
  },
  {
    id: 1,
    link_text: "Account Settings",
    link_url: "account-settings",
  },
  {
    id: 2,
    link_text: "Notification Settings",
    link_url: "notification-settings",
  },
  {
    id: 3,
    link_text: "Privacy Settings",
    link_url: "privacy-settings",
  },
  {
    id: 4,
    link_text: "Security",
    link_url: "security",
  },
  {
    id: 5,
    link_text: "Academic Preferences",
    link_url: "academic-preferences",
  },
  {
    id: 6,
    link_text: "Communication Preferences",
    link_url: "communication-preferences",
  },
  {
    id: 7,
    link_text: "Linked Accounts",
    link_url: "linked-accounts",
  },
  {
    id: 8,
    link_text: "Appearance",
    link_url: "appearance",
  },
  {
    id: 9,
    link_text: "Help",
    link_url: "help",
  },
];

const Settings = () => {
  return (
    <>
      <TitleComponent title="Settings Overview" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {settingsOverviewData.map((data) => (
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

export default Settings;
