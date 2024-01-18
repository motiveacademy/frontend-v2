import { db } from "@/commons/auth/config";
import {
  getDoc,
  doc,
  getDocs,
  collection,
  query,
  orderBy,
} from "firebase/firestore";

export async function getDetailLiveClass(id) {
  const ref = doc(db, "live-class", id);
  const res = await getDoc(ref);

  const itemData = res.data();
    const dates = getLiveClassDate(itemData.dates);
    delete itemData.dates;

  const data = {
    ...itemData,
    ...dates,
    id: res.id,
  };

  return data;
}

export async function getAllLiveClasses() {
  const ref = collection(db, "live-class");
  const que = query(ref, orderBy("dates", "desc"));
  const res = await getDocs(que);

  const liveClassList = [];
  for (let item of res.docs) {
    const itemData = item.data();
    const dates = getLiveClassDate(itemData.dates);
    delete itemData.dates;

    liveClassList.push({
      ...itemData,
      ...dates,
      id: item.id,
    });
  }

  return liveClassList;
}

function getLiveClassDate(dates) {
  const date = new Date(dates.seconds * 1000);
  return {
    date,
    dateOptions: {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  };
}

export async function getLiveClassTesti() {
  const ref = doc(db, "static-info", "testimoni-mlc");
  const res = await getDoc(ref);

  const data = {
    testiList: res.data().testiList,
    id: res.id,
  };

  return data;
}
