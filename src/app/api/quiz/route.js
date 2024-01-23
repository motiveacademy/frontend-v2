import { NextResponse } from "next/server";
import { db } from "@/commons/auth/config";
import { collection, addDoc } from "firebase/firestore";

export async function POST(request) {
  const data = await request.json();
  const quizRef = collection(db, "courses", data.courseID, "quiz");

  await addDoc(quizRef, data.quizData).catch((error) => {
    console.log(error);
  });

  return NextResponse.json({ status: "OK" });
}
