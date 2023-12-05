import { NextResponse } from "next/server";
import { db } from "@commons/auth/config";
import { setDoc, doc, getDoc } from "firebase/firestore";

export async function PUT(request) {
  const docData = await request.json();

  const docRef = doc(db, "users", docData.userID);
  const res = await getDoc(docRef);
  const data = {
    ...res.data(),
    id: res.id,
  };
  data["availableProduct"] = [
    ...data.availableProduct,
    docData.liveClassID
  ]

  setDoc(docRef, data, { merge: true }).catch((error) => {
    console.log(error);
  });

  return NextResponse.json({ modified: true });
}
