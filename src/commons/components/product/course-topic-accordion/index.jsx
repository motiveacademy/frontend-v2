"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faCircleCheck,
  faPlay,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircle,
  faSquareCaretRight,
} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

const topicNumStyling = [
  "bg-red-100",
  "bg-orange-100",
  "bg-yellow-100",
  "bg-lime-100",
  "bg-emerald-100",
  "bg-cyan-100",
  "bg-violet-100",
  "bg-fuchsia-100",
];

const CourseTopicAccordion = ({
  data,
  isTopicMain,
  eligible,
  courseID,
  watchedData,
}) => {
  const [openSubtopic, setOpenSubtopic] = useState(false);

  if (data.subtopic?.length > 0) {
    return (
      <div className="border-collapse select-none">
        <div
          className={`bg-slate-100 border px-4 py-8 flex justify-between gap-x-6 hover:cursor-pointer hover:bg-slate-300`}
          onClick={() => setOpenSubtopic(!openSubtopic)}
        >
          <div className="space-y-1">
            <p className="font-bold">{data.title}</p>
            <p className="flex items-end gap-x-2">
              <span className="text-primary-green">
                <FontAwesomeIcon icon={faTv} />
              </span>
              <span className="font-lato">{data.subtopic.length} videos</span>
            </p>
          </div>
          <div>
            <p
              className={` font-bold bg-primary-green text-primary-white rounded px-4 py-2`}
            >
              {openSubtopic ? (
                <span className="">
                  <FontAwesomeIcon icon={faChevronUp} />
                </span>
              ) : (
                <span className="">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              )}
            </p>
          </div>
        </div>

        <div
          className={`border-x px-4 pb-4 ${openSubtopic ? "block" : "hidden"}`}
        >
          {data.subtopic.map((topic) => (
            <CourseTopicAccordion
              key={topic.id}
              data={topic}
              isTopicMain={false}
              eligible={eligible}
              courseID={courseID}
              watchedData={watchedData}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link
        prefetch={false}
        href={eligible ? `/course/${courseID}/watch/${data.id}` : "#"}
      >
        <div
          className={`p-4 flex justify-between gap-x-4 hover:cursor-pointer hover:bg-slate-300 ${
            isTopicMain ? "bg-slate-100" : ""
          }`}
        >
          <div className="flex items-center gap-x-4">
            <p className="text-2xl">
              {eligible ? (
                watchedData?.includes(data.id) ? (
                  <FontAwesomeIcon icon={faCircleCheck} />
                ) : (
                  <FontAwesomeIcon icon={faCircle} />
                )
              ) : (
                <FontAwesomeIcon icon={faSquareCaretRight} />
              )}
            </p>
            <p className="font-bold">{data.title}</p>
          </div>
          {eligible && (
            <p
              className={`px-4 py-2 rounded border border-primary-green font-bold flex gap-x-2 items-center`}
            >
              <FontAwesomeIcon icon={faPlay} />
              <span>Play</span>
            </p>
          )}
        </div>
      </Link>
    );
  }
};

export default CourseTopicAccordion;
