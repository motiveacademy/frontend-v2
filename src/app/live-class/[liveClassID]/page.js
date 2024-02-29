import { getDetailLiveClass } from "@/commons/services/live-class";
import DonationLC from "@/sections/live-class/donation/DonationLC";
import WatchLC from "@/sections/live-class/watch/WatchLC";

const WatchLiveClassPage = async ({ params }) => {
  const liveClassID = params.liveClassID;
  const liveClass = await getDetailLiveClass(liveClassID);

  return (
    <main className="px-16 py-8 flex flex-col md:flex-row md:justify-between gap-y-16">
      <WatchLC data={liveClass} />
      <DonationLC data={liveClass} />
    </main>
  );
};

export default WatchLiveClassPage;
