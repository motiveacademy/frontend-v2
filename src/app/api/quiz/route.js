import { NextResponse } from "next/server";
import { db } from "@/commons/auth/config";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";

export async function POST(request) {
  const data = await request.json();
  const quizRef = collection(db, "courses", data.courseID, "quiz");

  await addDoc(quizRef, data.quizData).catch((error) => {
    console.log(error);
  });

  return NextResponse.json({ status: "OK" });
}

export async function DELETE(request) {
  const data = await request.json()

  const userQuizStatusRef = doc(db, "user", data.userID, "course", data.courseID, "quiz", data.quizID);
  await deleteDoc(userQuizStatusRef).catch((error) => {
    console.log(error);
  });

  return NextResponse.json({ status: "OK" });
}
