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
  const videoLink = await getDownloadURL(videoRef).catch((err) => {
    return "";
  });

  return videoLink;
}

export async function addCourseTopic(courseID, parentIDs, topicData) {
  const ref = doc(db, "course", courseID, "topic", ...parentIDs);
  await setDoc(ref, topicData);
}

export async function getCourseTopic(parentIDs) {
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
      topic.subtopic = await getCourseTopic([...parentIDs, topic.id, "topic"]);
    }

    return topicList;
  }
}

export async function getLastWatched(userID, courseID) {
  const ref = doc(db, "user", userID, "course", courseID);
  const res = await getDoc(ref);

  return res.data();
}

export async function getCurrentTopic(courseID, topicID) {
  const videoRef = ref(storage, `course/${courseID}/videos/${topicID}/hd.mp4`);
  const videoLink = await getDownloadURL(videoRef).catch((err) => {
    return "";
  });

  return videoLink;
}
