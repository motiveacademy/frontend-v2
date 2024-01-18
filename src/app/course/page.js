import { getAllCourse } from "@/commons/services/course";
import AllCourse from "@/sections/online-course/AllCourse";

const OnlineCoursePage = async () => {
  const courses = await getAllCourse();

  return <main className="p-16">
    <AllCourse courseList={courses} />
  </main>;
};

export default OnlineCoursePage;
