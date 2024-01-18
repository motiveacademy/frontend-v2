import { db, storage } from "@/commons/auth/config";
import {
  getDoc,
  getDocs,
  doc,
  collection,
  query,
  where,
  setDoc,
  orderBy,
} from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
// import { useFirebase } from "../../contexts/firebase";
// import DOMAIN from "@/commons/utils/environment";

export async function getAllCourse() {
  const colRef = collection(db, "course");
  const res = await getDocs(colRef);

  let courseList = [];
  res.forEach((course) => {
    courseList.push({
      ...course.data(),
      pid: course.id,
    });
  });

  return courseList;
}

export async function getCourse(courseID) {
  const docsRef = collection(db, "course");
  const docQuery = query(docsRef, where("id", "==", courseID));
  const res = await getDocs(docQuery);

  let courseData = {};
  res.forEach((course) => {
    courseData = {
      ...course.data(),
      pid: course.id,
    };
  });

  return courseData;
}

export async function getCourseTrailer(courseID) {
  const videoRef = ref(storage, `course/${courseID}/trailer.mp4`);
  const videoLink = await getDownloadURL(picRef).catch((err) => {
    return "";
  });

  return videoLink;
}

export async function addCourseTopic(courseID, parentIDs, topicData) {
  const ref = doc(db, "course", courseID, "topic", ...parentIDs);
  await setDoc(ref, topicData);
}

export async function getCourseTopic(courseID) {
  const ref = collection(db, "course", courseID, "topic");
  const courseQuery = query(ref, orderBy("topicNum"));
  const res = await getDocs(courseQuery);

  const topicList = [];
  res.forEach(async (topic) => {
    const subtopic = await getSubtopic([courseID, "topic", topic.id, "topic"]);
    const topicData = topic.data();

    topicList.push({
      id: topic.id,
      title: topicData.title,
      topicNum: topicData.topicNum,
      subtopic,
    });
  });

  return topicList;
}

export async function getSubtopic(parentIDs) {
  const ref = collection(db, "course", ...parentIDs);
  const topicQuery = query(ref, orderBy("topicNum"));
  const res = await getDocs(topicQuery);

  if (res.empty) {
    return [];
  } else {
    const topicList = [];

    res.forEach(async (topic) => {
      const topicData = topic.data();
  
      topicList.push({
        id: topic.id,
        title: topicData.title,
        topicNum: topicData.topicNum,
      });
    });

    for (let topic of topicList) {
      topic.subtopic = await getSubtopic([...parentIDs, topic.id, "topic"]);
    }

    return topicList;
  }
}

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
