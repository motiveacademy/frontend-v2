import { getCart } from "@/commons/services/cart";
import { getCurrentUser } from "@/commons/services/user/current";
import CartSection from "@/sections/cart/CartSection";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Cart = async () => {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("sctkn");

  if (authCookie === undefined) {
    redirect("/");
  }

  const user = await getCurrentUser(authCookie.value);
  const cart = await getCart(user);

  return <main className="p-16 min-h-screen">
    <CartSection cart={cart} />
  </main>;
};

export default Cart;
