import { db } from "@/commons/auth/config";
import { getDoc, doc, collection, getDocs } from "firebase/firestore";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const MIDTRANS_CLIENT = "Mid-client-8F45h7sEmqjiDRQQ";

export async function getCart() {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("AUTH");

  if (authCookie) {
    const userCookie = JSON.parse(authCookie.value);

    const cartRef = doc(db, "cart", userCookie.uid);
    const cartRes = await getDoc(cartRef);
    const cartData = cartRes.data();
    if (cartData) {
      const courseRef = doc(db, "courses", cartData.product);
      const courseData = await getDoc(courseRef);

      const userRef = doc(db, "users", userCookie.uid);
      const userSnap = await getDoc(userRef);
      const custData = {
        ...userSnap.data(),
        id: userSnap.id,
      };

      const custFullname = custData.name.split(" ");

      return {
        ...courseData.data(),
        cart: {
          ...cartData,
        },
        cust: {
          ...custData,
          firstName: custFullname[0],
          lastName: custFullname.slice(1).join(" "),
        },
        emptyCart: false,
      };
    }

    return { emptyCart: true };
  } else {
    redirect("/");
  }
}

export async function getMidtransTransaction() {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("AUTH");

  if (authCookie) {
    const userCookie = JSON.parse(authCookie.value);

    const transactionRef = collection(
      db,
      "transaction",
      MIDTRANS_CLIENT,
      userCookie.uid
    );
    const transactionRes = await getDocs(transactionRef);
    const orderList = [];
    for (let order of transactionRes.docs) {
      orderList.push({
        ...order.data(),
        id: order.id,
      });
    }

    if (orderList.length > 0) {
      const userRef = doc(db, "users", userCookie.uid);
      const userSnap = await getDoc(userRef);
      const custData = {
        ...userSnap.data(),
        id: userSnap.id,
      };

      const custFullname = custData.name.split(" ");

      return {
        order: orderList,
        cust: {
          ...custData,
          firstName: custFullname[0],
          lastName: custFullname.slice(1).join(" "),
        },
        emptyCart: false,
      };
    }

    return { emptyCart: true };
  } else {
    redirect("/");
  }
}