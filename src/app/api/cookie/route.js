import { db } from "@/commons/auth/config";
import { AES } from "crypto-js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const userRef = doc(db, "user", data.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const userData = {
      age: null,
      authID: data.authToken,
      availableProduct: [],
      domicile: null,
      job: null,
      name: data.name,
      sex: null
    }

    await setDoc(userRef, userData).catch((error) => {
      console.error(error);
    });
  }

  const encrypted = AES.encrypt(data.uid, process.env.USER_KEY);
  const expireTime = 24 * 60 * 60;

  cookies().set("sctkn", encrypted, {
    secure: true,
    maxAge: expireTime,
  });

  return NextResponse.json({ cookie: true });
}
