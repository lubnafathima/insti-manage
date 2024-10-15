import Overview from "./Overview";
import RecentActivities from "./RecentActivities";
import QuickAccess from "./QuickAccess";

const LeftHomeSection = () => {
  return (
    <div className="w-3/5">
      <Overview />
      <RecentActivities />
      <QuickAccess />
    </div>
  );
};

export default LeftHomeSection;
