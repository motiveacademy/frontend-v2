"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

const CourseTopicAccordion = ({ data, idx, parentNum }) => {
  const [openSubtopic, setOpenSubtopic] = useState(false);

  if (data.subtopic?.length > 0) {
    return (
      <div className="my-6">
        <div className="bg-slate-100 px-4 py-2 rounded flex justify-between">
          <div className="flex items-center gap-x-4">
            <p
              className={`px-4 py-2 rounded ${topicNumStyling[idx]} font-bold`}
            >
              {`${parentNum ?? ""}${data.topicNum}`}
            </p>
            <p className="font-bold">{data.title}</p>
          </div>
          <div>
            <p
              className={`px-4 py-2 rounded ${topicNumStyling[idx]} font-bold hover:bg-slate-300 hover:cursor-pointer`}
              onClick={() => setOpenSubtopic(!openSubtopic)}
            >
              {openSubtopic ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </p>
          </div>
        </div>

        <div className={`pl-4 ${openSubtopic ? "block" : "hidden"}`}>
          {data.subtopic.map((topic) => (
            <CourseTopicAccordion
              data={topic}
              idx={idx}
              parentNum={`${parentNum ?? ""}${data.topicNum}.`}
              key={topic.id}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="my-4 bg-slate-100 px-4 py-2 rounded flex justify-between">
        <div className="flex items-center gap-x-4">
          <p className={`px-4 py-2 rounded ${topicNumStyling[idx]} font-bold`}>
            {`${parentNum ?? ""}${data.topicNum}`}
          </p>
          <p className="font-bold">{data.title}</p>
        </div>
        <p
          className={`px-4 py-2 rounded ${topicNumStyling[idx]} font-bold flex gap-x-2 items-center hover:bg-slate-300 hover:cursor-pointer`}
        >
          <FontAwesomeIcon icon={faPlay} />
          <span>Play</span>
        </p>
      </div>
    );
  }
};

export default CourseTopicAccordion;
