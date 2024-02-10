import {
  getCourse,
  getCourseTopic,
  getCourseTrailer,
  getLastWatched,
} from "@/commons/services/course";
import { getUser } from "@/commons/services/user";
import { getCurrentUser } from "@/commons/services/user/current";
import DetailCourse from "@/sections/online-course/detail/DetailCourse";
import OverviewCourse from "@/sections/online-course/detail/OverviewCourse";

const CoursePage = async ({ params }) => {
  const userID = await getCurrentUser();

  const courseID = params.courseID;
  const course = await getCourse(courseID);
  const courseTrailer = await getCourseTrailer(course.pid);
  const courseTopic = await getCourseTopic([course.pid, "topic"]);

  let userData = null;
  let lastWatched = null;
  
  if (userID !== 403) {
    userData = await getUser(userID);
    lastWatched = await getLastWatched(userID, course.pid);
  }

  const courseData = {
    ...course,
    topic: courseTopic,
    trailer: courseTrailer,
    lastWatched,
  };

  return (
    <main className="flex p-16 space-x-8">
      <DetailCourse data={courseData} userData={userData} />
      <OverviewCourse data={courseData} userData={userData} />
    </main>
  );
};

export default CoursePage;
