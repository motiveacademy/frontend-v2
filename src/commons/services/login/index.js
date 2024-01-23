import { getRedirectResult } from "firebase/auth";
import { auth } from "@/commons/auth/config";

const firebaseCertUrl =
  "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com";

export async function getSignInResult() {
  const redirectResult = await getRedirectResult(auth);
  if (redirectResult) {
    const token = redirectResult.user.uid;

    await fetch("/api/cookie", {
      method: "POST",
      body: JSON.stringify({
        token: token.substring(0, 6),
      }),
    });

    return redirectResult.user.uid;
  } else {
    return null;
  }
}
