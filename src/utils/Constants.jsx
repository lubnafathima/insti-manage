import { FaHome, FaUniversity } from "react-icons/fa";
import { MdSettings, MdAnalytics, MdHelp, MdPayments } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { TbGraphFilled } from "react-icons/tb";

export const MENU_LIST = [
  {
    name: "Home",
    icon: <FaHome className="w-6 h-6" />,
    path: "/dashboard/home",
  },
  {
    name: "Institutes",
    icon: <FaUniversity className="w-6 h-6" />,
    path: "/dashboard/institutes",
  },
  {
    name: "Analytics",
    icon: <MdAnalytics className="w-6 h-6" />,
    submenu: [
      {
        name: "Reports",
        path: "/dashboard/reports",
        icon: <BiSolidReport className="w-6 h-6 ml-8" />,
      },
      {
        name: "Payments",
        path: "/dashboard/payments",
        icon: <MdPayments className="w-6 h-6 ml-8" />,
      },
      {
        name: "Activities",
        path: "/dashboard/activities",
        icon: <TbGraphFilled className="w-6 h-6 ml-8" />,
      },
    ],
  },
  {
    name: "Settings",
    icon: <MdSettings className="w-6 h-6" />,
    path: "/dashboard/settings",
  },
  {
    name: "Help",
    icon: <MdHelp className="w-6 h-6" />,
    path: "/dashboard/help",
  },
];
