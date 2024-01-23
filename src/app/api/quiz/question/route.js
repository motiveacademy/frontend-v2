import { NextResponse } from "next/server";
import { db } from "@/commons/auth/config";
import { collection, addDoc } from "firebase/firestore";

export async function POST(request) {
  const question = await request.json();
  const quizRef = collection(db, "courses", question.courseID, "quiz", question.quizID, "question");

  await addDoc(quizRef, question.data).catch((error) => {
    console.log(error);
  });

  return NextResponse.json({ status: "OK" });
}
