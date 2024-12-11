import TitleComponent from "../../../../styledComponents/TitleComponent";
import CardDetailed from "../../../../styledComponents/CardDetailed";

const overview = [
  {
    id: 0,
    title: "Math",
    item: ["65%", "Attended: 18 out of 20 classes"],
  },
  {
    id: 1,
    title: "Science",
    item: ["85%", "Attended: 17 out of 20 classes"],
  },
  {
    id: 2,
    title: "History",
    item: ["70%", "Attended: 16 out of 20 classes"],
  },
  {
    id: 3,
    title: "English",
    item: ["75%", "Attended: 15 out of 20 classes"],
  },
];

const AttendanceBySubject = () => {
  return (
    <>
      <TitleComponent title="Attendance By Subject" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
        {overview.map((data) => (
          <CardDetailed key={data.id} title={data.title} item={data.item} />
        ))}
      </div>
    </>
  );
};

export default AttendanceBySubject;
