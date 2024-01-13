"use client"

import LiveClassBox from "@/commons/components/product/live-class-box"

const AllLiveClassSection = ({ lcList }) => {
  return <section className="bg-primary-green text-primary-white space-y-6 p-16">
    <div className="space-y-2">
      <h2 className="text-2xl font-bold">
        Join Motive Live Class
      </h2>
      <h3 className="text-lg">along with more than 30 organizations!</h3>
    </div>

    <div className="flex gap-x-8">
      {lcList.map(lc => <LiveClassBox data={lc} key={lc.id} />)}
    </div>
  </section>
}

export default AllLiveClassSection