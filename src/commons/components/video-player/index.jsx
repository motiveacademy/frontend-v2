const VideoPlayer = ({ src }) => {
  return (
    <div className="rounded-2xl shadow-2xl pt-4">
      <video controls className="w-full aspect-video rounded-2xl">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
