import Image1 from "../../assets/images/img1.jpg";
import Image2 from "../../assets/images/img2.jpg";
import Image3 from "../../assets/images/img3.jpg";
import Image4 from "../../assets/images/img4.jpg";
import Image5 from "../../assets/images/img5.jpg";
import Image6 from "../../assets/images/img6.jpg";
import Logo1 from "../../assets/images/logo1.svg";
import Logo2 from "../../assets/images/logo2.svg";
import Logo3 from "../../assets/images/logo3.svg";
import Logo4 from "../../assets/images/logo4.svg";
import Logo5 from "../../assets/images/logo5.svg";
import Logo6 from "../../assets/images/logo6.svg";

const testimonialList = [
  {
    name: "Remy Sharp",
    designation: "Senior Engineer",
    image: Image1,
    logo: Logo1,
    testimonial:
      "I absolutely love how versatile this product is! Whether I'm tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.",
  },
  {
    name: "Travis Howard",
    designation: "Lead Product Designer",
    image: Image2,
    logo: Logo2,
    testimonial:
      "One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It's reassuring to know that they stand firmly behind their product.",
  },
  {
    name: "Cindy Baker",
    designation: "CTO",
    image: Image3,
    logo: Logo3,
    testimonial:
      "The level of simplicity and user-friendliness in this product has significantly simplified my life. I appreciate the creators for delivering a solution that not only meets but exceeds user expectations.",
  },
  {
    name: "Julia Stewart",
    designation: "Senior Engineer",
    image: Image4,
    logo: Logo4,
    testimonial:
      "I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it's evident that the creators focused on delivering a premium experience.",
  },
  {
    name: "John Smith",
    designation: "Product Designer",
    image: Image5,
    logo: Logo5,
    testimonial:
      "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
  },
  {
    name: "Daniel Wolf",
    designation: "CDO",
    image: Image6,
    logo: Logo6,
    testimonial:
      "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
  },
];

const Testimonials = () => {
  return (
    <div className="w-11/12 lg:w-3/4 py-8 lg:py-20">
      <div className="w-full lg:w-2/3 mx-auto">
        <h2 className="text-center text-2xl font-semibold tracking-wider">Testimonials</h2>
        <p className="text-center py-2 text-gray-500">
          See what our customers love about our products. Discover how we excel
          in efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {testimonialList.map((testimonial, index) => (
          <div key={index} className="min-h-52 bg-slate-50 border-2 flex flex-col justify-between rounded-lg p-4">
            <p className="text-sm text-gray-500 mb-4 tracking-wide">{testimonial.testimonial}</p>
            <div className="w-full flex justify-between gap-1">
              <div className="w-full flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt="Testimonial Image"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.designation}</p>
                </div>
              </div>
              <img src={testimonial.logo} alt="Testimonial Logo" className="w-16 h-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
