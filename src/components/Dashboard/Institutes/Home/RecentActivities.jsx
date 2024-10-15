import TitleComponent from "../../../../styledComponents/TitleComponent";
import ButtonFilled from "../../../../styledComponents/ButtonFilled";
import InputComponent from "../../../../styledComponents/InputComponent";

const RecentActivities = () => {
  return (
    <div className="w-full">
      <TitleComponent title="Recent Activities" />
      <div className="w-full flex gap-2 mb-4">
        <ButtonFilled text="Filter by Department" />
        <ButtonFilled text="Filter by Action Type" />
      </div>
      <InputComponent placeholder="Search by department, date or status" />
      <div></div>
    </div>
  );
};

export default RecentActivities;
