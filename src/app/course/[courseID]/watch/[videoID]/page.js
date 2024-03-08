import {
  findTopicById,
  getCourse,
  getCourseTopic,
  getCurrentVid,
  getWatchedData,
} from "@/commons/services/course";
import { getCurrentUser } from "@/commons/services/user/current";
import CourseContent from "@/sections/online-course/watch/CourseContent";
import WatchCourseHeader from "@/sections/online-course/watch/WatchCourseHeader";
import WatchCourse from "@/sections/online-course/watch/WatchCourse";
import { redirect } from "next/navigation";
import { getAllQuiz } from "@/commons/services/quiz";

const WatchCoursePage = async ({ params }) => {
  const userID = await getCurrentUser();
  const courseID = params.courseID;
  const topicID = params.videoID;

  if (userID === 403) {
    redirect(`/course/${courseID}`);
  }

  const course = await getCourse(courseID);
  const courseTopic = await getCourseTopic([course.pid, "topic"]);
  const currentTopic = await findTopicById(courseTopic, topicID);
  const userWatchedData = await getWatchedData(userID, course.pid);
  // const vidLink = await getCurrentVid("course-KBO", "apa-itu-berkah");

  const quizList = await getAllQuiz(course.pid);

  const courseData = {
    ...course,
    topic: courseTopic,
  };

  const topicData = {
    id: topicID,
    name: currentTopic?.title ?? "",
    videoLink: currentTopic.video,
  };

  const userData = {
    ...userWatchedData,
    userID,
  };

  return (
    <main className="md:flex w-full">
      <div className="w-full md:max-w-[75vw]">
        <WatchCourseHeader
          courseName={course.name}
          topicName={topicData.name}
        />
        <WatchCourse
          courseData={course}
          topicData={currentTopic}
          userData={userData}
        />
      </div>
      <div className="flex flex-col">
        <CourseContent
          courseData={courseData}
          watchedData={userWatchedData.completedVideo}
          quizData={quizList}
        />
      </div>
    </main>
  );
};

export default WatchCoursePage;
