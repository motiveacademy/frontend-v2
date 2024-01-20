import CourseTopicAccordion from "@/commons/components/product/course-topic-accordion";
import { faHourglassHalf } from "@fortawesome/free-regular-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DetailCourse = ({ data }) => {
  return (
    <section className="w-full max-w-[65vw] pr-16 text-primary-green space-y-8">
      {/* Last Watched */}
      <div className="space-y-2">
        <p>
          <span className="font-bold">Course </span>Statistics
        </p>

        <div className="flex gap-x-4">
          <div className="bg-slate-100 rounded-xl p-4">
            <p className="mb-2 text-blue-400">
              <FontAwesomeIcon icon={faVideo} />
            </p>
            <p className="text-xl font-bold">20</p>
            <p>videos</p>
          </div>

          <div className="bg-slate-100 rounded-xl p-4">
            <p className="mb-2 text-red-400">
              <FontAwesomeIcon icon={faHourglassHalf} />
            </p>
            <p className="text-xl font-bold">1 Hour</p>
            <p>total duration</p>
          </div>
        </div>
      </div>

      <div>
        <p>
          <span className="font-bold">Course </span>Content
        </p>

        <div>
          {data.topic.map((topic, idx) => (
            <CourseTopicAccordion data={topic} idx={idx} parentNum={null} key={topic.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailCourse;
