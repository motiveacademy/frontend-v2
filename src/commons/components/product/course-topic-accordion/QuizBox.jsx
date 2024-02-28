import { faFile } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const QuizBox = ({ data, courseID }) => {
  return (
    <Link prefetch={false} href={`/course/${courseID}/quiz/${data.id}`}>
      <div className="p-4 flex items-center gap-x-4 hover:cursor-pointer hover:bg-slate-300">
        <p className="text-2xl">
          <FontAwesomeIcon icon={faFile} />
        </p>
        <p className="font-bold">Quiz: {data.name}</p>
      </div>
    </Link>
  );
};

export default QuizBox
