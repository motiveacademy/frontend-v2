import { NextResponse } from "next/server";
import { db } from "@commons/auth/config";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";

export async function PUT(request) {
  const docData = await request.json();
  const subtopicRef = collection(db, "topics");

  const res = await addDoc(subtopicRef, docData?.data).catch((error) => {
    console.log(error);
  });

  return NextResponse.json({
    data: docData,
    id: res.id,
  });
}

export async function DELETE(request) {
  const topic = await request.json();

  const topicRef = doc(db, ...topic.parentRefs);
  await deleteDoc(topicRef).catch((error) => {
    console.log(error);
  });

  return NextResponse.json({ status: "OK" });
}

export async function POST(request) {
  const topicData = await request.json();

  const topicRef = collection(db, ...topicData.ref);
  await addDoc(topicRef, topicData.data).catch((error) => {
    console.log(error);
  });

  return NextResponse.json({ status: "OK" });
}
