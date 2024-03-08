"use client";

import { getStaticPicture } from "@/commons/services/static-info";
import { Suspense } from "react";

const AsyncImage = async ({ src, alt }) => {
  return <img src={await getStaticPicture(src)} alt={alt} />;
};

const FallbackImage = () => {
  return <div className="animate-pulse min-w-[10em] min-h-[10em] h-full w-full bg-slate-300 rounded"></div>;
};

const SuspenseImage = ({ src, alt }) => {
  return (
    <Suspense fallback={<FallbackImage />}>
      <AsyncImage src={src} alt={alt} />
    </Suspense>
  );
};

export default SuspenseImage;
