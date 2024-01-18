import VideoPlayer from "@/commons/components/video-player";

const OverviewCourse = ({ data }) => {
  return (
    <section className="w-full max-w-[40vw] space-y-8">
      <VideoPlayer src={data.trailer} />
    </section>
  );
};

export default OverviewCourse;
