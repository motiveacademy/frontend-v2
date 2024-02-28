import { db } from "@/commons/auth/config";
import {
  getDoc,
  doc,
  getDocs,
  collection,
  query,
  orderBy,
} from "firebase/firestore";

export async function getAllQuiz(courseID) {
  const quizRef = collection(db, "course", courseID, "quiz");
  const quizSnap = await getDocs(quizRef);

  const allQuiz = [];
  for (let item of quizSnap.docs) {
    const result = item.data();
    const quizData = {
      ...result,
      id: item.id,
    };

    allQuiz.push(quizData);
  }

  return allQuiz;
}

export async function getQuiz(courseID, quizID) {
  const quizQuestionRef = collection(
    db,
    "course",
    courseID,
    "quiz",
    quizID,
    "question"
  );
  const quizQuestionQuery = query(
    quizQuestionRef,
    orderBy("questionNumber", "asc")
  );
  const quizQuestionSnap = await getDocs(quizQuestionQuery);

  const questionList = [];
  for (let item of quizQuestionSnap.docs) {
    const result = {
      ...item.data(),
      id: item.id,
    };
    questionList.push(result);
  }

  return questionList;
}

export async function getQuizStatus(userID, courseID, quizID) {
  const quizRef = doc(db, "user", userID, "course", courseID, "quiz", quizID);

  const quizSnap = await getDoc(quizRef);
  return quizSnap.data();
}
