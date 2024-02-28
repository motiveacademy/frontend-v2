import { getCurrentUser } from "@/commons/services/user/current";
import CartSection from "@/sections/cart/CartSection";
import Profile from "@/sections/my-learning/Profile";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUser } from "@/commons/services/user";
const MyLearning = async() => {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("sctkn");

  if (authCookie === undefined) {
    redirect("/");
  }

  const user = await getCurrentUser(authCookie.value);
  const userProfile = await getUser(user) 
  // console.log(userProfile)
  // if (userProfile  && userProfile.user) {
  //   console.log(userProfile.user)
  // }


  return (
    <main classNameName="min-h-screen">
      <Profile user = {userProfile}></Profile>
    </main>
  );
};

export default MyLearning;
