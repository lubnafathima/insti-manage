import { Link } from "react-router-dom";
import { FaUniversity, FaEye } from "react-icons/fa";
import { MdSupport } from "react-icons/md";

const LinksData = [
  {
    id: 1,
    icon: <FaUniversity />,
    link_text: "Add New Institution",
    link_url: "/admin/institutes",
  },
  {
    id: 2,
    icon: <FaEye />,
    link_text: "View All Institutions",
    link_url: "",
  },
  {
    id: 3,
    icon: <MdSupport />,
    link_text: "View Support Tickets",
    link_url: "",
  },
];

const QuickAccess = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mt-8 mb-4">Quick Access</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 ld:grid-cols-4 gap-4">
        {LinksData.map((data) => (
          <Link
            to={data.link_url}
            key={data.id}
            className="w-full min-h-40 flex flex-col justify-center items-center gap-4 px-4 py-2 bg-white text-[#0A66C2] rounded-md border shadow-sm hover:bg-[#0A66C2] hover:text-white transition-all duration-300 ease-in-out"
          >
            <p className="text-3xl bg-[#0A66C2] text-white p-3 rounded-full">
              {data.icon}
            </p>
            <p className="text-lg">{data.link_text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
