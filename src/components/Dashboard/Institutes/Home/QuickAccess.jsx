import TitleComponent from "../../../../styledComponents/TitleComponent";
import CardLinks from "../../../../styledComponents/CardLinks";
import { MdSupport } from "react-icons/md";

const LinksData = [
  {
    id: 0,
    icon: <MdSupport />,
    link_text: "Add New Student",
    link_url: "",
  },
  {
    id: 1,
    icon: <MdSupport />,
    link_text: "Add New Teacher",
    link_url: "",
  },
  {
    id: 2,
    icon: <MdSupport />,
    link_text: "View All Students",
    link_url: "",
  },
  {
    id: 3,
    icon: <MdSupport />,
    link_text: "View All Teachers",
    link_url: "",
  },
  {
    id: 4,
    icon: <MdSupport />,
    link_text: "Resolve Support Tickets",
    link_url: "",
  },
];

const QuickAccess = () => {
  return (
    <div>
      <TitleComponent title="Quick Access" />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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

export default QuickAccess;
