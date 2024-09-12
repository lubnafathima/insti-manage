import Widges from "../../components/Dashboard/Home/Widges";
import Recent from "../../components/Dashboard/Home/Recent";
import TopInsti from "../../components/Dashboard/Home/TopInsti";
import Notification from "../../components/Dashboard/Home/Notification";
import QuickAccess from "../../components/Dashboard/Home/QuickAccess";

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
