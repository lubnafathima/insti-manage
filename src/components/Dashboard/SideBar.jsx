import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MENU_LIST } from "../../utils/Helpers";
import { useRole } from "../../context/RoleContext";
import Image1 from "../../assets/images/img1.jpg";
import Logo from "../../assets/logo/logo.png";

const SideBar = () => {
  const location = useLocation();
  const [AnalyticsMenu, setAnalyticsMenu] = useState(false);
  const { role } = useRole();

  const filteredMenu = MENU_LIST[role] || [];

  useEffect(() => {
    console.log("Current Role:", role);
  }, [role]);

  // Helper function to check if the current path matches the item's path or is a sub-path
  const isActive = (path) => {
    if (!path) return false;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed w-72 h-screen bg-slate-100 border-r md:flex flex-col justify-between gap-2 p-4 hidden">
      <div>
        <img
          src={Logo}
          alt="InstiManage Logo"
          className="h-6 w-auto mb-6 mt-4"
        />
        <div className="border-t-2 pt-6 flex flex-col gap-2">
          {filteredMenu.map((item, index) => (
            <div key={index}>
              <Link
                to={item.path || "#"}
                onClick={() => {
                  if (item.name === "Analytics") {
                    setAnalyticsMenu(!AnalyticsMenu);
                  }
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                  isActive(item.path)
                    ? "bg-[#0A66C2] text-white"
                    : "text-gray-500 hover:bg-slate-200"
                }`}
              >
                <p>{item.icon}</p>
                <p className="font-semibold text-sm">{item.name}</p>
                <span className="ml-auto">
                  {item.name === "Analytics" &&
                    (AnalyticsMenu ? <FaChevronUp /> : <FaChevronDown />)}
                </span>
              </Link>
              {item.name === "Analytics" && AnalyticsMenu && (
                <div className="bg-gray-100 rounded-lg py-2 flex flex-col gap-2">
                  {item.submenu?.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                        isActive(subItem.path)
                          ? "bg-[#0A66C2] text-white"
                          : "text-gray-500 hover:bg-slate-200"
                      }`}
                    >
                      <p>{subItem.icon}</p>
                      <p className="font-semibold text-sm">{subItem.name}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center border-t-2 pt-4">
        <div className="flex items-center gap-2">
          <img
            src={Image1}
            alt="Testimonial Image"
            className="w-8 h-8 rounded-full"
          />
          <div className="">
            <h4 className="text-sm font-bold text-[#0A66C2]">John Doe</h4>
            <p className="text-xs">john@email.com</p>
          </div>
        </div>
        <p className="cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:bg-slate-200 p-1">
          <EllipsisVerticalIcon className="h-6 w-6" />
        </p>
      </div>
    </div>
  );
};

export default SideBar;
