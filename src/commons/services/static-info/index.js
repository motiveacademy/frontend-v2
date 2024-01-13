import { db, storage } from "@/commons/auth/config";
import {
  getDoc,
  doc,
} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

const getStaticPicture = async (storagePath) => {
  const picRef = ref(storage, `${storagePath}`);
  const pic = await getDownloadURL(picRef).catch(err => {
    return ""
  });

  return pic;
}

export { getStaticPicture }