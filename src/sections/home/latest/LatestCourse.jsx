"use client";

import DefaultButton from "@/commons/components/button";
import SuspenseImage from "@/commons/components/suspense-image";

const LatestCourse = ({
  data
}) => {

  return (
    <div
      className="w-fit py-6 pr-8 bg-gradient-to-b from-white to-white/60 space-y-4 shadow-xl rounded"
    >
      <p className="w-fit px-8 py-2 bg-primary-yellow text-primary-green font-bold rounded-r">
        Course Terbaru
      </p>

      <div className="max-w-sm pl-8 space-y-4">
        <div>
          <SuspenseImage src={`course/${data.pid}/cover.png`} />
        </div>

        <p className="text-xl text-primary-green font-bold">{data.name}</p>
        <div className="space-y-2">
          <p className="max-w-prose leading-7">{data.description.substring(0, 200)}...</p>

          <p className="text-xl text-primary-green font-bold font-lato">
            Rp{data.normalPrice}
          </p>
          <DefaultButton isLink={true} href={`/course/${data.id}`}>Lihat Detail</DefaultButton>
        </div>

      </div>
    </div>
  );
};

export default LatestCourse;
