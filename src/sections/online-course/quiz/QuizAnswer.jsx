"use client";

import CourseSummary from "../detail/CourseSummary";
import DefaultButton from "@/commons/components/button";
import {
  CorrectAnswer,
  OtherAnswer,
  YourAnswerCorect,
  YourAnswerWrong,
} from "./Answer";
import DOMAIN from "@/commons/utils/environment";
import { useAuth } from "@/commons/contexts/auth";
import { useState } from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuizAnswer = ({ courseData, answerData, quizData }) => {
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  const correctAns = answerData.filter((data) => data.isCorrect);
  const scorePercentage = Math.round(
    (correctAns.length / answerData.length) * 100
  );

  const retakeQuiz = async () => {
    setLoading(true)

    const retakeData = {
      userID: auth.uid,
      courseID: courseData.pid,
      quizID: quizData.id,
    };

    const res = await fetch(`${DOMAIN}/api/quiz`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(retakeData),
    });

    const data = await res.json()
    if (data.status === "OK") {
      window.location.reload()
    }
  };

  return (
    <section className="w-full">
      <div className="w-full max-h-[75vh] px-16 py-8 overflow-y-scroll space-y-8 text-primary-green">
        <h1 className="text-xl font-bold">Quiz: {quizData.name}</h1>
        <div className="flex flex-col text-center items-center space-y-4">
          <h2 className="text-xl font-bold">Your Score</h2>
          <p className="text-4xl font-bold font-lato border shadow-md shadow-slate-300 p-6 rounded-full w-fit">
            {scorePercentage}
          </p>
          <p>
            {correctAns.length}/{answerData.length} answer correct
          </p>
        </div>

        <div className="flex flex-col gap-y-8">
          {answerData.map((data) => (
            <div key={data.questionItem.id} className="space-y-4">
              <div className="font-bold flex gap-x-2">
                <p className="font-lato">{data.questionItem.questionNumber}.</p>
                <p>{data.questionItem.question}</p>
              </div>
              <div className="space-y-2 text-black">
                {data.questionItem.options.map((item, idx) => {
                  if (data.isCorrect) {
                    if (item.correct) {
                      return (
                        <YourAnswerCorect answer={item.answer} key={idx} />
                      );
                    } else {
                      return <OtherAnswer answer={item.answer} key={idx} />;
                    }
                  } else {
                    if (item.correct) {
                      return <CorrectAnswer answer={item.answer} key={idx} />;
                    } else if (item.answer === data.userAnswer) {
                      return <YourAnswerWrong answer={item.answer} key={idx} />;
                    } else {
                      return <OtherAnswer answer={item.answer} key={idx} />;
                    }
                  }
                })}
              </div>
            </div>
          ))}
        </div>

        {scorePercentage < 100 ? (
          loading ? (
            <FontAwesomeIcon icon={faCircleNotch} spin />
          ) : (
            <DefaultButton onClick={retakeQuiz}>Retake Quiz</DefaultButton>
          )
        ) : (
          <></>
        )}
      </div>
      <CourseSummary courseData={courseData} />
    </section>
  );
};

export default QuizAnswer;
