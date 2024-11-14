import Cards from "../../../../styledComponents/Cards";

const overview = [
  {
    id: 0,
    title: "Total Classes Today",
    content: "4",
  },
  {
    id: 1,
    title: "Pending Assignments",
    content: "3",
  },
  {
    id: 2,
    title: "Pending Messages",
    content: "2",
  },
  {
    id: 3,
    title: "Performance Alerts",
    content: "2",
  },
];

const Overview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
      {overview.map((data) => (
        <Cards key={data.id} title={data.title} content={data.content} />
      ))}
    </div>
  );
};

export default Overview;
