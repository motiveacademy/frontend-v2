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
  const quizList = await getAllQuiz(course.pid);
  const currentQuiz = quizList.find((quiz) => quiz.id === quizID);

  const currentQuizQuestions = await getQuiz(course.pid, quizID);
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
        <QuizHeader courseName={course.name} quizName={currentQuiz.name} />
        {quizAnswer ? (
          <QuizAnswer
            courseData={courseData}
            answerData={quizAnswer.answerItem}
            quizData={currentQuiz}
          />
        ) : (
          <Quiz
            courseData={courseData}
            quizData={currentQuiz}
            questionList={currentQuizQuestions}
            userID={userID}
          />
        )}
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
