import TitleComponent from "../../../styledComponents/TitleComponent";
// import TableComponent from "../../../styledComponents/TableComponent";
import Cards from "../../../styledComponents/Cards";

const subscriptionData = [
  {
    id: 0,
    title: "Total Tickets",
    content: "125",
  },
  {
    id: 1,
    title: "Open Tickets",
    content: "23",
  },
  {
    id: 2,
    title: "Closed Tickets",
    content: "95",
  },
  {
    id: 3,
    title: "Pending Tickets",
    content: "11",
  },
];

const Subscription = () => {
  return (
    <div>
      <div>
        <div>
          <TitleComponent title="Subscription Overview" />
          {/* view btn */}
        </div>
        <div>{/* renewal */}</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
        {subscriptionData.map((data) => (
          <Cards key={data.id} title={data.title} content={data.content} />
        ))}
      </div>
      <TitleComponent title="Next Payment Due" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2">
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="gradeLevel"
          >
            Grade Level
          </label>
          <input
            type="text"
            id="gradeLevel"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="10"
          />
        </div>
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="gradeLevel"
          >
            Grade Level
          </label>
          <input
            type="text"
            id="gradeLevel"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="10"
          />
        </div>
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="gradeLevel"
          >
            Grade Level
          </label>
          <input
            type="text"
            id="gradeLevel"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="10"
          />
        </div>
        <div className="">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="gradeLevel"
          >
            Grade Level
          </label>
          <input
            type="text"
            id="gradeLevel"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            placeholder="10"
          />
        </div>
      </div>
      <TitleComponent title="Invoice History" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2"></div>
      <TitleComponent title="Payment Method" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 gap-2"></div>
      {/* <TableComponent /> */}
    </div>
  );
};

export default Subscription;
