import { getCurrentUser } from "@/commons/services/user/current";
import Profile from "@/sections/my-learning/Profile";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUser } from "@/commons/services/user";
import {getCourseByPID } from "@/commons/services/course";
const MyLearning = async() => {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("sctkn");

  if (authCookie === undefined) {
    redirect("/");
  }
  let courses = []
  const user = await getCurrentUser(authCookie.value);
  const userProfile = await getUser(user) 
  const products = userProfile["availableProduct"]
  for (const product of products) {
    const course = await getCourseByPID(product)
    courses.push(course)
  }
  

  return (
    <main className="min-h-screen">
      <Profile user = {userProfile} courses={courses}></Profile>
    </main>
  );
};

export default MyLearning;
