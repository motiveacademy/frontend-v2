import CourseTopicAccordion from "@/commons/components/product/course-topic-accordion";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseContent = ({ courseData, watchedData, quizData }) => {
  return (
    <section className="text-primary-green">
      <div>
        <div className="flex justify-between items-center mb-2 p-4">
          <h2 className="font-bold text-xl">Course Content</h2>
          <div className="flex flex-col items-end has-tooltip">
            <p className="font-lato space-x-2 text-xl">
              <span>{(watchedData.length / courseData.totalVideo) * 100}%</span>
              <FontAwesomeIcon icon={faCircleNotch} />
            </p>
            <p className="font-lato text-nowrap tooltip bg-slate-900 text-white p-1 rounded text-xs -mb-8 text-end whitespace-nowrap">
              Finish {watchedData.length}/{courseData.totalVideo} videos
            </p>
          </div>
        </div>
        {courseData.topic.map((topic) => (
          <CourseTopicAccordion
            key={topic.id}
            data={topic}
            isTopicMain={true}
            eligible={true}
            courseID={courseData.id}
            watchedData={watchedData}
            quizData={quizData}
          />
        ))}
      </div>
    </section>
  );
};

export default CourseContent;
