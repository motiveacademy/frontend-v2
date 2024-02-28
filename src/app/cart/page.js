import { getCart } from "@/commons/services/cart";
import { getCurrentUser } from "@/commons/services/user/current";
import CartSection from "@/sections/cart/CartSection";
import { redirect } from "next/navigation";

const Cart = async () => {
  const user = await getCurrentUser();
  if (user) {
    const cart = await getCart(user);

    return (
      <main className="p-16 min-h-screen">
        <CartSection cart={cart} />
      </main>
    );
  } else {
    redirect("/");
  }
};

export default Cart;
