import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const footerList = [
  {
    title: "Product",
    list: [
      {
        title: "Features",
        link: "",
      },
      {
        title: "Testimonials",
        link: "",
      },
      {
        title: "Highlights",
        link: "",
      },
      {
        title: "Pricing",
        link: "",
      },
      {
        title: "FAQs",
        link: "",
      },
    ],
  },
  {
    title: "Company",
    list: [
      {
        title: "About us",
        link: "",
      },
      {
        title: "Careers",
        link: "",
      },
      {
        title: "Press",
        link: "",
      },
    ],
  },
  {
    title: "Legal",
    list: [
      {
        title: "Terms",
        link: "",
      },
      {
        title: "Privacy",
        link: "",
      },
      {
        title: "Contact",
        link: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="w-11/12 lg:w-3/4 py-8 lg:py-20 divide-y-2 divide-gray-200 mx-auto flex flex-col gap-8">
      <div className="flex justify-between w-full">
        <div className="lg:w-2/3 md:w-1/2 w-full">
          <img src={Logo} className="w-auto h-6" />
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mt-4">Join the newsletter</h4>
            <p className="text-sm text-gray-500">Subscribe for weekly updates. No spams ever!</p>
            <div className="flex gap-2 mt-4">
              <input className="border-2 border-gray-200 rounded-md p-2" type="email" placeholder="Your email address" />
              <button className="text-sm rounded font-medium px-4 no-underline text-white bg-[#0A66C2] shadow-sm shadow-[#021F3B] hover:bg-[#0959AA]">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="w-1/3 lg:w-1/2 hidden md:flex justify-between">
          {footerList.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-700 mb-2">{item.title}</h3>
              {item.list.map((item, index) =>
                <Link to={item.link} key={index}><p className="text-sm text-gray-500 mb-1 hover:underline">{item.title}</p></Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-8 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-700 font-medium">
            <Link to="/" className="underline">Privacy Policy</Link> |{" "}
            <Link to="" className="underline">Terms of Service</Link>
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Copyright © <Link to="/" className="underline font-medium">Sitemark</Link> 2024
          </p>
        </div>
        <div className="flex gap-2">
          <p className="border p-2 rounded-md hover:bg-slate-100 cursor-pointer"><FaGithub /></p>
          <p className="border p-2 rounded-md hover:bg-slate-100 cursor-pointer"><FaXTwitter /></p>
          <p className="border p-2 rounded-md hover:bg-slate-100 cursor-pointer"><FaLinkedin /></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
