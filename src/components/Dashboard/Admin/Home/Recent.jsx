const recentData = [
  {
    id: 0,
    activity: "New Institution Added",
    institution: "XYZ School",
    date: "2024-08-20",
    status: "Suceess",
  },
  {
    id: 1,
    activity: "Payment Processed",
    institution: "ABC College",
    date: "2024-08-18",
    status: "Suceess",
  },
  {
    id: 2,
    activity: "Plan Upgrade",
    institution: "DEF College",
    date: "2024-08-17",
    status: "Suceess",
  },
  {
    id: 3,
    activity: "Support Ticket Raised",
    institution: "GHI College",
    date: "2024-08-16",
    status: "Pending",
  },
  {
    id: 4,
    activity: "Payment Failed",
    institution: "JKL College",
    date: "2024-08-15",
    status: "Failed",
  },
];

const Recent = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mt-8 mb-4">Recent Activities</h2>
      <div className="border rounded-md bg-white">
        <div className="flex justify-between items-center px-4 py-2 bg-slate-100 rounded-tl-md rounded-tr-md">
          <p className="w-full">Activity</p>
          <p className="w-1/2">Institution</p>
          <p className="w-1/2">Date</p>
          <p className="w-1/2">Status</p>
        </div>
        <div>
          {recentData.map((data) => (
            <div
              key={data.id}
              className="flex justify-between items-center px-4 py-2 bg-white border-t rounded-bl-md rounded-br-md"
            >
              <p className="w-full">{data.activity}</p>
              <p className="w-1/2">{data.institution}</p>
              <p className="w-1/2">{data.date}</p>
              <p className="w-1/2">{data.status}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recent;
