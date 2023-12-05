import { db } from "@commons/auth/config";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signInWithPopup } from "firebase/auth";

export async function getAllUser() {
  const userRef = collection(db, "users");
  const userSnap = await getDocs(userRef);

  const userList = [];
  for (let user of userSnap.docs) {
    userList.push(user.data());
  }

  return userList;
}

export async function checkAdmin() {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("AUTH");

  if (authCookie) {
    const userCookie = JSON.parse(authCookie.value);

    const docRef = doc(db, "users", userCookie.uid);
    const res = await getDoc(docRef);
    const data = {
      ...res.data(),
      id: res.id,
    };

    if (data.email != "motiveneeds@gmail.com") {
      redirect("/");
    }

    return data;
  } else {
    redirect("/");
  }
}

// export async function login(destPage) {
  // const result = await signInWithPopup(auth, provider);

  // const value = {
  //   uid: result.user.uid,
  //   name: result.user.displayName,
  //   email: result.user.email,
  // };

  // const res = await fetch(`${DOMAIN}/api/login/`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(value),
  // });

  // if (res.status == 200) {
  //   redirect(destPage);
  // } else {
  //   return res;
  // }
// }

export async function checkUser() {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("AUTH");

  if (authCookie) {
    const userCookie = JSON.parse(authCookie.value);

    const docRef = doc(db, "users", userCookie.uid);
    const res = await getDoc(docRef);
    const data = {
      ...res.data(),
      id: res.id,
    };

    return data;
  } else {
    return {};
  }
}
