"use client";

import { auth, provider } from "@/commons/auth/config";
import GoogleButton from "@/commons/components/button/google";
import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useEffect, useState } from "react";

const SignInSection = () => {
  const [loginLoad, setLoginLoad] = useState(false);
  useEffect(() => {
    const loginResult = async () => {
      const result = await getRedirectResult(auth);
      if (result) {
        setLoginLoad(true);
      } else {
        setLoginLoad(false);
      }
    };

    loginResult();
  });
  const login = async () => {
    signInWithRedirect(auth, provider);
  };

  return loginLoad ? (
    <p>Please wait a couple seconds...</p>
  ) : (
    <GoogleButton onClick={login} />
  );
};

export default SignInSection;
