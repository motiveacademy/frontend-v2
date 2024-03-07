import { getAllLiveClasses, getLiveClassTesti } from "@/commons/services/live-class";
import AboutLC from "@/sections/live-class/AboutLC";
import OnGoingLC from "@/sections/live-class/OnGoingLC";
import PreviousLC from "@/sections/live-class/PreviousLC";
import TestiLC from "@/sections/live-class/TestiLC";

const LiveClassPage = async () => {
  const liveClasses = await getAllLiveClasses();
  const lcTestiData = await getLiveClassTesti()

  return (
    <main>
      <AboutLC />
      <OnGoingLC data={liveClasses.at(0)} />
      <div className="flex flex-col-reverse md:flex-row px-4 md:px-16 pb-16 gap-16">
        <PreviousLC lcList={liveClasses} />
        <TestiLC testiList={lcTestiData.testiList} />
      </div>
    </main>
  );
};

export default LiveClassPage;
