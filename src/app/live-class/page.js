import { getAllLiveClasses } from "@/commons/services/live-class";
import AboutLC from "@/sections/live-class/AboutLC";
import OnGoingLC from "@/sections/live-class/OnGoingLC";

const LiveClassPage = async () => {
  const liveClasses = await getAllLiveClasses();

  return <main>
    <AboutLC />
    <OnGoingLC data={liveClasses.at(-1)} />
  </main>
}

export default LiveClassPage