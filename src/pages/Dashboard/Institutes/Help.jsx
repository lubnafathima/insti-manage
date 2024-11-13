import TitleComponent from "../../../styledComponents/TitleComponent";
import InputComponent from "../../../styledComponents/InputComponent";
import CardLinks from "../../../styledComponents/CardLinks";

const helpCards = [
  {
    id: 0,
    link_text: "Submit a Ticket",
    link_url: "",
  },
  {
    id: 1,
    link_text: "Knowledge Base/FAQs",
    link_url: "",
  },
  {
    id: 2,
    link_text: "Live Chat",
    link_url: "",
  },
  {
    id: 3,
    link_text: "Contact Us",
    link_url: "",
  },
  {
    id: 4,
    link_text: "Recent Tickets",
    link_url: "",
  },
  {
    id: 5,
    link_text: "Guided Tutorials",
    link_url: "",
  },
];

const Help = () => {
  return (
    <div>
      <TitleComponent title="Help & Support" />
      <InputComponent placeholder="Type something ..." />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 my-4 gap-2">
        {helpCards.map((data) => (
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

export default Help;
