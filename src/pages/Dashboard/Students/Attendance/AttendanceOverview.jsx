import TitleComponent from "../../../../styledComponents/TitleComponent";
import CardDetailed from "../../../../styledComponents/CardDetailed";

const overview = [
  {
    id: 0,
    title: "Attended:",
    item: ["42 out of 50 days (85%)"],
  },
  {
    id: 1,
    title: "Excused Absences:",
    item: ["5 days"],
  },
  {
    id: 2,
    title: "Unexcused Absences:",
    item: ["3 days"],
  },
  {
    id: 3,
    title: "Compliance",
    item: ["75%"],
  },
];

const AttendanceOverview = () => {
  return (
    <>
      <TitleComponent title="Attendance" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
        {overview.map((data) => (
          <CardDetailed key={data.id} title={data.title} item={data.item} />
        ))}
      </div>
    </>
  );
};

export default AttendanceOverview;
