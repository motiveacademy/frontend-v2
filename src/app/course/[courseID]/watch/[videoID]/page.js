import {
  getCourse,
  getCourseTopic,
  getCurrentTopic,
} from "@/commons/services/course";
import { getUser } from "@/commons/services/user";
import { getCurrentUser } from "@/commons/services/user/current";
import CourseContent from "@/sections/online-course/watch/CourseContent";
import WatchCourseHeader from "@/sections/online-course/watch/WatchCourseHeader";
import WatchCourse from "@/sections/online-course/watch/WatchCourse";
import { redirect } from "next/navigation";

const WatchCoursePage = async ({ params }) => {
  const userID = await getCurrentUser();
  const courseID = params.courseID;
  const topicID = params.videoID;

  let userData = null;
  if (userID !== 403) {
    userData = await getUser(userID);
  } else {
    redirect(`/course/${courseID}`);
  }

  const course = await getCourse(courseID);
  const courseTopic = await getCourseTopic([course.pid, "topic"]);
  const currentVid = await getCurrentTopic(course.pid, "apa-itu-berkah");

  return (
    <main className="flex w-full">
      <div className="w-full max-w-[75vw]">
        <WatchCourseHeader
          courseName={course.name}
          topicName={"Apa Itu Berkah ?"}
        />
        <WatchCourse courseData={course} videoLink={currentVid} />
      </div>
      <CourseContent courseID={courseID} courseTopic={courseTopic} />
    </main>
  );
};

export default WatchCoursePage;
