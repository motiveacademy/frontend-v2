"use client";

import { useAuth } from "@/commons/contexts/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DefaultButton from "@/commons/components/button";
import Link from "next/link";

const MobileUserItem = () => {
  const auth = useAuth();

  if (auth.isAuth) {
    return (
      <div className="space-y-4">
        <p className="uppercase text-slate-500 text-sm font-bold">
          MY LEARNING
        </p>
        <Link prefetch={false} className="block" href="/cart">
          <p className="flex items-center gap-x-4 hover:font-bold hover:underline group">
            <FontAwesomeIcon icon={faCartShopping} />
            <span>Cart</span>
          </p>
        </Link>
        <Link prefetch={false} className="block" href="/my-learning">
          <p className="flex items-center gap-x-4 hover:font-bold hover:underline group">
            <FontAwesomeIcon icon={faUser} />
            <span>My Learning</span>
          </p>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-y-4 font-bold">
        <DefaultButton type="outlined" isLink={true} href="/signin">
          Login
        </DefaultButton>
        <DefaultButton>Sign Up</DefaultButton>
      </div>
    );
  }
};

export default MobileUserItem;
