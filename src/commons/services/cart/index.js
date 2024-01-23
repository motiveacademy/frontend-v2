import { db } from "@/commons/auth/config";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { getDetailLiveClass } from "../live-class";
import DOMAIN from "@/commons/utils/environment";
import { getUser } from "../user";
import { getCourse } from "../course";

export async function addCart(userID, cartID, cartData) {
  // Getting SnapToken from Midtrans
  const custData = await getUser(userID);
  const [firstName, lastName] = custData.name.split(" ", 2);

  const paymentData = {
    orderID: cartID,
    ...cartData,
    cust: {
      firstName,
      lastName,
      email: custData.email,
    },
  };

  const res = await fetch(`${DOMAIN}/api/payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paymentData),
  });

  const snapData = await res.json();

  // Adding to Cart
  const ref = doc(db, "user", userID, "cart", cartID);
  await setDoc(ref, {
    ...cartData,
    snapToken: snapData.token
  });
}

export async function getCart(userID) {
  const cartRef = collection(db, "user", userID, "cart");
  const cartSnap = await getDocs(cartRef);

  const cartList = [];
  cartSnap.forEach((item) => {
    cartList.push({
      orderID: item.id,
      ...item.data(),
    });
  });

  const carts = [];
  for (let item of cartList) {
    const itemData = await getItem(item);
    carts.push({
      ...item,
      itemDetail: itemData,
    });
  }

  return carts;
}

export async function getItem(item) {
  if (item.type === "Live Class") {
    return getDetailLiveClass(item.id);
  } else if (item.type === "Course") {
    return getCourse(item.id)
  }
}
