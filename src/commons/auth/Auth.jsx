"use client";

import { useEffect } from "react";

import { verifyAccessToken } from "@/commons/services/login/verify";
import { useAuthContext } from "@/commons/contexts/auth";

const Auth = ({ authCookie }) => {
  const [auth, setAuth] = useAuthContext();

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

    if (auth.isAuth === false && authCookie !== undefined) {
      reLoginHandler();
    }
  }, [auth]);
};

export default Auth;
