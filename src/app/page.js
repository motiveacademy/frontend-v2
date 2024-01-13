import HeroSection from "@/sections/home/HeroSection";
import { getAllCourse } from "@/commons/services/course";
import { getAllLiveClasses } from "@/commons/services/live-class";
import AllCourseSection from "@/sections/home/AllCourseSection";
import AllLiveClassSection from "@/sections/home/AllLiveClassSection";
import BookSection from "@/sections/home/BookSection";

const Home = async () => {
  const courses = await getAllCourse();
  const liveClasses = await getAllLiveClasses();

  return (
    <main className="w-full h-full">
      <HeroSection
        latestCourse={courses.at(-1)}
        latestLiveClass={liveClasses.at(0)}
      />

      <AllCourseSection courseList={courses} />
      <AllLiveClassSection lcList={liveClasses} />
      <BookSection />
    </main>
  );
};

export default Home;
