import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WatchCourseHeader = ({ courseName, topicName }) => {
  return (
    <section className="w-full px-8 py-4 flex items-center gap-x-2 bg-slate-900 text-primary-white border-b border-slate-600">
      <p className="text-xl">
        <FontAwesomeIcon icon={faCirclePlay} />
      </p>
      <p className="font-bold">{topicName}</p>
      <p className="text-slate-300">|</p>
      <p> {courseName}</p>
    </section>
  );
};

export default WatchCourseHeader;
