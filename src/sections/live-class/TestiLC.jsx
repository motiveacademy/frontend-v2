"use client";

import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const TestiLC = ({ testiList }) => {
  const [testiIdx, setTestiIdx] = useState(0);

  // useEffect(() => {
  //   const changeTesti = () => {
  //     if (testiIdx === testiList.length - 1) {
  //       setTestiIdx(0);
  //     } else {
  //       setTestiIdx(testiIdx + 1);
  //     }
  //   };

  //   setInterval(changeTesti, 5000);

  //   return () => {
  //     clearInterval(changeTesti);
  //   };
  // });

  return (
    <section className="text-primary-green space-y-4 md:max-w-[20vw]">
      <h2 className="text-xl font-bold">
        <span className="text-lg mr-2">
          <FontAwesomeIcon icon={faFeather} />
        </span>
        Testimoni
      </h2>
      <div className="bg-slate-200 flex flex-col p-4 rounded space-y-4">
        <p className="italic">{testiList.at(testiIdx).testimoni}</p>
        <p>{`— ${testiList.at(testiIdx).name}, ${
          testiList.at(testiIdx).organization
        }`}</p>
      </div>
      <div className="flex gap-x-2 justify-center">
        {testiList.map((item, idx) => {
          if (testiIdx === idx) {
            return (
              <div className="h-[1em] w-[1em] rounded-full bg-primary-green border border-primary-green" key={item.name}></div>
            );
          } else
            return (
              <div
                className="h-[1em] w-[1em] rounded-full bg-white hover:bg-primary-green border border-primary-green hover:cursor-pointer"
                onClick={() => setTestiIdx(idx)}
                key={item.name}
              ></div>
            );
        })}
      </div>
    </section>
  );
};

export default TestiLC;
