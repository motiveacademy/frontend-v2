const defaultEnd = () => {};

const VideoPlayer = ({ src, onEnded }) => {
  return (
    <video
      controls
      className="w-full aspect-video"
      onEnded={onEnded ?? defaultEnd}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
