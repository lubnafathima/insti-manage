import CardDetailed from "../../../styledComponents/CardDetailed";
import CardLinks from "../../../styledComponents/CardLinks";
import TitleComponent from "../../../styledComponents/TitleComponent";
import TableComponent from "../../../styledComponents/TableComponent";
import TestCalendar from "../../../styledComponents/TestCalendar";

const overview = [
  {
    id: 0,
    title: "Upcoming Classes",
    item: ["Mathematics - 10:00 AM, Room 205"],
  },
  {
    id: 1,
    title: "Pending Assignments",
    item: ["Science Project - Due: Sept 30"],
  },
  {
    id: 2,
    title: "Recent Grades",
    item: ["Math Test: 85%", "History Quiz: 90%"],
  },
  {
    id: 3,
    title: "Attendance Summary",
    item: ["Present: 95%", "Absent: 5%"],
  },
];

const recentActivityHeader = ["Activity", "Date", "Status"];

const recentActivityData = [
  ["Science Project Submitted", "Sept 22", "Completed"],
  ["Math Quiz Graded", "Sept 21", "85%"],
  ["Announcement: New School Rules", "Sept 20", "Unread"],
];

const teacherMessagesData = [
  {
    id: 0,
    title: "Message from Ms. Smith (Math):",
    data: "Don't forget to revise Chapter 5 for the next class.",
  },
  {
    id: 1,
    title: "Message from Mr. Lee (Science):",
    data: "Please submit your projects by Friday.",
  },
];

const notificationsData = [
  {
    id: 0,
    title: "Assignment Deadline:",
    data: "Science Project Due in 3 Days",
  },
  {
    id: 1,
    title: "Exam Reminder:",
    data: "Mid-term Exam on Oct 1",
  },
  {
    id: 2,
    title: "New Announcement:",
    data: "School Sports Event on Oct 5",
  },
];

const quickAccessData = [
  {
    id: 0,
    link_text: "Submit Assignment",
  },
  {
    id: 1,
    link_text: "View Grades",
  },
  {
    id: 2,
    link_text: "Check Attendance",
  },
  {
    id: 3,
    link_text: "View Exam Schedule",
  },
];

const Home = () => {
  return (
    <>
      <TitleComponent title="Overview" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-8 gap-2">
        {overview.map((data) => (
          <CardDetailed key={data.id} title={data.title} item={data.item} />
        ))}
      </div>
      <div>
        <TitleComponent title="Recent Activities" />
        <TableComponent
          tableHeader={recentActivityHeader}
          tableData={recentActivityData}
        />
      </div>
      <div className="flex gap-4 mt-4">
        <div className="w-full">
          <TitleComponent title="Teacher Messages" />
          <div className="border border-gray-300 rounded-md">
            {teacherMessagesData.map((item, index) => (
              <div
                key={item.id}
                className={`px-4 py-2 cursor-pointer rounded-md bg-white ${
                  index !== teacherMessagesData.length - 1
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
          <TitleComponent title="Notifications" />
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
      </div>
      <div className="mt-8">
        <TitleComponent title="Quick Access" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickAccessData.map((data) => (
            <CardLinks key={data.id} link_text={data.link_text} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <TitleComponent title="Academin Calendar" />
        <TestCalendar />
      </div>
    </>
  );
};

export default Home;
