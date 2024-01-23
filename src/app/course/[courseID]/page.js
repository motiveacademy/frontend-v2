import { getCourse, getCourseTopic, getCourseTrailer } from "@/commons/services/course";
import DetailCourse from "@/sections/online-course/detail/DetailCourse";
import OverviewCourse from "@/sections/online-course/detail/OverviewCourse";

const CoursePage = async ({ params }) => {
  const courseID = params.courseID;
  const course = await getCourse(courseID);
  const courseTrailer = await getCourseTrailer(course.pid)
  const courseTopic = await getCourseTopic([course.pid, "topic"]);

  const courseData = {
    ...course,
    topic: courseTopic,
    trailer: courseTrailer
  }

  return (
    <main className="flex p-16 space-x-8">
      <DetailCourse data={courseData} />
      <OverviewCourse data={courseData} />
    </main>
  );
};

export default CoursePage;
