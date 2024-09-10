import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#CEE5FD] via-white to-white relative m-auto px-10">
      <Navbar />
      <div className="w-full pt-14 md:pt-28 flex flex-col justify-center items-center bg-slate-2">
        <h1 className="mt-20 text-6xl font-bold text-center text-[#0A0A0A] leading-tight">
          Manage <span className="text-[#0A66C2]">Effortlessly</span>
        </h1>
        <p className="text-[#4C5967] w-11/12 lg:w-1/2 text-center mt-6 mb-8">
          Explore our advanced platform, offering seamless solutions customized
          for you. Enhance your workflow with premium tools and support.
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-transparent border-2 border-slate-300 rounded-md px-4 py-2 outline-[#0959AA]"
          />
          <button className="text-sm rounded font-medium px-4 no-underline text-white bg-[#0A66C2] shadow-sm shadow-[#021F3B] hover:bg-[#0959AA]">
            START NOW
          </button>
        </div>
        <p className="text-xs mt-4">
          By clicking &#34;Start now&#34; you agree to our{" "}
          <Link to="" className="text-[#0A66C2] underline">
            Terms & Conditions.
          </Link>
        </p>
      </div>
      <div className="m-auto mt-8 lg:mt-20 mb-8 lg:mb-16 w-11/12 lg:w-3/4 min-h-80 bg-white shadow-inner shadow-shate-300 drop-shadow-md"></div>
      <div className="m-auto w-11/12 lg:w-3/4">
        <p className="text-center text-base text-[#4C5967]">
          Trusted by the best companies
        </p>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mt-5 lg:mt-10 mb-20">
          <div className="w-40 h-16 bg-white shadow-inner shadow-shate-300 drop-shadow-md"></div>
          <div className="w-40 h-16 bg-white shadow-inner shadow-shate-300 drop-shadow-md"></div>
          <div className="w-40 h-16 bg-white shadow-inner shadow-shate-300 drop-shadow-md"></div>
          <div className="w-40 h-16 bg-white shadow-inner shadow-shate-300 drop-shadow-md"></div>
          <div className="w-40 h-16 bg-white shadow-inner shadow-shate-300 drop-shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
