import CardLinks from "../../../../styledComponents/CardLinks";
import TitleComponent from "../../../../styledComponents/TitleComponent";

const assignmentsOverviewData = [
  {
    id: 0,
    link_text: "Attendance Overview",
    link_url: "attendance-overview",
  },
  {
    id: 1,
    link_text: "Attendance Record",
    link_url: "attendance-record",
  },
  {
    id: 2,
    link_text: "Attendance By Subject",
    link_url: "attendance-by-subject",
  },
  {
    id: 3,
    link_text: "Absence History",
    link_url: "absence-history",
  },
  {
    id: 4,
    link_text: "Attendance Warnings",
    link_url: "attendance-warnings",
  },
  {
    id: 5,
    link_text: "Attendance Analysis",
    link_url: "attendance-analysis",
  },
];

const Attendance = () => {
  return (
    <div>
      <TitleComponent title="Attendance Overview" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {assignmentsOverviewData.map((data) => (
          <CardLinks
            key={data.id}
            link_text={data.link_text}
            link_url={data.link_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Attendance;
