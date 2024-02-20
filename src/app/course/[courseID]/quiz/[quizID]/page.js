import {
  getCourse,
  getCourseTopic,
  getWatchedData,
} from "@/commons/services/course";
import { getCurrentUser } from "@/commons/services/user/current";
import CourseContent from "@/sections/online-course/watch/CourseContent";
import { redirect } from "next/navigation";
import { getAllQuiz, getQuiz, getQuizStatus } from "@/commons/services/quiz";
import QuizHeader from "@/sections/online-course/quiz/QuizHeader";
import CourseQuiz from "@/sections/online-course/quiz/CourseQuiz";
import Quiz from "@/sections/online-course/quiz/Quiz";
import QuizAnswer from "@/sections/online-course/quiz/QuizAnswer";

const WatchCoursePage = async ({ params }) => {
  const userID = await getCurrentUser();
  const courseID = params.courseID;
  const quizID = params.quizID;

  if (userID === 403) {
    redirect(`/course/${courseID}`);
  }

  const course = await getCourse(courseID);
  const quizList = await getAllQuiz("COU001");
  const quizData = await getQuiz("COU001", quizID);
  const quizAnswer = await getQuizStatus(userID, course.pid, quizID);

  const courseTopic = await getCourseTopic([course.pid, "topic"]);
  const userWatchedData = await getWatchedData(userID, course.pid);

  const courseData = {
    ...course,
    topic: courseTopic,
  };

  return (
    <main className="md:flex w-full">
      <div className="w-full md:max-w-[75vw]">
        <QuizHeader courseName={course.name} quizName={quizData.title} />
        {quizAnswer ? (
          <QuizAnswer courseData={courseData} answerData={quizAnswer.answerItem} quizData={quizData} />
        ) : (
          <Quiz courseData={courseData} quizData={quizData} userID={userID} />
        )}
      </div>
      <div className="flex flex-col">
        <CourseContent
          courseData={courseData}
          watchedData={userWatchedData.completedVideo}
        />
        <CourseQuiz courseID={courseID} quizData={quizList} />
      </div>
    </main>
  );
};

export default WatchCoursePage;
