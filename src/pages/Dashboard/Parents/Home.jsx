import CardDetailed from "../../../styledComponents/CardDetailed";
import TitleComponent from "../../../styledComponents/TitleComponent";
import TableComponent from "../../../styledComponents/TableComponent";

const attendance = [
  {
    id: 0,
    title: "September 2024",
    item: ["85% Attendance"],
  },
  {
    id: 1,
    title: "Present",
    item: ["17 Days"],
  },
  {
    id: 2,
    title: "Absent",
    item: ["3 Days"],
  },
  {
    id: 3,
    title: "Late",
    item: ["2 Days"],
  },
];

const recentGrades = [
  {
    id: 0,
    title: "Overall Average",
    item: ["88%"],
  },
  {
    id: 1,
    title: "English",
    item: ["82%"],
  },
  {
    id: 2,
    title: "Science",
    item: ["95%"],
  },
  {
    id: 3,
    title: "Math",
    item: ["89%"],
  },
];

const upcomingAssignments = [
  {
    id: 0,
    title: "Math Homework #4",
    item: ["Due: Sep 28, 2024"],
  },
  {
    id: 1,
    title: "Science Lab Report",
    item: ["Due: Oct 3, 2024"],
  },
];

const upcomingExams = [
  {
    id: 0,
    title: "English Midterm Exam",
    item: ["Oct 1, 2024"],
  },
];

const upcomingEvents = [
  {
    id: 0,
    title: "Parent-Teacher Conference",
    item: ["Oct 5, 2024"],
  },
  {
    id: 1,
    title: "School Sports Day",
    item: ["Oct 15, 2024"],
  },
];

const notificationsData = [
  {
    id: 0,
    title: "Holidays",
    data: "School Holiday on Oct 2, 2024",
  },
];

const reminderData = [
  {
    id: 0,
    title: "Homework",
    data: "Math Homework Submission due on Sep 28, 2024",
  },
];

const recentActivityHeader = ["Activity", "Date", "Status"];

const recentActivityData = [
  ["Science Project Submitted", "Sept 22", "Completed"],
  ["Math Quiz Graded", "Sept 21", "85%"],
  ["Announcement: New School Rules", "Sept 20", "Unread"],
];

const Home = () => {
  return (
    <>
      <TitleComponent title="Attendance" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-8 gap-2">
        {attendance.map((data) => (
          <CardDetailed key={data.id} title={data.title} item={data.item} />
        ))}
      </div>
      <TitleComponent title="Recent Grades" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-8 gap-2">
        {recentGrades.map((data) => (
          <CardDetailed key={data.id} title={data.title} item={data.item} />
        ))}
      </div>
      <TitleComponent title="Upcoming Assignments" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-8 gap-2">
        {upcomingAssignments.map((data) => (
          <CardDetailed key={data.id} title={data.title} item={data.item} />
        ))}
      </div>
      <TitleComponent title="Upcoming Exams" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-8 gap-2">
        {upcomingExams.map((data) => (
          <CardDetailed key={data.id} title={data.title} item={data.item} />
        ))}
      </div>
      <TitleComponent title="Upcoming Events" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-8 gap-2">
        {upcomingEvents.map((data) => (
          <CardDetailed key={data.id} title={data.title} item={data.item} />
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        <div className="w-full">
          <TitleComponent title="Notification" />
          <div className="border border-gray-300 rounded-md">
            {notificationsData.map((item, index) => (
              <div
                key={item.id}
                className={`px-4 py-2 cursor-pointer rounded-md bg-white ${
                  index !== notificationsData.length - 1
                    ? "border-b border-gray-300 rounded-b-none"
                    : ""
                } hover:bg-gray-100`}
              >
                <h2 className="font-semibold">{item.title}</h2>
                <p>{item.data}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full">
          <TitleComponent title="Reminder" />
          <div className="border border-gray-300 rounded-md">
            {reminderData.map((item, index) => (
              <div
                key={item.id}
                className={`px-4 py-2 cursor-pointer rounded-md bg-white ${
                  index !== reminderData.length - 1
                    ? "border-b border-gray-300 rounded-b-none"
                    : ""
                } hover:bg-gray-100`}
              >
                <h2 className="font-semibold">{item.title}</h2>
                <p>{item.data}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-4">
        <TitleComponent title="Recent Activities" />
        <TableComponent
          tableHeader={recentActivityHeader}
          tableData={recentActivityData}
        />
      </div>
    </>
  );
};

export default Home;
