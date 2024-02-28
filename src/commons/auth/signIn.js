import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";

const signIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const value = {
        uid: result.user.uid,
        name: result.user.displayName,
      };

      fetch("http://localhost:3000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

export default signIn;
