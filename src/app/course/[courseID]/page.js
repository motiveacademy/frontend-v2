import { getCourse, getCourseTrailer } from "@/commons/services/course";
import DetailCourse from "@/sections/online-course/detail/DetailCourse";

const CoursePage = async ({ params }) => {
  const courseID = params.courseID;
  const course = await getCourse(courseID);
  const courseTrailer = await getCourseTrailer(courseID)

  const courseData = {
    ...course,
    trailer: courseTrailer
  }

  return (
    <main className="flex">
      <DetailCourse data={course} />
    </main>
  );
};

export default CoursePage;
