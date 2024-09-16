const TopInstitutesData = [
  {
    id: 0,
    institution: "ABC School",
    score: "95",
    revenue: "₹50,000",
  },
  {
    id: 1,
    institution: "XYZ College",
    score: "88",
    revenue: "₹45,000",
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
          <p className="w-1/2">Score</p>
          <p className="w-1/2">Revenue</p>
        </div>
        <div>
          {TopInstitutesData.map((data) => (
            <div
              key={data.id}
              className="flex justify-between items-center px-4 py-2 bg-white border-t rounded-bl-md rounded-br-md"
            >
              <p className="w-full">{data.institution}</p>
              <p className="w-1/2">{data.score}</p>
              <p className="w-1/2">{data.revenue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopInsti;
