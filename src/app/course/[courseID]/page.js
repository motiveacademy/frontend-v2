import {
  getCourse,
  getCourseTopic,
  getCourseTrailer,
  getWatchedData,
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
  let userWatchData = null;
  
  if (userID !== 403) {
    userData = await getUser(userID);
    userWatchData = await getWatchedData(userID, course.pid);
  }

  const courseData = {
    ...course,
    topic: courseTopic,
    trailer: courseTrailer,
  };

  const userFullData = {
    ...userData,
    ...userWatchData
  }

  return (
    <main className="flex p-16 space-x-8">
      <DetailCourse data={courseData} userData={userFullData} />
      <OverviewCourse data={courseData} userData={userFullData} />
    </main>
  );
};

export default CoursePage;
