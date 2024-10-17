import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";

const NotificationList = [
  {
    id: 0,
    title: "PTA Meeting Reminder",
    content: "PTA meeting scheduled for 25-Sep-2024 at 3:00 PM.",
  },
  {
    id: 1,
    title: "Pending Support Ticket",
    content: "Support ticket #105 is unresolved for 2 days.",
  },
  {
    id: 2,
    title: "System Alert",
    content:
      "Platform maintenance scheduled on 30-Sep-2024, downtime expected for 2 hours.",
  },
];

const Notification = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full flex justify-between items-center">
        <TitleComponent title="Notification" />
        <ButtonFilled text="Mark As Read" />
      </div>
      <div className="w-full my-4 bg-white border border-gray-300 rounded-md overflow-hidden">
        {NotificationList.map((item) => (
          <div
            key={item.id}
            className="hover:bg-gray-50 p-2 border border-gray-300 cursor-pointer"
          >
            <span className="font-bold">{item.title}: </span>
            <span>{item.content}</span>
          </div>
        ))}
      </div>
      <ButtonFilled text="View all" />
    </div>
  );
};

export default Notification;
