"use client";

import { Suspense } from "react";
import VideoPlayer from "../video-player";

const FallbackVideo = () => {
  return (
    <div className="animate-pulse min-h-[10em] h-full w-full bg-slate-100 rounded"></div>
  );
};

const SuspenseVideo = ({ src, onEnded }) => {
  return (
    <Suspense fallback={<FallbackVideo />}>
      <VideoPlayer src={src} onEnded={onEnded} />
    </Suspense>
  );
};

export default SuspenseVideo;
