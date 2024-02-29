"use client";

import { auth as firebaseAuth, provider } from "@/commons/auth/config";
import GoogleButton from "@/commons/components/button/google";
import { useAuthContext } from "@/commons/contexts/auth";
import { getSignInResult } from "@/commons/services/login";
import { hardRedirect } from "@/commons/services/redirect";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useEffect, useState } from "react";

const SignInSection = ({ authCookie }) => {
  const [loginLoad, setLoginLoad] = useState(false);
  const [auth, setAuth] = useAuthContext();

  useEffect(() => {
    const loginResult = async () => {
      const result = await getRedirectResult(firebaseAuth);
      if (result) {
        setLoginLoad(true);
        if (auth.isAuth === false && authCookie === undefined) {
          const res = await getSignInResult(result);
          if (res === 200) {
            setAuth({
              isAuth: true,
              uid: result.user.uid.substring(0, 6),
            });

            hardRedirect("/my-learning");
          }
        }
      }
    };

    loginResult();
  }, []);

  const login = async () => {
    signInWithRedirect(firebaseAuth, provider);
  };

  return loginLoad ? (
    <p>Please wait for a moment...</p>
  ) : (
    <GoogleButton onClick={login} />
  );
};

export default SignInSection;
