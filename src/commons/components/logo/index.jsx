"use client"

import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="hover:cursor-pointer">
      <img
        src="/logo/motiveacademy.png"
        alt="Motive Academy Logo"
        className="h-[1rem] w-max"
      />
    </Link>
  );
};

export default Logo;
