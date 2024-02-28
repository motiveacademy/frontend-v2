import { db } from "@/commons/auth/config";
import { getDoc, doc, getDocs, collection, setDoc } from "firebase/firestore";

export async function getAllUser() {
  const userRef = collection(db, "users");
  const userSnap = await getDocs(userRef);

  const userList = [];
  userSnap.forEach((user) => {
    userList.push({
      ...user.data(),
      authID: user.id,
    });
  });

  for (let user of userList) {
    const newUserRef = doc(db, "user", user.authID.substring(0, 6));
    await setDoc(newUserRef, user);
  }

  return userList;
}

export async function getUser(userID) {
  const userRef = doc(db, "user", userID);
  const userSnap = await getDoc(userRef);
  return {
    id: userSnap.id,
    ...userSnap.data(),
  };
}

// export async function checkAdmin() {
//   const cookieStore = cookies();
//   const authCookie = cookieStore.get("AUTH");

//   if (authCookie) {
//     const userCookie = JSON.parse(authCookie.value);

//     const docRef = doc(db, "users", userCookie.uid);
//     const res = await getDoc(docRef);
//     const data = {
//       ...res.data(),
//       id: res.id,
//     };

//     if (data.email != "motiveneeds@gmail.com") {
//       redirect("/");
//     }

//     return data;
//   } else {
//     redirect("/");
//   }
// }

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

// export async function checkUser() {
//   const cookieStore = cookies();
//   const authCookie = cookieStore.get("AUTH");

//   if (authCookie) {
//     const userCookie = JSON.parse(authCookie.value);

//     const docRef = doc(db, "users", userCookie.uid);
//     const res = await getDoc(docRef);
//     const data = {
//       ...res.data(),
//       id: res.id,
//     };

//     return data;
//   } else {
//     return {};
//   }
// }
