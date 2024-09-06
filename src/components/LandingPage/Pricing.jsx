const pricingList = [
  {
    title: "Free",
    price: "$0 per month",
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
    price: "$15 per month",
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
    price: "$30 per month",
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
            className="bg-slate-50 border-2 flex flex-col rounded-lg p-4"
          >
            <div className="border-b-2 pb-4">
              <div>
                <p className="text-sm">{pricing.title}</p>
                {/* <p className="text-sm">{pricing.tag}</p> */}
              </div>
              <p className="text-sm">{pricing.price}</p>
            </div>
            <div className="pt-4">
              {pricing.features.map((feature, index) => (
                <div key={index}>
                  <p className="text-sm">{feature}</p>
                </div>
              ))}
            </div>
            <button className="">{pricing.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
