import Widges from "../../../components/Dashboard/Admin/Home/Widges";
import Recent from "../../../components/Dashboard/Admin/Home/Recent";
import TopInsti from "../../../components/Dashboard/Admin/Home/TopInsti";
import Notification from "../../../components/Dashboard/Admin/Home/Notification";
import QuickAccess from "../../../components/Dashboard/Admin/Home/QuickAccess";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Widges />
      <Recent />
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <TopInsti />
        <Notification />
      </div>
      <QuickAccess />
    </div>
  );
};

export default Home;
