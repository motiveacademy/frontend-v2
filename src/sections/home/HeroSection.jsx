"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import LatestLC from "./latest/LatestLC";
import LatestCourse from "./latest/LatestCourse";

const BENEFITS = [
  "First in Indonesia",
  "Flexibility Learning",
  "Free Certificate",
];

const HeroSection = ({ latestCourse, latestLiveClass }) => {
  return (
    <section className="min-h-screen bg-[url('/bg/masjid-unsplash.jpg')] bg-cover px-8 py-16 md:p-16 flex flex-col gap-y-6">
      <div className="space-y-2 text-primary-green font-bold text-center md:text-left">
        <h1 className="text-4xl">Belajar dan Bertumbuh</h1>
        <h2 className="text-xl">
          sebagai Pemuda Muslim
        </h2>
      </div>

      <div className="hidden md:flex flex-row gap-2">
        {BENEFITS.map((benefit) => (
          <div key={benefit} className="w-fit self-center">
            <p
              className="space-x-2 px-4 py-1 bg-primary-green text-white rounded-full"
            >
              <FontAwesomeIcon icon={faCircleCheck} />
              <span>{benefit}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <LatestCourse data={latestCourse} />
        <LatestLC data={latestLiveClass} />
      </div>

      <div className="py-2 space-y-2 text-center text-primary-green text-lg font-semibold">

      </div>
    </section>
  );
};

export default HeroSection;
