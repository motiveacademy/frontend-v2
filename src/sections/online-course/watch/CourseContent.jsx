import CourseTopicAccordion from "@/commons/components/product/course-topic-accordion";

const CourseContent = ({ courseTopic, courseID }) => {
  return (
    <section className="text-primary-green">
      <div>
        <h2 className="text-xl mb-2 p-4 font-bold">Course Content</h2>
        {courseTopic.map((topic) => (
          <CourseTopicAccordion
            key={topic.id}
            data={topic}
            isTopicMain={true}
            eligible={true}
            courseID={courseID}
          />
        ))}
      </div>
    </section>
  );
};

export default CourseContent;
