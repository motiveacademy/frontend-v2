import { getAllCourse } from "@/commons/services/course";
import AllCourse from "@/sections/online-course/AllCourse";

const OnlineCoursePage = async () => {
  const courses = await getAllCourse();

  return <main className="p-8 md:p-16 min-h-screen">
    <AllCourse courseList={courses} />
  </main>;
};

export default OnlineCoursePage;
