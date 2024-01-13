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
    <section className="min-h-screen bg-[url('/bg/masjid-unsplash.jpg')] bg-cover p-16 flex flex-col gap-y-6">
      <div className="space-y-2 text-primary-green font-bold">
        <h1 className="text-4xl">Belajar dan Bertumbuh</h1>
        <h2 className="text-xl">
          sebagai Pemuda Muslim
        </h2>
      </div>

      <div className="flex flex-row gap-x-2">
        {BENEFITS.map((benefit, idx) => (
          <div key={benefit}>
            <p
              className="space-x-2 px-4 py-1 bg-primary-green text-white rounded-full"
            >
              <FontAwesomeIcon icon={faCircleCheck} />
              <span>{benefit}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-x-8">
        <LatestCourse data={latestCourse} />
        <LatestLC data={latestLiveClass} />
      </div>

      <div className="py-2 space-y-2 text-center text-primary-green text-lg font-semibold">

      </div>
    </section>
  );
};

export default HeroSection;
