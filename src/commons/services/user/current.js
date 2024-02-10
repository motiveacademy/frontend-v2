"use server";

import { AES, enc } from "crypto-js";

import { cookies } from "next/headers";

export async function getCurrentUser() {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("sctkn");

  if (authCookie) {
    const decrypted = AES.decrypt(authCookie.value, process.env.USER_KEY);
    const decryptedToken = decrypted.toString(enc.Utf8);

    if (decryptedToken.length === 6) {
      return decryptedToken;
    }
  }
  
  return 403
}
