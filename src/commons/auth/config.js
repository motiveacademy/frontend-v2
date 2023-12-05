import firebaseApp from "./init";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const auth = getAuth(firebaseApp);
const currentUser = auth.currentUser
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export { auth, currentUser, provider, db, storage };
