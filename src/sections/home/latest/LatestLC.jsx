"use client";

import DefaultButton from "@/commons/components/button";
import SuspenseImage from "@/commons/components/suspense-image";

const LatestLC = ({ data }) => {
  const today = new Date();

  return (
    <div className="w-fit py-6 pr-8 bg-gradient-to-b from-white to-white/60 space-y-4 shadow-xl rounded">
      <p className="w-fit px-8 py-2 bg-primary-yellow text-primary-green font-bold rounded-r">
        Live Class Terbaru
      </p>

      <div className="flex flex-col lg:flex-row pl-8 gap-4 text-primary-green">
        <div className="w-full md:w-[50%] md:max-w-sm">
          <SuspenseImage src={`live-class/${data.id}/poster.png`} />
        </div>
        <div className="space-y-2">
          <p className="text-xl font-bold">{data.name}</p>
          <p className="max-w-prose leading-7">
            {data.description.substring(0, 200)}...
          </p>
          {today < data.date ? (
            <DefaultButton isLink={true} href={data.registerLink}>
              Daftar
            </DefaultButton>
          ) : (
            <p className="font-bold italic text-sm">
              Tunggu Live Class kami selanjutnya!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestLC;
