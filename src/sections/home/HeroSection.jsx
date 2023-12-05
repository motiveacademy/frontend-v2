"use client";

import PromotionBox from "./promotion/PromotionBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const BENEFITS = [
  "First in Indonesia",
  "Flexibility Learning",
  "Free Certificate",
];

const HeroSection = ({ latestCourse, latestLiveClass }) => {
  return (
    <section className="min-h-screen bg-[url('/bg/masjid-unsplash.jpg')] bg-cover p-16 flex flex-col items-center gap-y-8">
      <div className="space-y-2 text-center text-primary-green font-bold">
        <h2 className="text-xl">
          Belajar dan Bertumbuh Sebagai Pemuda Muslim di
        </h2>
        <h1 className="text-4xl">Motive Academy</h1>
      </div>

      <div className="flex flex-row gap-x-8">
        <PromotionBox
          label="Latest Course"
          price={latestCourse.price}
          title={latestCourse.name}
          image={latestCourse.cover}
          alt="Motive Academy Latest Course Cover"
          content={latestCourse.description}
          readMore={`/course/${latestCourse.id}`}
        />
        <PromotionBox
          label="Latest Live Class"
          title={latestLiveClass.name}
          image={latestCourse.cover}
          alt="Motive Academy Latest Course Cover"
          content={latestLiveClass.description}
          readMore={`/live-class/${latestLiveClass.id}`}
        />
      </div>

      <div className="py-2 space-y-2 text-center text-primary-green text-lg font-semibold">
        <div className="flex flex-row gap-x-8">
          {BENEFITS.map((benefit) => (
            <p
              className="space-x-2 px-6 py-2 bg-primary-green text-white rounded-full"
              key={benefit}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
              <span>{benefit}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
