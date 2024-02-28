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

  const correctAns = data.answerData.filter((data) => data.isCorrect);

  await setDoc(quizRef, {
    answerItem: data.answerData,
    score: Math.round((correctAns.length / data.answerData.length) * 100),
  }).catch((error) => {
    console.log(error);
  });

  return NextResponse.json({ status: "OK" });
}
