import TitleComponent from "../../../../styledComponents/TitleComponent";
import Cards from "../../../../styledComponents/Cards";

const overviewData = [
  {
    id: 0,
    title: "Total Students",
    content: "1,500",
  },
  {
    id: 1,
    title: "Total Teachers",
    content: "75",
  },
  {
    id: 2,
    title: "Total Classes",
    content: "50",
  },
  {
    id: 3,
    title: "New Admissions",
    content: "200",
  },
  {
    id: 4,
    title: "Active Support Tickets",
    content: "5",
  },
];

const Overview = () => {
  return (
    <div>
      <TitleComponent title="Overview" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {overviewData.map((data) => (
          <Cards key={data.id} title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  );
};

export default Overview;
