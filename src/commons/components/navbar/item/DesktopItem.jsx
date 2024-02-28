"use client";

import Link from "next/link";

const DesktopItem = () => {
  return (
    <div className="hidden md:flex items-center text-primary-green font-medium space-x-4">
      <Link
        href="/course"
        className="hover:cursor-pointer hover:underline hover:font-bold"
      >
        Online Course
      </Link>
      <Link
        href="/live-class"
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
