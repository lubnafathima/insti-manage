import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { MdDevices } from "react-icons/md";

const featureList = [
  {
    title: "Dashboard",
    description:
      "This item could provide a snapshot of the most important metrics or data points related to the product.",
    icon: <MdDashboard />,
    msg: "1",
  },
  {
    title: "Mobile integration",
    description:
      "This item could provide information about the mobile app version of the product.",
    icon: <FaMobileAlt />,
    msg: "2",
  },
  {
    title: "Available on all platforms",
    description:
      "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
    icon: <MdDevices />,
    msg: "3",
  },
];

const Features = () => {
  const [img, setImg] = useState(featureList[0].msg);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const displayImg = (index) => {
    setImg(featureList[index].msg);
    setSelectedIndex(index);
  };
  return (
    <div className="w-11/12 lg:w-3/4 py-8 lg:py-20 border-b-2">
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-semibold tracking-wider">
          Product features
        </h2>
        <p className="py-2 text-gray-500">
          Provide a brief overview of the key features of the product. For
          example, you could list the number of features, their types or
          benefits, and add-ons.
        </p>
      </div>
      <div className="mt-8">
        <div className="flex flex-col gap-4 md:hidden">
          <div className="flex flex-wrap gap-2">
            {featureList.map((feature, index) => (
              <p
                key={index}
                className={`text-xs p-2 border rounded-full font-semibold tracking-wider cursor-pointer shadow-sm ${
                  selectedIndex === index
                    ? "bg-[#0A66C2] text-white border-[#0A66C2]"
                    : "bg-slate-50 text-slate-500 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                }`}
                onClick={() => displayImg(index)}
              >
                {feature.title}
              </p>
            ))}
          </div>
          <div className="w-full shadow-inner border-b flex justify-center items-center">{img}</div>
        </div>
        <div className="w-full hidden md:flex lg:flex-row flex-col justify-between gap-6">
          <div className="lg:w-1/2 w-full shadow-inner border-b flex justify-center items-center">{img}</div>
          <div className="lg:w-1/2 w-full flex flex-col gap-3">
            {featureList.map((feature, index) => (
              <div
                key={index}
                onClick={() => displayImg(index)}
                className={`mb-2 cursor-pointer px-4 py-6 rounded-md ${
                  selectedIndex === index
                    ? "bg-[#0A66C2] text-white"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                <p className="mb-6 text-2xl">{feature.icon}</p>
                <h3 className="font-semibold mb-3">{feature.title}</h3>
                <p>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
