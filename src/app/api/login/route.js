import { NextResponse } from "next/server";
import { db, auth, provider } from "@/commons/auth/config";
// import { getDoc, doc, setDoc } from "firebase/firestore";
// import { cookies } from "next/headers";
import { signInWithRedirect } from "firebase/auth";

// export async function POST(req) {
//   const data = await req.json();

//   const response = NextResponse.json({ status: "OK" });
//   var tomorrow = new Date();
//   cookies().set({
//     name: "AUTH",
//     value: JSON.stringify(data),
//     expires: tomorrow.setUTCDate(tomorrow.getUTCDate() + 1),
//     path: "/",
//   });

//   const docRef = doc(db, "users", data.uid);
//   const userDoc = await getDoc(docRef);

//   if (userDoc.data() === undefined) {
//     const userData = {
//       name: data.name,
//       age: null,
//       domicile: null,
//       email: data.email,
//       job: null,
//       sex: null,
//     };

//     setDoc(docRef, userData)
//       .then(() => {
//         console.log("Document has been added successfully");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   return response;
// }

export async function GET(req) {
  // await signInWithRedirect(auth, provider);
  // const res = await getRedirectResult(auth);
  // console.log(res);

  return NextResponse.json({ status: "OK" });
}
