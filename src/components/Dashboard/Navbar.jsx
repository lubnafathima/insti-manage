import { useLocation } from "react-router-dom";
import { FaSearch, FaBell } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const breadcrumb = pathSegments
    .map((segment) =>
      segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    )
    .join(" > ");

  return (
    <div className="flex justify-between items-center">
      <div className="text-sm font-semibold text-gray-500">{breadcrumb}</div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4 bg-slate-100 border rounded-md py-2 px-4">
          <FaSearch className="w-4 h-auto cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-slate-100"
          />
        </div>
        <p className="bg-slate-100 rounded-md p-3 cursor-pointer border hover:bg-slate-200">
          <FaBell />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
