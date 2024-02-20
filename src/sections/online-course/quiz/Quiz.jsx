"use client";

import { useState } from "react";
import CourseSummary from "../detail/CourseSummary";
import DefaultButton from "@/commons/components/button";
import DOMAIN from "@/commons/utils/environment";
import { hardRedirect } from "@/commons/services/redirect";

const defaultAnswer = (questionList) => {
  const ans = [];
  for (let item of questionList) {
    ans.push({
      correctAnswer: item.options.find((ans) => ans.correct === true).answer,
      isCorrect: false,
      questionItem: item,
      userAnswer: "",
    });
  }

  return ans;
};

const Quiz = ({ courseData, quizData, userID }) => {
  const [loading, setLoading] = useState(false);
  const [choosenAnswer, setChoosenAnswer] = useState(
    defaultAnswer(quizData.questions)
  );

  const changeAnswer = (e, qNum, ans) => {
    const checked = e.target.checked;
    if (checked) {
      const newChosenAnswer = [...choosenAnswer];
      newChosenAnswer[qNum - 1].isCorrect = e.target.value === "true";
      newChosenAnswer[qNum - 1].userAnswer = ans;
      setChoosenAnswer(newChosenAnswer);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`${DOMAIN}/api/quiz/answer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answerData: choosenAnswer,
        quizID: quizData.id,
        courseID: courseData.pid,
        userID: userID,
      }),
    });

    if (res.ok) {
      hardRedirect(`/course/${courseData.id}/quiz/${quizData.id}`)
    }
  };

  return (
    <section className="w-full">
      <div className="w-full max-h-[75vh] px-16 py-8 overflow-y-scroll space-y-8 text-primary-green">
        <h1 className="text-xl font-bold">Quiz: {quizData.title}</h1>

        <div className="flex flex-col gap-y-6">
          {quizData.questions.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="font-bold flex gap-x-2">
                <p className="font-lato">{item.questionNumber}.</p>
                <p>{item.question}</p>
              </div>
              <form className="flex flex-col gap-y-2 text-black">
                {item.options.map((ans, idx) => (
                  <label className="space-x-2" key={idx}>
                    <input
                      type="radio"
                      id={`${item.questionNumber}-${idx}`}
                      name={item.questionNumber}
                      value={ans.correct}
                      onChange={(e) =>
                        changeAnswer(e, item.questionNumber, ans.answer)
                      }
                    />
                    <span>{ans.answer}</span>
                  </label>
                ))}
              </form>
            </div>
          ))}
        </div>

        {loading ? (
          <p className="font-bold">Please wait. Submitting your answer...</p>
        ) : (
          <DefaultButton onClick={submitHandler}>Submit</DefaultButton>
        )}
      </div>

      <CourseSummary courseData={courseData} />
    </section>
  );
};

export default Quiz;
