"use client"

import CourseBox from "@/commons/components/product/course-box"

const AllCourseSection = ({ courseList }) => {
  return <section className="text-primary-green space-y-6 px-8 py-16 md:p-16">
    <div className="space-y-2">
      <h2 className="text-2xl text-primary-green font-bold">
        <span>Increase{" "}</span>
        <span className="bg-primary-yellow py-0.5 pl-2 pr-8">Your Skill</span>
      </h2>
      <h3 className="text-lg">with Motive Online Course</h3>
    </div>

    <div className="flex flex-col md:flex-row gap-8">
      {courseList.map(course => <CourseBox data={course} key={course.id} />)}
    </div>
  </section>
}

export default AllCourseSection