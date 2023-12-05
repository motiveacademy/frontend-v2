import { db, storage } from "@commons/auth/config";
import {
  getDoc,
  doc,
  getDocs,
  collection,
  query,
  orderBy,
} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

export async function getCurrentTopic(courseID, topicID, topicList) {
  const parentRefs = getTopicParentRefs(topicID, topicList);
  parentRefs.pop();

  const topicRef = doc(db, "courses", courseID, "topics", ...parentRefs);
  const topicSnap = await getDoc(topicRef);
  const result = topicSnap.data();

  return result;
}

export async function getTopic(courseID) {
  return await getSubtopic(["courses", courseID, "topics"]);
}

export async function getSubtopic(collRef) {
  const completeTopic = [];

  // Get all topic document inside a collection
  try {
    const topicRef = collection(db, ...collRef);
    const topicQuery = query(topicRef, orderBy("topicOrder", "asc"));
    const topicSnap = await getDocs(topicQuery);

    // Add all topic document from the collection in completeTopic list
    for (let subtopic of topicSnap.docs) {
      const id = subtopic.id;
      let result = {
        id,
        ...subtopic.data(),
      };

      result.topic = await getSubtopic([...collRef, id, "topics"]);
      completeTopic.push(result);
    }
  } catch (error) {
    console.log(error);
  }

  return completeTopic;
}

export function getTopicParentRefs(targetID, topicList) {
  let refList = getTopicParents(targetID, topicList);
  if (refList === null) {
    refList = [];
  } else {
    refList.push("topics");
  }

  return refList;
}

function getTopicParents(targetID, topicList) {
  for (const item of topicList) {
    if (item.id === targetID) {
      return [item.id];
    }
    if (item.topic?.length > 0) {
      const subPath = getTopicParents(targetID, item.topic);
      if (subPath) {
        return [item.id, "topics", ...subPath];
      }
    }
  }
  return null;
}

export async function getAllVideo(courseID) {
  let videoStorageLink = `courses/${courseID}/videos`;

  const videoRef = collection(storage, videoStorageLink);
  const videoLinks = await getDownloadURL(videoRef);

  return videoLinks;
}

export async function getVideo(courseID, videoName) {
  let videoStorageLink = `courses/${courseID}/videos/${videoName}.mp4`;

  const videoRef = ref(storage, videoStorageLink);
  const videoLink = await getDownloadURL(videoRef);

  return videoLink;
}

