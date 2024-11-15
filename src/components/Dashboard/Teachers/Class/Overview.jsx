import CardDetailed from "../../../../styledComponents/CardDetailed";

const overview = [
  {
    id: 0,
    title: "Grade 5A - Mathematics",
    item: ["Total Students: 30", "Attendance Rate: 95%", "Pending Homework: 3"],
  },
  {
    id: 1,
    title: "Grade 6B - Science",
    item: ["Total Students: 28", "Attendance Rate: 92%", "Upcoming Test: 09/30/2024"],
  },
];

const Overview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
      {overview.map((data) => (
        <CardDetailed key={data.id} title={data.title} item={data.item} />
      ))}
    </div>
  );
};

export default Overview;
