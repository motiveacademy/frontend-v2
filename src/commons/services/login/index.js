const firebaseCertUrl =
  "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com";

export async function getSignInResult(redirectResult) {
  const authToken = redirectResult.user.uid;
  const displayName = redirectResult.user.displayName;

  const res = await fetch("/api/cookie", {
    method: "POST",
    body: JSON.stringify({
      authToken,
      uid: authToken.substring(0, 6),
      name: displayName,
    }),
  });

  if (res.ok) {
    return 200
  } else {
    return 403
  }
}
