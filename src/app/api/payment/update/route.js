import { NextResponse } from "next/server";
import { db } from "@/commons/auth/config";
import { setDoc, doc } from "firebase/firestore";

const MIDTRANS_ENDPOINT = {
  sandbox: "https://app.sandbox.midtrans.com/snap/v1/transactions",
  production: "https://app.midtrans.com/snap/v1/transactions",
};

const MIDTRANS_CLIENT = "Mid-client-8F45h7sEmqjiDRQQ";

export async function POST(req) {
  const data = await req.json();
  const [customerID, productID, timestamp] = data.order_id.split("_");

  const cartRef = doc(
    db,
    "transaction",
    MIDTRANS_CLIENT,
    customerID,
    data.order_id
  );

  switch (data.transaction_status) {
    case "capture":
    case "settlement":
      const successData = {
        status: "Success",
      };

      setDoc(cartRef, successData, { merge: true }).catch((error) => {
        console.log(error);
      });

      const userRef = doc(db, "users", customerID);
      const productData = {
        availableProduct: [productID],
      };

      setDoc(userRef, productData, { merge: true }).catch((error) => {
        console.log(error);
      });

      return NextResponse.json(successData);

    case "pending":
      return NextResponse.json({ status: "Pending" });

    case "deny":
    case "cancel":
    case "expire":
    case "failure":
      const failedData = {
        status: data.transaction_status,
      };

      setDoc(cartRef, failedData, { merge: true }).catch((error) => {
        console.log(error);
      });

      return NextResponse.json(failedData);
  }

  return NextResponse.json({ status: "Other" });
}
