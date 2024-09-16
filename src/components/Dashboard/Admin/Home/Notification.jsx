const notificationData = [
  {
    id: 0,
    task: "Review pending institution registrations",
    dueDate: "2024-08-22",
    status: "Pending",
  },
  {
    id: 1,
    task: "Check system performance reports",
    dueDate: "2024-08-21",
    status: "In Progress",
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
              <p className="w-full">{data.task}</p>
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
