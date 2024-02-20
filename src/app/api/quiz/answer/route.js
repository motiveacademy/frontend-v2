import { NextResponse } from "next/server";
import { db } from "@/commons/auth/config";
import { setDoc, doc } from "firebase/firestore";

export async function POST(request) {
  const data = await request.json();

  const quizRef = doc(
    db,
    "user",
    data.userID,
    "course",
    data.courseID,
    "quiz",
    data.quizID
  );

  await setDoc(quizRef, {
    answerItem: data.answerData,
    status: "FINISHED",
  }).catch((error) => {
    console.log(error);
  });

  return NextResponse.json({ status: "OK" });
}
