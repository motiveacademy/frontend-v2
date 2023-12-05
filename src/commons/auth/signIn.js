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
      // Handle Errors here.
      console.log(error);
      // return res
      //   .status(500)
      //   .json({ message: "Terdapat kesalahan dalam sistem" });
    });
};

export default signIn;
