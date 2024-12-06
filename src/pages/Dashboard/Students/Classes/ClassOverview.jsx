import CardLinks from "../../../../styledComponents/CardLinks";
import TitleComponent from "../../../../styledComponents/TitleComponent";
import { TbMathSymbols } from "react-icons/tb";
import { FaSwatchbook, FaTrophy } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";
import { GiPlantRoots, GiGreatWarTank, GiWorld } from "react-icons/gi";

const classesOverviewData = [
  {
    id: 0,
    icon: <TbMathSymbols />,
    link_text: "Mathematics",
    link_url: "",
  },
  {
    id: 1,
    icon: <FaSwatchbook />,
    link_text: "English",
    link_url: "",
  },
  {
    id: 2,
    icon: <FaTrophy />,
    link_text: "Physics",
    link_url: "",
  },
  {
    id: 3,
    icon: <GiChemicalDrop />,
    link_text: "Chemistry",
    link_url: "",
  },
  {
    id: 4,
    icon: <GiPlantRoots />,
    link_text: "Biology",
    link_url: "",
  },
  {
    id: 5,
    icon: <GiGreatWarTank />,
    link_text: "History",
    link_url: "",
  },
  {
    id: 6,
    icon: <GiWorld />,
    link_text: "Geography",
    link_url: "",
  },
];

const ClassOverview = () => {
  return (
    <>
      <TitleComponent title="Classes Overview" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {classesOverviewData.map((data) => (
          <CardLinks
            key={data.id}
            icon={data.icon}
            link_text={data.link_text}
            link_url={data.link_url}
          />
        ))}
      </div>
    </>
  );
};

export default ClassOverview;
