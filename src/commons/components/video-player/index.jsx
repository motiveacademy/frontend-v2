const VideoPlayer = ({ src }) => {
  return (
    <div className="w-full bg-slate-900 px-16">
      <video controls className="w-full aspect-video">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
