import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CourseSummary from "../detail/CourseSummary";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";

const QuizAnswer = ({ courseData, answerData, quizData }) => {
  return (
    <section className="w-full">
      <div className="w-full max-h-[75vh] px-16 py-8 overflow-y-scroll space-y-8 text-primary-green">
        <h1 className="text-xl font-bold">Jawaban Quiz: {quizData.title}</h1>

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
                        <p
                          className="rounded bg-green-100 border border-green-300 p-2 flex justify-between items-center"
                          key={idx}
                        >
                          <span>{item.answer}</span>
                          <span className="text-primary-green">
                            <FontAwesomeIcon icon={faCircleCheck} />
                          </span>
                        </p>
                      );
                    } else {
                      return (
                        <p
                          className="rounded bg-blue-100 border border-blue-300 p-2"
                          key={idx}
                        >
                          {item.answer}
                        </p>
                      );
                    }
                  } else {
                    if (item.correct) {
                      return (
                        <p
                          className="rounded bg-green-100 border border-green-300 p-2 flex justify-between items-center"
                          key={idx}
                        >
                          <span>{item.answer}</span>
                          <span className="text-primary-green">
                            <FontAwesomeIcon icon={faCircleCheck} />
                          </span>
                        </p>
                      );
                    } else if (item.answer === data.userAnswer) {
                      return (
                        <p
                          className="rounded bg-red-100 border border-red-300 p-2 flex justify-between items-center"
                          key={idx}
                        >
                          <span>{item.answer}</span>
                          <span className="text-red-500">
                            <FontAwesomeIcon icon={faCircleXmark} />
                          </span>
                        </p>
                      );
                    } else {
                      return (
                        <p
                          className="rounded bg-blue-100 border border-blue-300 p-2"
                          key={idx}
                        >
                          {item.answer}
                        </p>
                      );
                    }
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CourseSummary courseData={courseData} />
    </section>
  );
};

export default QuizAnswer;
