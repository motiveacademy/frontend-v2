import { db, storage } from "@/commons/auth/config";
import { getDoc, getDocs, doc, collection } from "firebase/firestore";
// import { useFirebase } from "../../contexts/firebase";
// import { ref, getDownloadURL } from "firebase/storage";
// import DOMAIN from "@/commons/utils/environment";

export async function getAllCourse() {
  const colRef = collection(db, "courses");
  const res = await getDocs(colRef);

  let courseList = [];
  res.forEach((course) => {
    let data = {
      ...course.data(),
      id: course.id,
    };
    if (data.status === "PUBLISHED") {
      courseList.push(data);
    }
  });

  return courseList;
}

// export async function getCourseData(courseID) {
//   const docRef = doc(db, "courses", courseID);
//   const res = await getDoc(docRef);

//   const courseData = {
//     ...res.data(),
//     id: res.id,
//   };

//   return courseData;
// }

// export function checkEligiblity(userData, productID) {
//   const availableProduct = userData.availableProduct;

//   let isEligible = false;
//   if (availableProduct) {
//     for (let itemID of availableProduct) {
//       if (itemID === productID) {
//         isEligible = true;
//         break;
//       }
//     }
//   }

//   return isEligible;
// }

// export async function addCart(cartData, custID, orderID) {
//   const reqData = {
//     cartData,
//     custID,
//     orderID,
//   };

//   const res = await fetch(`${DOMAIN}/api/payment`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(reqData),
//   });

//   const data = await res.json();
//   return data;
// }

// export function createOrderID(userID, courseID) {
//   const date = new Date();
//   return `${userID}_${courseID}_${date
//     .getTime()
//     .toString()
//     .slice(-7, -1)}`;
// }

// export async function getCoverImage(courseID){
//   const coverPathRef = ref(storage, `courses/${courseID}/cover/cover.jpg`);
//   const coverURL = await getDownloadURL(coverPathRef);

//   return coverURL;
// };
