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

const getStaticPicture = async (storagePath) => {
  const picRef = ref(storage, `/static-info/${storagePath}`);
  const pic = await getDownloadURL(picRef);

  return pic;
}

export { getStaticPicture }