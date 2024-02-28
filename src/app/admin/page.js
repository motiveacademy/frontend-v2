import { getQuiz } from "@/commons/services/quiz";
import { db } from "@/commons/auth/config";
import { setDoc, doc } from "firebase/firestore";

const AdminPage = async () => {
  const quizID = "FfvaCGEFwwrn3ev3DNIn";
  const quizData = await getQuiz("COU002", quizID);

  const quiz2ID = "1709100834161";
  let idx = 1
  for (let item of quizData) {
    const dbRef = doc(
      db,
      "course",
      "course-PCO",
      "quiz",
      quiz2ID,
      "question",
      `question-${idx}`
    );
    
    delete item.id;
    console.log(item);

    setDoc(dbRef, item, { merge: true }).catch((error) => {
      console.log(error);
    });

    idx += 1
  }

  return <main className="p-16"></main>;
};

export default AdminPage;
