"use client";

import { useEffect, useReducer } from "react";

import { getSignInResult } from "@/commons/services/login";
import { verifyAccessToken } from "@/commons/services/login/verify";
import { useAuthContext } from "@/commons/contexts/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DefaultButton from "@/commons/components/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DesktopUserItem = ({ authCookie }) => {
  const [auth, setAuth] = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    const reLoginHandler = async () => {
      const decodedToken = await verifyAccessToken(authCookie.value);
      if (decodedToken !== "Invalid Key") {
        setAuth({
          isAuth: true,
          uid: decodedToken,
        });
      } else {
        setAuth({
          isAuth: false,
          uid: null,
        });
      }
    };

    const awaitLoginHandler = async () => {
      const uid = await getSignInResult();
      if (uid !== null) {
        setAuth({
          isAuth: true,
          uid: uid.substring(0, 6),
        });

        router.push("/my-learning");
      }
    };

    if (auth.isAuth === false && authCookie) {
      reLoginHandler();
    } else if (auth.isAuth === false && authCookie === undefined) {
      awaitLoginHandler();
    }
  }, [auth]);

  if (auth.isAuth) {
    return (
      <div className="hidden md:flex items-center gap-x-4">
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
