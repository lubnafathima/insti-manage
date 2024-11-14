import TitleComponent from "../../../../styledComponents/TitleComponent";
import CardLinks from "../../../../styledComponents/CardLinks";

const LinksData = [
  {
    id: 0,
    link_text: "Add New Assignment",
    link_url: "",
  },
  {
    id: 1,
    link_text: "Mark Attendance",
    link_url: "",
  },
  {
    id: 2,
    link_text: "Send Parent Message",
    link_url: "",
  },
];

const QuickAccess = () => {
  return (
    <div>
      <TitleComponent title="Quick Access" />
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

export default QuickAccess;
