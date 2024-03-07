"use client";

import Link from "next/link";

const DesktopItem = () => {
  return (
    <div className="flex items-center text-primary-green font-medium space-x-4">
      <Link
        href="/course"
        className="hover:cursor-pointer hover:underline hover:font-bold"
      >
        Online Course
      </Link>
      <Link
        href="/liveclass"
        className="hover:cursor-pointer hover:underline hover:font-bold"
      >
        Live Class
      </Link>
      <Link
        href="/about"
        className="hover:cursor-pointer hover:underline hover:font-bold"
      >
        About Us
      </Link>
    </div>
  );
};

export default DesktopItem;
