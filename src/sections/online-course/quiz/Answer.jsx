import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const YourAnswerCorect = ({ answer }) => {
  return (
    <div className="rounded bg-green-100 border border-emerald-300 p-2 flex justify-between items-center">
      <p>{answer}</p>
      <p className="text-emerald-500 flex gap-x-2 items-center">
        <span className="w-max bg-emerald-500 text-white rounded-full px-2 py-0.5 text-nowrap">
          Your Answer
        </span>
        <span className="text-lg">
          <FontAwesomeIcon icon={faCircleCheck} />
        </span>
      </p>
    </div>
  );
};

export const OtherAnswer = ({ answer }) => {
  return <p className="rounded border border-slate-300 p-2">{answer}</p>;
};

export const YourAnswerWrong = ({ answer }) => {
  return (
    <div className="rounded bg-red-100 border border-red-300 p-2 flex justify-between items-center">
      <p>{answer}</p>
      <p className="text-red-500 flex gap-x-2 items-center">
        <span className="w-max bg-red-500 text-white rounded-full px-2 py-0.5">
          Your Answer
        </span>
        <span className="text-lg">
          <FontAwesomeIcon icon={faCircleXmark} />
        </span>
      </p>
    </div>
  );
};

export const CorrectAnswer = ({ answer }) => {
  return (
    <div className="rounded bg-emerald-100 border border-emerald-300 p-2 flex justify-between items-center">
      <p>{answer}</p>
      <div className="text-emerald-500 flex gap-x-2 items-center">
        <p className="w-max bg-emerald-500 text-white rounded-full px-2 py-0.5 text-nowrap">
          Correct Answer
        </p>
        <p className="text-lg">
          <FontAwesomeIcon icon={faCircleCheck} />
        </p>
      </div>
    </div>
  );
};
