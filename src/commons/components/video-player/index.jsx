const defaultEnd = () => {};

const VideoPlayer = ({ src, coverImg = "", autoplay = false, onEnded }) => {
  return (
    <video
      controls
      controlsList="nodownload"
      className="w-full aspect-video"
      autoPlay={autoplay}
      poster={coverImg}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
      onEnded={onEnded ?? defaultEnd}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
