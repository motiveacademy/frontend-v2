"use client";

import { useAuth } from "@/commons/contexts/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DefaultButton from "@/commons/components/button";
import Link from "next/link";

const DesktopUserItem = () => {
  const auth = useAuth();

  if (auth.isAuth) {
    return (
      <div className="flex items-center gap-x-4">
        <p className="text-xl hover:cursor-pointer hover:text-primary-green">
          <Link href="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </p>
        <DefaultButton type="outlined">
          <div className="flex items-center gap-x-2">
            <FontAwesomeIcon icon={faUser} />
            <Link className="text-primary-green" href="/my-learning">
              My Learning
            </Link>
          </div>
        </DefaultButton>
      </div>
    );
  } else {
    return (
      <div className="space-x-4 font-bold">
        <DefaultButton type="outlined" isLink={true} href="/signin">
          Login
        </DefaultButton>
        <DefaultButton>Sign Up</DefaultButton>
      </div>
    );
  }
};

export default DesktopUserItem;
