"use client";

import { useEffect, useState } from "react";

import CourseTopicAccordion from "@/commons/components/product/course-topic-accordion";
import { faHourglassHalf } from "@fortawesome/free-regular-svg-icons";
import { faCirclePlay, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DefaultButton from "@/commons/components/button";

const DetailCourse = ({ data, userData }) => {
  const [eligible, setEligibile] = useState(false);
  useEffect(() => {
    if (userData?.availableProduct?.includes(data.pid)) {
      setEligibile(true);
    }
  }, []);

  return (
    <section className="w-full md:max-w-[65vw] md:pr-16 text-primary-green space-y-8">
      {eligible && (
        <div className="w-full flex flex-col md:flex-row gap-y-4 md:justify-between md:items-center bg-slate-100 rounded py-4 px-8">
          <div className="flex items-center space-x-4">
            <p className="text-2xl">
              <FontAwesomeIcon icon={faCirclePlay} />
            </p>
            <div>
              <p className="">Last Watched</p>
              <p className="text-xl font-bold">{userData.lastWatched.name}</p>
            </div>
          </div>
          <DefaultButton
            isLink={true}
            href={`/course/${data.id}/watch/${userData.lastWatched.id}`}
          >
            Continue Learning
          </DefaultButton>
        </div>
      )}

      <div className="w-full space-y-2">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p className="leading-7 whitespace-pre-wrap">{data.summary}</p>
      </div>

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

      <div className="space-y-2">
        <p>
          <span className="font-bold">Course </span>Content
        </p>

        <div>
          {data.topic.map((topic) => (
            <CourseTopicAccordion
              key={topic.id}
              data={topic}
              isTopicMain={true}
              eligible={eligible}
              courseID={data.id}
              watchedData={userData.completedVideo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailCourse;
