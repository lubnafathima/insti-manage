import { BookmarkIcon } from "@heroicons/react/24/solid";

const highlightsList = [
  {
    title: "Adaptable performance",
    content: "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
    icon: "",
  },
  {
    title: "Built to last",
    content: "Experience unmatched durability that goes above and beyond with lasting investment.",
    icon: "",
  },
  {
    title: "Great user experience",
    content: "Integrate our product into your routine with an intuitive and easy-to-use interface.",
    icon: "",
  },
  {
    title: "Innovative functionality",
    content: "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
    icon: "",
  },
  {
    title: "Reliable support",
    content: "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
    icon: "",
  },
  {
    title: "Precision in every detail",
    content: "Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.",
    icon: "",
  },
];

const Highlights = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#06090A] text-white">
      <div className="w-11/12 lg:w-3/4 py-8 lg:py-20">
        <div className="w-full lg:w-2/3 mx-auto">
          <h2 className="text-center text-2xl font-semibold tracking-wider">
            Highlights
          </h2>
          <p className="text-center py-2 text-slate-400">
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer
            support and precision in every detail.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {highlightsList.map((highlight, index) => (
            <div
              key={index}
              className="border-2 flex flex-col gap-2 rounded-lg p-4"
            >
              <BookmarkIcon aria-hidden="true" className="h-6 w-6 bg-blue-500 rounded-full text-white p-1"/> 
              {/* <img src={highlight.icon} alt="Highlight Icon" className="" /> */}
              <h4 className="text-white">{highlight.title}</h4>
              <p className="text-sm text-slate-300 mb-4 tracking-wide">
                {highlight.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
