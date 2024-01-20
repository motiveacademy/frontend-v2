"use client";

import DefaultButton from "@/commons/components/button";
import VideoPlayer from "@/commons/components/video-player";

const OverviewCourse = ({ data }) => {
  return (
    <section className="flex gap-x-16 text-primary-green">
      <div className="w-full max-w-[65vw] space-y-2">
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <p className="leading-7 whitespace-pre-wrap">{data.summary}</p>
      </div>
      <div className="w-full max-w-[30vw] bg-white rounded-2xl p-2">
        <VideoPlayer src={data.trailer} />
        <div className="my-2">
          <p className="text-2xl font-bold">Introduction</p>
          <div className="flex justify-between items-center pt-2 border-t border-slate-200">
            <p className="font-lato ">Rp{data.normalPrice}</p>
            <DefaultButton onClick={() => {}}>Get Course</DefaultButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewCourse;
