"use client";

import CourseBox from "@/commons/components/product/course-box";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllCourse = ({ courseList }) => {
  return (
    <section className="text-primary-green space-y-4">
      <h1 className="text-2xl font-bold">Online Course</h1>
      <div className="bg-primary-yellow flex gap-x-2 px-4 py-2 rounded flex items-center">
        <FontAwesomeIcon icon={faLightbulb} />
        <p>
          Tahukah kamu? Lebih dari <span className="font-bold">100 orang</span>{" "}
          telah belajar melalui Motive Online Course
        </p>
      </div>

      <div className="flex gap-8">
        {courseList.map((course) => (
          <CourseBox data={course} key={course.id} />
        ))}
      </div>
    </section>
  );
};

export default AllCourse;
