import { NextResponse } from "next/server";
import { db } from "@commons/auth/config";
import { setDoc, doc } from "firebase/firestore";

export async function PUT(request) {
  const docData = await request.json();
  const dbRef = doc(db, "users", docData.id);

  setDoc(dbRef, docData?.data, { merge: true }).catch((error) => {
    console.log(error);
  });

  return NextResponse.json({ added: true });
}
