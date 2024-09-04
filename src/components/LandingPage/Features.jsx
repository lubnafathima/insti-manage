const featureList = [
  {
    title: "Dashboard",
    description:
      "This item could provide a snapshot of the most important metrics or data points related to the product.",
    icon: "",
    imgUrl: "",
  },
  {
    title: "Mobile integration",
    description:
      "This item could provide information about the mobile app version of the product.",
    icon: "",
    imgUrl: "",
  },
  {
    title: "Available on all platforms",
    description:
      "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
    icon: "",
    imgUrl: "",
  },
];

const Features = () => {
  return (
    <div className="w-11/12 lg:w-3/4 py-8 lg:py-20 border-b-2">
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-semibold tracking-wider">Product features</h2>
        <p className="py-2 text-gray-500">
          Provide a brief overview of the key features of the product. For
          example, you could list the number of features, their types or
          benefits, and add-ons.
        </p>
      </div>
      <div className="mt-8">
        {featureList.map((feature, index) => (
          <div key={index}>
            <div>{/* dashboard image comes here */}</div>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
