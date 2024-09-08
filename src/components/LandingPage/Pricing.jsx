import { CheckCircleIcon } from "@heroicons/react/24/outline";

const pricingList = [
  {
    title: "Free",
    price: "$0",
    features: [
      "100 students included",
      "2GB of storage",
      "Help center access",
      "Email Support",
    ],
    buttonText: "Sign up for free",
    link: "",
  },
  {
    title: "Professional",
    tip: "Recommended",
    price: "$15",
    features: [
      "500 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
      "Dedicated team",
      "Best deals",
    ],
    buttonText: "Start now",
    link: "",
  },
  {
    title: "Enterprise",
    price: "$30",
    features: [
      "1000 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact Us",
    link: "",
  },
];

const Pricing = () => {
  return (
    <div className="w-11/12 lg:w-3/4 py-8 lg:py-20 border-b-2">
      <div className="w-full lg:w-2/3 mx-auto">
        <h2 className="text-center text-2xl font-semibold tracking-wider">
          Pricing
        </h2>
        <p className="text-center pt-2 text-gray-500">
          Quickly build an effective pricing table for your potential customers
          with this layout.
        </p>
        <p className="text-center pb-2 text-gray-500">
          It&#39;s built with default Material UI components with little
          customization.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {pricingList.map((pricing, index) => (
          <div
            key={index}
            className="bg-slate-50 border-2 flex flex-col justify-between gap-4 rounded-lg p-4"
          >
            <div>
              <div className="border-b-2 pb-4">
                <div>
                  <p className="text-lg font-semibold mb-2">{pricing.title}</p>
                </div>
                <p className="text-lg font-semibold">
                  <span className="text-4xl">{pricing.price}</span> per month
                </p>
              </div>
              <div className="pt-4">
                {pricing.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <CheckCircleIcon aria-hidden="true" className="h-6 w-6 bg-blue-500 rounded-full text-white" />
                    <p className="text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-blue-400 p-2 rounded-md text-white border-2 border-blue-400 hover:bg-blue-500">{pricing.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
