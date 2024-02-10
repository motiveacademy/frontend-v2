import VideoPlayer from "@/commons/components/video-player";

const WatchLC = ({ data }) => {
  return (
    <section className="w-full max-w-[70vw] space-y-8">
      <div className="rounded">
        <VideoPlayer src={data.recordLink} />
      </div>

      <div className="p-4 text-primary-green rounded-lg border space-y-4">
        <div className="space-y-2">
          <p className="w-fit bg-primary-yellow px-2 py-1 rounded font-bold text-sm">
            {`${new Intl.DateTimeFormat("id-ID", { month: "long" }).format(
              data.date
            )} ${data.date.getUTCFullYear()}`}
          </p>
          <h1 className="font-bold text-2xl">{data.name}</h1>
        </div>

        <p className="leading-7">{data.description}</p>

        <div className="">
          <p className="font-bold">
            Terima kasih kepada organisasi berikut yang hadir dalam Live Class
            ini!
          </p>
          {data.orgAudience.map((org) => (
            <p key={org}>- {org}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchLC;
