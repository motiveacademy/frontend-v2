"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PromotionBox = ({
  price,
  label,
  title,
  content,
  image,
  alt,
  readMore,
}) => {
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    setSlideUp(true);
  });

  return (
    <div
      className={`transition-all duration-1000 ease-in transform w-fit py-6 pr-8 bg-gradient-to-b from-white to-white/60 space-y-4 shadow-xl rounded ${
        slideUp ? "translate-y-0 opacity-1" : "translate-y-full opacity-0"
      }`}
    >
      <p className="w-fit px-8 py-2 bg-primary-green text-primary-white font-bold rounded-r">
        {label}
      </p>

      <div className="max-w-sm pl-8 space-y-4">
        <img src={image} alt={alt} />

        <p className="text-xl text-primary-green font-bold">{title}</p>
        <div className="space-y-2">
          <p className="text-justify">{content.substring(0, 100)}...</p>
          <Link
            className="block underline hover:cursor-pointer hover:text-primary-green"
            href={readMore}
          >
            Read More
          </Link>
        </div>

        <p className="text-xl text-primary-green font-bold font-lato">
          Rp{price}
        </p>
      </div>
    </div>
  );
};

export default PromotionBox;
