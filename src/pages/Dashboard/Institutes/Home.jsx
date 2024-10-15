import LeftHomeSection from "../../../components/Dashboard/Institutes/Home/LeftHomeSection";
import RightHomeSection from "../../../components/Dashboard/Institutes/Home/RightHomeSection";

const Home = () => {
  return (
    <div className="flex gap-4 w-full">
      <LeftHomeSection />
      <RightHomeSection />
    </div>
  )
}

export default Home
