import TitleComponent from "../../../styledComponents/TitleComponent";
import Cards from "../../../styledComponents/Cards";

const subscriptionData = [
  {
    id: 0,
    title: "Total Tickets",
    content: "125",
  },
  {
    id: 1,
    title: "Open Tickets",
    content: "23",
  },
  {
    id: 2,
    title: "Closed Tickets",
    content: "95",
  },
  {
    id: 3,
    title: "Pending Tickets",
    content: "11",
  },
];

const Subscription = () => {
  return (
    <div>
      <div>
        <div>
          <TitleComponent title="Subscription Overview" />
          {/* view btn */}
        </div>
        <div>{/* renewal */}</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
        {subscriptionData.map((data) => (
          <Cards key={data.id} title={data.title} content={data.content} />
        ))}
      </div>
      <TitleComponent title="Next Payment Due" />
    </div>
  );
};

export default Subscription;
