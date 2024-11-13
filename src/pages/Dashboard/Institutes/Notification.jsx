import TitleComponent from "../../../styledComponents/TitleComponent";
import TableComponent from "../../../styledComponents/TableComponent";
import InputComponent from "../../../styledComponents/InputComponent";
import ButtonFilled from "../../../styledComponents/ButtonFilled";
import Cards from "../../../styledComponents/Cards";

const notificationsOverview = [
  {
    id: 0,
    title: "Total Notifications",
    content: "50",
  },
  {
    id: 1,
    title: "Unread Notifications",
    content: "10",
  },
  {
    id: 2,
    title: "High-Priority Notifications",
    content: "5",
  },
  {
    id: 3,
    title: "New Notifications Today",
    content: "2",
  },
];

const recentHeader = ["Title", "Type", "Date", "Status", "Priority", "Actions"];

const recentData = [
  [
    "New Support Ticket Raised",
    "Support Ticket",
    "09/25/2024",
    "Unread",
    "High",
    "View",
  ],
  [
    "Monthly Fee Reminder",
    "Fee Payment Reminder",
    "09/23/2024",
    "Read",
    "Medium",
    "View",
  ],
  [
    "System Update Completed",
    "System Update",
    "09/22/2024",
    "Read",
    "Low",
    "View",
  ],
  [
    "Parent-Teacher Meeting",
    "Event Reminder",
    "09/20/2024",
    "Unread",
    "High",
    "View",
  ],
];

const preferenceHeader = [
  "",
  "System Updates",
  "Support Tickets",
  "Payment Reminders",
  "Event Reminders",
  "General Alerts",
];

const preferenceData = [
  ["In-Dashboard", "ON", "ON", "ON", "ON", "OFF"],
  ["Email Notifications", "ON", "ON", "ON", "ON", "OFF"],
  ["Mobile Alerts", "ON", "ON", "ON", "ON", "OFF"],
  ["SMS Alerts", "ON", "ON", "ON", "ON", "OFF"],
];

const Notification = () => {
  return (
    <div>
      <div className="">
        <TitleComponent title="Notifications Overview" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
          {notificationsOverview.map((data) => (
            <Cards key={data.id} title={data.title} content={data.content} />
          ))}
        </div>
      </div>
      <TitleComponent title="Recent Notification" />
      <InputComponent placeholder='search for specific notifications by keyword (e.g., "attendance", "fee payment reminder")' />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 my-4 gap-2">
        <div className="">
          <label className="block text-sm font-medium mb-1" htmlFor="Type">
            Type
          </label>
          <input
            type="text"
            id="Type"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Select Type"
          />
        </div>
        <div className="">
          <label className="block text-sm font-medium mb-1" htmlFor="Status">
            Status
          </label>
          <input
            type="text"
            id="Status"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Select Status"
          />
        </div>
        <div className="">
          <label className="block text-sm font-medium mb-1" htmlFor="Priority">
            Priority
          </label>
          <input
            type="text"
            id="Priority"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Select Priority"
          />
        </div>
        <div className="">
          <label className="block text-sm font-medium mb-1" htmlFor="DateRange">
            Date Range
          </label>
          <input
            type="text"
            id=""
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Select From Date"
          />
        </div>
        <div className="flex items-end">
          <input
            type="text"
            id=""
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Select To Date"
          />
        </div>
        <ButtonFilled text="Mark as Read / Unread" />
        <ButtonFilled text="Archive" />
        <ButtonFilled text="Delete" />
        <ButtonFilled text="Download" />
        <ButtonFilled text="View Archive" /> {/* connect "/archive" route */}
      </div>
      <TableComponent tableHeader={recentHeader} tableData={recentData} />
      <TitleComponent title="Notification Preferences" />
      <TableComponent
        tableHeader={preferenceHeader}
        tableData={preferenceData}
      />
    </div>
  );
};

export default Notification;
