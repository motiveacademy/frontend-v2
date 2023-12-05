import { db } from "@commons/auth/config";
import {
  getDoc,
  doc,
  getDocs,
  collection,
  query,
  orderBy,
} from "firebase/firestore";

export async function getAllQuiz(courseID) {
  // Get all quiz
  const quizRef = collection(db, "courses", courseID, "quiz");
  const quizQuery = query(quizRef, orderBy("quizOrder", "asc"));
  const quizSnap = await getDocs(quizQuery);

  const allQuiz = [];
  for (let item of quizSnap.docs) {
    const result = item.data();
    const quizData = {
      ...result,
      id: item.id,
    };

    // const topicRef = doc(db, "courses", courseID, "topics", result.topicID);
    // const topic = await getDoc(topicRef);
    // quizData.topic = topic.data();

    allQuiz.push(quizData);
  }

  return allQuiz;
}

export async function getQuiz(courseID, quizID) {
  const quizQuestionRef = collection(
    db,
    "courses",
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

  const quizRef = doc(db, "courses", courseID, "quiz", quizID);
  const quizSnap = await getDoc(quizRef);
  const quiz = {
    ...quizSnap.data(),
    id: quizSnap.id,
  };

  const questionList = [];
  for (let item of quizQuestionSnap.docs) {
    const result = {
      ...item.data(),
      id: item.id,
    };
    questionList.push(result);
  }

  quiz.questions = questionList;

  return quiz;
}

export async function getQuizStatus(userID, productID, quizID) {
  const quizRef = doc(
    db,
    "users",
    userID,
    "availableProduct",
    productID,
    "quiz",
    quizID
  );

  const quizSnap = await getDoc(quizRef);
  return quizSnap.data();
}