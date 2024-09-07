import { useState } from "react";

const faqList = [
  {
    title: "How do I contact customer support if I have a question or isssue?",
    content:
      "You can reach our customer support team by emailing support@email.com or calling our toll-free number. We're here to assist you promptly.",
  },
  {
    title: "Can I return the product if it doesn't meet my expectations?",
    content:
      "Absolutely! We offer a hassle-free return policy. If you're not completely satisfied, you can return the product within [number of days] days for a full refund or exchange.",
  },
  {
    title: "What makes your product stand out from others in the market?",
    content:
      "Our product distinguishes itself through its adaptability, durability, and innovative features. We prioritize user satisfaction and continually strive to exceed expectations in every aspect.",
  },
  {
    title: "Is there a warrently on the product, and what does it cover?",
    content:
      "Yes, our product comes with a [length of warranty] warranty. It covers defects in materials and workmanship. If you encounter any issues covered by the warranty, please contact our customer support for assistance.",
  },
];

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className="w-11/12 lg:w-3/4 py-8 lg:py-20 border-b-2">
      <div className="w-full lg:w-2/3 mx-auto">
        <h2 className="text-center text-2xl font-semibold tracking-wider">
          Frequently asked questions
        </h2>
      </div>
      <div>
        {faqList.map((faq, index) => (
          <div key={index}>
            <h3
              className="text-lg font-medium cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {faq.title}
            </h3>
            {isOpen === index && (
              <p className="mt-2 text-gray-600">{faq.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
