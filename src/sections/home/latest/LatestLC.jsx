"use client";

import DefaultButton from '@/commons/components/button'
import SuspenseImage from '@/commons/components/suspense-image'

const LatestLC = ({ data }) => {
  return <div
    className="w-fit py-6 pr-8 bg-gradient-to-b from-white to-white/60 space-y-4 shadow-xl rounded"
  >
    <p className="w-fit px-8 py-2 bg-primary-yellow text-primary-green font-bold rounded-r">
      Live Class Terbaru
    </p>

    <div className="flex pl-8 gap-x-4">
      <div className='w-[50%] max-w-sm'>
        <SuspenseImage src={`live-class/${data.id}/poster.png`} />
      </div>
      <div className="space-y-2">
        <p className="text-xl text-primary-green font-bold">{data.name}</p>
        <p className="max-w-prose leading-7">{data.description.substring(0, 200)}...</p>
        <DefaultButton isLink={true} href={`/live-class/${data.id}`}>Tonton Rekaman</DefaultButton>
      </div>
    </div>
  </div>
}

export default LatestLC