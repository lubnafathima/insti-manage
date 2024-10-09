const TopInstitutesData = [
  {
    id: 0,
    institution: "Green Valley High School",
    login: "7",
    users: "150",
    plan: "Premium",
  },
  {
    id: 1,
    institution: "Riverbank Academy",
    login: "4",
    users: "100",
    plan: "Premium",
  },
  {
    id: 2,
    institution: "Oakridge International",
    login: "7",
    users: "120",
    plan: "Basic",
  },
  {
    id: 3,
    institution: "Maple Leaf School",
    login: "3",
    users: "80",
    plan: "Premium",
  },
  {
    id: 4,
    institution: "Lakeside Institute",
    login: "5",
    users: "200",
    plan: "Basic",
  },
];

const TopInsti = () => {
  return (
    <div className="w-full lg:w-1/2">
      <h2 className="text-xl font-semibold mt-8 mb-4">
        Top Performing Institutions
      </h2>
      <div className="border rounded-md bg-white">
        <div className="flex justify-between items-center px-4 py-2 bg-slate-100 rounded-tl-md rounded-tr-md">
          <p className="w-full">Institution</p>
          <p className="w-1/3">Login / week</p>
          <p className="w-1/3">Active Users</p>
          <p className="w-1/3">Subscription Plan</p>
        </div>
        <div>
          {TopInstitutesData.map((data) => (
            <div
              key={data.id}
              className="flex justify-between items-center px-4 py-2 bg-white border-t rounded-bl-md rounded-br-md"
            >
              <p className="w-full">{data.institution}</p>
              <p className="w-1/3">{data.login}</p>
              <p className="w-1/3">{data.users}</p>
              <p className="w-1/3">{data.plan}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopInsti;
