import OverviewComponent from "../../../components/Dashboard/Teachers/Home/Overview";
import RecentActivitiesComponent from "../../../components/Dashboard/Teachers/Home/RecentActivities";
import UpcomingClassesComponent from "../../../components/Dashboard/Teachers/Home/UpcomingClasses";
import AnnouncementsComponent from "../../../components/Dashboard/Teachers/Home/Announcements";
import StudentPerformanceComponent from "../../../components/Dashboard/Teachers/Home/StudentPerformance";
import UpcomingEventsComponent from "../../../components/Dashboard/Teachers/Home/UpcomingEvents";
import QuickAccessComponent from "../../../components/Dashboard/Teachers/Home/QuickAccess";

const Home = () => {
  return (
    <div>
      <OverviewComponent />
      <RecentActivitiesComponent />
      <UpcomingClassesComponent />
      <AnnouncementsComponent />
      <StudentPerformanceComponent />
      <UpcomingEventsComponent />
      <QuickAccessComponent />
    </div>
  );
};

export default Home;
