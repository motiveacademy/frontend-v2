import HeroSection from "@/sections/home/HeroSection";
import { getAllCourse } from "@/commons/services/course";
import { getAllLiveClasses } from "@/commons/services/live-class";

const Home = async () => {
  const courseList = await getAllCourse();
  const liveClass = await getAllLiveClasses();

  return (
    <main className="w-full h-full">
      <HeroSection
        latestCourse={courseList.at(-1)}
        latestLiveClass={liveClass.at(0)}
      />
    </main>
  );
};

export default Home;
