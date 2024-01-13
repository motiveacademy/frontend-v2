"use client";

import { useEffect } from "react";

import login, { getSignInResult } from "@/commons/services/login";
import { useAuthContext } from "@/commons/contexts/auth";
import { auth as firebaseAuth } from "@/commons/auth/config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DefaultButton from "@/commons/components/button";
import { verifyAccessToken } from "../../../services/login";

const DesktopUserItem = ({ authCookie }) => {
  const [auth, setAuth] = useAuthContext();

  const loginHandler = async () => {
    await login();
  };

  useEffect(() => {
    const redirectHandler = async () => {
      const uid = await getSignInResult();
      if (uid !== null) {
        setAuth({
          isAuth: true,
          uid,
        });
      }
    };

    const reLoginHandler = async () => {
      const decodedToken = await verifyAccessToken(authCookie.value)
      // console.log(decodedToken)
      setAuth({
        isAuth: true,
        uid: null,
      });
    };

    if (!auth.isAuth && authCookie) {
      reLoginHandler();
    } else if (!auth.isAuth && authCookie === undefined) {
      redirectHandler();
    }
  }, [auth]);

  if (auth.isAuth) {
    return (
      <div className="flex items-center gap-x-4">
        <p className="text-xl hover:cursor-pointer hover:text-primary-green">
          <FontAwesomeIcon icon={faCartShopping} />
        </p>
        <DefaultButton type="outlined">
          <div className="flex items-center gap-x-2">
            <FontAwesomeIcon icon={faUser} />
            <p className="text-primary-green">Profile</p>
          </div>
        </DefaultButton>
      </div>
    );
  } else {
    return (
      <div className="space-x-4 font-bold">
        <DefaultButton type="outlined">
          Login
        </DefaultButton>
        <DefaultButton>Sign Up</DefaultButton>
      </div>
    );
  }
};

export default DesktopUserItem;
