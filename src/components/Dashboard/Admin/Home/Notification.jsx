const notificationData = [
  {
    id: 0,
    title: "Payment Reminder",
    desc: "ABC School's payment is due on 25-Sep-2024.",
    dueDate: "2024-08-22",
    status: "Pending",
  },
  {
    id: 1,
    title: "Ticket Raised",
    desc: "XYZ University raised a support ticket on 20-Sep-2024.",
    dueDate: "2024-08-21",
    status: "In Progress",
  },
  {
    id: 2,
    title: "System Alert:",
    desc: "Scheduled maintenance on 30-Sep-2024.",
    dueDate: "2024-08-21",
    status: "Upcoming",
  },
];

const Notification = () => {
  return (
    <div className="w-full lg:w-1/2">
      <h2 className="text-xl font-semibold mt-8 mb-4">Notification</h2>
      <div className="border rounded-md bg-white">
        <div className="flex justify-between items-center px-4 py-2 bg-slate-100 rounded-tl-md rounded-tr-md">
          <p className="w-full">Task</p>
          <p className="w-1/2">Due Date</p>
          <p className="w-1/2">Status</p>
        </div>
        <div>
          {notificationData.map((data) => (
            <div
              key={data.id}
              className="flex justify-between items-center px-4 py-2 bg-white border-t rounded-bl-md rounded-br-md"
            >
              <p className="w-full flex flex-col gap-1">
                <span className="text-sm font-semibold">{data.title}</span>
                <span className="text-xs">{data.desc}</span>
              </p>
              <p className="w-1/2">{data.dueDate}</p>
              <p className="w-1/2">{data.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
