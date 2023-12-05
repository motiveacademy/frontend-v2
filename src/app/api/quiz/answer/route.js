import { NextResponse } from "next/server";
import { db } from "@commons/auth/config";
import { collection, setDoc, doc } from "firebase/firestore";

export async function POST(request) {
  const data = await request.json();
  const answers = data.answerItem.answers;

  const ansData = [];
  for (let item in answers) {
    ansData.push(answers[item]);
  }

  const quizRef = doc(
    db,
    "users",
    data.userID,
    "availableProduct",
    data.productID,
    "quiz",
    data.quizID
  );

  await setDoc(
    quizRef,
    { answerItem: ansData, status: data.answerItem.status },
    data.quizID
  ).catch((error) => {
    console.log(error);
  });

  return NextResponse.json({ status: "OK" });
}
