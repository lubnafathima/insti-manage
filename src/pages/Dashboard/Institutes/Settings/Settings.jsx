import TitleComponent from "../../../../styledComponents/TitleComponent";
import CardLinks from "../../../../styledComponents/CardLinks";

const settingCards = [
  {
    id: 0,
    link_text: "Account Settings",
    link_url: "account-settings",
  },
  {
    id: 1,
    link_text: "User Management",
    link_url: "user-management",
  },
  {
    id: 2,
    link_text: "Subscription Management",
    link_url: "subscription-management",
  },
  {
    id: 3,
    link_text: "System Preferences",
    link_url: "system-preferences",
  },
  {
    id: 4,
    link_text: "Security Settings",
    link_url: "security-settings",
  },
];

const Settings = () => {
  return (
    <div>
      <TitleComponent title="Settings" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 my-4 gap-2">
        {settingCards.map((data) => (
          <CardLinks
            key={data.id}
            link_text={data.link_text}
            link_url={data.link_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Settings;
