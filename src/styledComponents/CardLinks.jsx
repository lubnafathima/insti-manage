import { Link } from "react-router-dom";

const CardLinks = ({ icon, link_text, link_url }) => {
  return (
    <Link
      to={link_url}
      className="w-full min-h-40 flex flex-col justify-center items-center text-center gap-4 p-2 rounded-md border shadow-sm bg-[#0A66C2] text-white hover:bg-[#3785d3] transition-all duration-300 ease-in-out"
    >
      {icon && (
        <p className="text-3xl text-[#0A66C2] bg-white text-center p-3 rounded-full">
          {icon}
        </p>
      )}
      <p className="text-md">{link_text}</p>
    </Link>
  );
};

export default CardLinks;
