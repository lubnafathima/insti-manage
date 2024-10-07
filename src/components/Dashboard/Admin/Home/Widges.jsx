const widgeData = [
  {
    id: 0,
    title: "Total Institutions",
    data: "50",
    content: "Total Institutions subscribed to the platform.",
    link_text: "View More",
    link_url: "",
  },
  {
    id: 1,
    title: "Active Institutions",
    data: "15",
    content: "Institutions currently active on the platform.",
    link_text: "View More",
    link_url: "",
  },
  {
    id: 2,
    title: "New Institutions",
    data: "2",
    content: "New Institutions added in the last 30 days.",
    link_text: "View More",
    link_url: "",
  },
  {
    id: 4,
    title: "Support Tickets",
    data: "5",
    content: "Number of open tickets that need attention.",
    link_text: "View More",
    link_url: "",
  },
  // {
  //   id: 5,
  //   title: "API Calls",
  //   data: "1,250",
  //   content: "API requests processed in the past 24 hours.",
  //   link_text: "View More",
  //   link_url: "",
  // },
  // {
  //   id: 6,
  //   title: "System Uptime",
  //   data: "99.98%",
  //   content: "The percentage of time the platform has been operational without outages.",
  //   link_text: "View More",
  //   link_url: "",
  // },
];

const Widges = () => {
  return (
    <>
      <h2 className="text-xl font-semibold my-4">Overview</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {widgeData.map((data) => (
          <div
            key={data.id}
            className="w-full min-h-40 bg-white border rounded-md shadow-sm flex flex-col justify-between p-4"
          >
            <div>
              <h4 className="text-base font-medium text-gray-600">
                {data.title}
              </h4>
              <h2 className="text-3xl font-bold mt-2">{data.data}</h2>
            </div>
            <p className="text-xs text-gray-500 77mt-2">{data.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Widges;
