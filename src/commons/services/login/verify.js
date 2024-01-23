"use server";

import { AES, enc } from "crypto-js";

export async function verifyAccessToken(token) {
  const decrypted = AES.decrypt(token, process.env.USER_KEY);
  const decryptedToken = decrypted.toString(enc.Utf8)

  if (decryptedToken.length === 6) {
    return decryptedToken
  } else {
    return 403;
  }
}
