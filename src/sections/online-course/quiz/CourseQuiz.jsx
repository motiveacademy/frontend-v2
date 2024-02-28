import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const CourseQuiz = ({ courseID, quizData }) => {
  return (
    <section className="text-primary-green">
      <div>
        <div className="flex justify-between items-center mb-2 p-4">
          <h2 className="font-bold text-xl">Course Quiz</h2>
        </div>
        <div>
          {quizData.map((quiz) => (
            <Link
              prefetch={false}
              key={quiz.id}
              href={`/course/${courseID}/quiz/${quiz.id}`}
            >
              <div className="bg-slate-100 border p-4 flex items-center justify-between gap-x-6 hover:cursor-pointer hover:bg-slate-300">
                <p className="font-bold">{quiz.title}</p>
                <p className="px-4 py-2 rounded border border-primary-green font-bold flex gap-x-2 items-center">
                  <FontAwesomeIcon icon={faPencil} />
                  <span>Open</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseQuiz;
