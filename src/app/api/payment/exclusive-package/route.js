import { NextResponse } from "next/server";
import { db } from "@commons/auth/config";
import { setDoc, doc } from "firebase/firestore";

export async function POST(req) {
  const data = await req.json();

  const bundleRef = doc(
    db,
    "exclusive-package",
    data.orderID
  );
  const bundleData = data.form;

  setDoc(bundleRef, bundleData, data.orderID).catch((error) => {
    console.log(error);
  });
  return NextResponse.json({ status: "OK" });
}