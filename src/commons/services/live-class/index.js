import { db } from "@/commons/auth/config";
import { getDoc, doc, getDocs, collection, query, orderBy } from "firebase/firestore";

export async function getDetailLiveClass(id) {
  const ref = doc(db, "live-class", id);
  const res = await getDoc(ref);

  const data = {
    ...res.data(),
    dates: "",
    id: res.id
  }

  return data
}

export async function getAllLiveClasses() {
  const ref = collection(db, "live-class")
  const que = query(ref, orderBy("dates", "desc"))
  const res = await getDocs(que)

  const liveClassList = []
  for (let item of res.docs) {
    liveClassList.push({
      ...item.data(),
      dates: "",
      id: item.id
    })
  }

  return liveClassList
}
