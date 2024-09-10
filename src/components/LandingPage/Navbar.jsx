import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      title: "Features",
      path: "",
    },
    {
      title: "Testimonials",
      path: "",
    },
    {
      title: "Highlights",
      path: "",
    },
    {
      title: "Pricing",
      path: "",
    },
    {
      title: "FAQ",
      path: "",
    },
  ];

  return (
    <div className="z-50 fixed top-0 left-0 right-0 w-11/12 lg:w-3/4 bg-white bg-opacity-55 border border-slate-300 rounded-full backdrop-blur-lg drop-shadow-md m-auto my-3 px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link to="/">
          <img src={Logo} alt="InstiManage Logo" className="w-32 h-auto" />
        </Link>
        <div className="hidden lg:flex">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-[#4C5967] text-sm no-underline px-2 py-1 hover:bg-slate-300 hover:bg-opacity-40 hover:backdrop-blur-sm hover:drop-shadow-sm"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex gap-0 lg:gap-4">
        <Link
          to="/sign-in"
          className="text-sm rounded font-medium px-4 py-1 no-underline text-[#0A66C2] hover:bg-[#CEE5FD] hover:bg-opacity-65 hover:backdrop-blur-xs hover:drop-shadow-xs"
        >
          Sign In
        </Link>
        <Link
          to="/sign-up"
          className="text-sm rounded font-medium px-4 pt-1 pb-2 no-underline text-white bg-[#0A66C2] shadow-sm shadow-[#021F3B] hover:bg-[#0959AA]"
        >
          Sign Up
        </Link>
      </div>
      <button
        className="lg:hidden cursor-pointer text-[#0A66C2]"
        onClick={() => setMenuOpen(true)}
      >
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>
      <Dialog open={menuOpen} onClose={setMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="divide-y-2 divide-slate-300 fixed inset-y-0 right-0 z-50 w-full h-full overflow-y-auto bg-[#CEE5FD] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 flex flex-col gap-6">
          <div className="flex justify-between">
            <Link to="/">
              <img src={Logo} alt="InstiManage Logo" className="w-32 h-auto" />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-[#0A66C2]"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="w-full flex flex-col justify-start gap-4 pt-6">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-[#4C5967] tracking-wide text-base font-medium no-underline px-2 py-1 hover:bg-slate-300 hover:bg-opacity-40 hover:backdrop-blur-sm hover:drop-shadow-sm"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 pt-6">
            <Link
              to="/sign-in"
              className="text-[#0A66C2] tracking-wide text-base font-medium no-underline px-2 py-1 hover:bg-slate-300 hover:bg-opacity-40 hover:backdrop-blur-sm hover:drop-shadow-sm"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="text-sm rounded font-medium px-4 pt-1 pb-2 no-underline text-white bg-[#0A66C2] shadow-sm shadow-[#021F3B] hover:bg-[#0959AA]"
            >
              Sign Up
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Navbar;
