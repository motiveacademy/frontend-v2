"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../../logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBars,
  faChalkboardUser,
  faTv,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import MobileUserItem from "./MobileUserItem";

const MobileNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const changeMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="md:hidden bg-white text-primary-green">
      <div className="w-full flex items-center justify-between px-8 py-6 relative">
        <Logo />
        {openMenu ? (
          <div onClick={changeMenu}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        ) : (
          <div onClick={changeMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        )}
      </div>

      <div className={`${openMenu ? "show-menu" : "hide-menu"} absolute top-0 w-full h-screen mt-16`}>
        <div className="w-full h-screen bg-white px-8 py-4 space-y-8" onClick={changeMenu}>
          <div className="space-y-4">
            <p className="uppercase text-slate-500 text-sm font-bold">
              PRODUCTS
            </p>

            <Link prefetch={false} className="block" href="/course">
              <p className="flex items-center gap-x-4 hover:font-bold hover:underline">
                <FontAwesomeIcon icon={faChalkboardUser} />
                <span>Online Course</span>
              </p>
            </Link>

            <Link prefetch={false} className="block" href="/liveclass">
              <p className="flex items-center gap-x-4 hover:font-bold hover:underline">
                <FontAwesomeIcon icon={faTv} />
                <span>Live Class</span>
              </p>
            </Link>
          </div>

          <div className="space-y-4">
            <p className="uppercase text-slate-500 text-sm font-bold">
              ABOUT MOTIVE
            </p>
            <Link prefetch={false} className="block" href="/about">
              <p className="flex items-center gap-x-4 hover:font-bold hover:underline">
                <FontAwesomeIcon icon={faAddressCard} />
                <span>About Us</span>
              </p>
            </Link>
          </div>

          <MobileUserItem />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
