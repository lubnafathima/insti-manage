import CardLinks from "../../../../styledComponents/CardLinks";
import CardDetailed from "../../../../styledComponents/CardDetailed";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const classesOverviewData = [
  {
    id: 0,
    link_text: "Time Table",
    link_url: "timetable",
  },
  {
    id: 1,
    link_text: "Class Overview",
    link_url: "class-overview",
  },
  {
    id: 5,
    link_text: "Assignments",
    link_url: "assignments",
  },
  {
    id: 2,
    link_text: "Materials",
    link_url: "materials",
  },
  {
    id: 3,
    link_text: "Class Notes",
    link_url: "class-notes",
  },
  {
    id: 4,
    link_text: "Communication",
    link_url: "communication",
  },
];

const reminderData = [
  {
    id: 0,
    title: "Next Class",
    item: ["Science", "(9:00 AM - 10:00 AM)", "Room 307"],
  },
  {
    id: 1,
    title: "Later Today",
    item: ["Maths", "(10:15 AM - 11:15 AM)", "Room 307"],
  },
  {
    id: 2,
    title: "Later Today",
    item: ["English", "(11:15 AM - 12:15 PM)", "Room 307"],
  },
  {
    id: 3,
    title: "Later Today",
    item: ["Arts", "(1:00 PM - 2:00 PM)", "Room 310"],
  },
  {
    id: 4,
    title: "Later Today",
    item: ["French", "(1:00 PM - 2:00 PM)", "Room 211"],
  },
  {
    id: 5,
    title: "Later Today",
    item: ["Maths", "(2:00 PM - 3:00 PM)", "Room 307"],
  },
];

const Classes = () => {
  return (
    <>
      <div>
        <TitleComponent title="Classes Overview" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {classesOverviewData.map((data) => (
            <CardLinks key={data.id} link_text={data.link_text} link_url={data.link_url} />
          ))}
        </div>
      </div>
      <div className="my-8">
        <TitleComponent title="Upcoming Classes Reminder" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2">
          {reminderData.map((data) => (
            <CardDetailed key={data.id} title={data.title} item={data.item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Classes;
