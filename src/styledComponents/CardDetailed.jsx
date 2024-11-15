import { Link } from "react-router-dom";

const CardDetailed = ({ icon, title, item, link_url }) => {
  return (
    <Link
      to={link_url || "#"}
      className="w-full min-h-40 flex flex-col justify-center items-center text-center gap-4 p-2 rounded-md border shadow-sm bg-slate-200 hover:bg-slate-300 transition-all duration-300 ease-in-out"
    >
      {icon && (
        <p className="text-3xl text-slate-200 bg-[#0A66C2] text-center p-3 rounded-full">
          {icon}
        </p>
      )}
      <div>
        <h2 className="text-md font-bold my-2 text-center">{title}</h2>
        <ul className="text-base font-medium text-gray-600 text-left">
          {item &&
            item.map((text, index) => (
              <li key={index} className="mb-1 text-center">
                {text}
              </li>
            ))}
        </ul>
      </div>
    </Link>
  );
};

export default CardDetailed;
