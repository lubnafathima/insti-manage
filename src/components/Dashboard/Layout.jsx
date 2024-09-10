import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex w-full h-screen font-[Helvetica] tracking-wide">
      <SideBar />
      <div className="grow w-full min-h-screen p-4">
        <Navbar />
        <div className="py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
