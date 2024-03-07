import { getCart } from "@/commons/services/cart";
import { getAllCourse } from "@/commons/services/course";
import { getCurrentUser } from "@/commons/services/user/current";
import CartSection from "@/sections/cart/CartSection";
import { redirect } from "next/navigation";

const Cart = async () => {
  const user = await getCurrentUser();
  if (user) {
    const cart = await getCart(user);
    const courses = await getAllCourse()

    return (
      <main className="p-8 md:p-16 min-h-screen">
        <CartSection cart={cart} courses={courses} />
      </main>
    );
  } else {
    redirect("/");
  }
};

export default Cart;
