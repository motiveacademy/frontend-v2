"use client";

import { getStaticPicture } from "@/commons/services/static-info";
import { Suspense } from "react";

const AsyncImage = async ({ src, alt }) => {
  return <img src={await getStaticPicture(src)} alt={alt} />;
};

const FallbackImage = () => {
  return <div className="animate-pulse min-h-[10em] h-full w-full bg-slate-100 rounded"></div>;
};

const SuspenseImage = ({ src, alt }) => {
  return (
    <Suspense fallback={<FallbackImage />}>
      <AsyncImage src={src} alt={alt} />
    </Suspense>
  );
};

export default SuspenseImage;
