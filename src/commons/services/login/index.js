import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import { auth, provider } from "@/commons/auth/config";

const firebaseCertUrl =
  "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com";

export default async function login() {
  signInWithRedirect(auth, provider);
}

export async function getSignInResult() {
  const redirectResult = await getRedirectResult(auth);
  if (redirectResult) {
    const token = await redirectResult.user.getIdToken();
    await fetch("/api/cookie", {
      method: "POST",
      body: JSON.stringify({
        token,
      }),
    });

    return redirectResult.user.uid;
  }

  return null;
}

export async function verifyAccessToken(token) {
  const response = await fetch(firebaseCertUrl);
  const certs = await response.json();

  const header = jwt.decode(token, { complete: true }).header;
  const cert = certs[header.kid];

  if (!cert) {
    return "Invalid Key";
  } else {
    // const res = crypto.createPublicKey(cert).export({type:'spki', format:'pem'})
    console.log(crypto.subtle);
    // const client = jwksClient({
    //   jwksUri: firebaseCertUrl,
    //   requestHeaders: {}, // Optional
    //   timeout: 30000, // Defaults to 30s
    // });

    // const kid = "RkI5MjI5OUY5ODc1N0Q4QzM0OUYzNkVGMTJDOUEzQkFCOTU3NjE2Rg";
    // const key = await client.getSigningKey(header.kid);
    // const signingKey = key.getPublicKey();
    // console.log(signingKey)

    // console.log(header);
    // console.log(cert);
    // const pemCert = x509ToPem(cert);
    // const decodedToken = jwt.verify(token, certs, { algorithms: ["RS256"] });
    // return decodedToken;
  }

  // const client = jwksClient({
  //   jwksUri: firebaseCertUrl,
  // });

  // const getKey = (header, callback) => {
  //   client.getSigningKey(header.kid, (err, key) => {
  //     var signingKey = key.publicKey || key.rsaPublicKey;
  //     callback(null, signingKey);
  //   });
  // };

  // const options = {}

  // jwt.verify(token, getKey, options, (err, decoded) => {
  //   console.log(decoded); // bar
  // });
}
