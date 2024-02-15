import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WatchCourseHeader = ({ courseName, topicName }) => {
  return (
    <section className="w-full px-8 py-4 md:flex items-center gap-2 space-y-2 md:space-y-0 bg-slate-900 text-primary-white border-b border-slate-600">
      <div className="flex items-center gap-x-2">
        <p className="md:text-xl">
          <FontAwesomeIcon icon={faCirclePlay} />
        </p>
        <p className="font-bold">{topicName}</p>
      </div>

      <p className="text-slate-300 hidden md:block">|</p>
      <p> {courseName}</p>
    </section>
  );
};

export default WatchCourseHeader;
