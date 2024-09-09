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

  const displayImg = (index) => {
    setImg(featureList[index].msg);
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
        <div className="w-full flex justify-between gap-6">
          <div className="w-1/2 shadow-inner border-b">{img}</div>
          <div className="w-1/2 flex flex-col gap-3">
            {featureList.map((feature, index) => (
              <div
                key={index}
                onClick={() => displayImg(index)}
                className="bg-slate-100 mb-2 cursor-pointer px-4 py-6 rounded-md"
              >
                <p className="mb-6 text-2xl">{feature.icon}</p>
                <h3 className="font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
