import { getDetailLiveClass } from "@/commons/services/live-class";
import DonationLC from "@/sections/live-class/donation/DonationLC";
import WatchLC from "@/sections/live-class/watch/WatchLC";

const WatchLiveClassPage = async ({ params }) => {
  const liveClassID = params.liveClassID;
  const liveClass = await getDetailLiveClass(liveClassID);

  return (
    <main className="px-16 py-8 flex justify-between">
      <WatchLC data={liveClass} />
      <DonationLC data={liveClass} />
    </main>
  );
};

export default WatchLiveClassPage;
