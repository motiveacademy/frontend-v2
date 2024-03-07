"use client";

import Link from "next/link";
import DefaultButton from "@/commons/components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { formatPrice } from "@/commons/utils/price";
import OutCartButton from "./OutCartButton";

const redirectURL = "https://app.midtrans.com/snap/v3/redirection/";

const CartSection = ({ cart, courses }) => {
  const inCart = cart.filter((item) => item.status === "In Cart");
  const outCart = cart.filter((item) => item.status !== "In Cart");

  return (
    <section className="text-primary-green space-y-8">
      <h1 className="text-2xl font-bold">
        <span className="mr-2">
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
        | Shopping Cart
      </h1>

      <div className="space-y-16">
        {inCart.length > 0 ? (
          <div className="space-y-4">
            <h2 className="font-bold text-xl pb-2 border-b">
              Waiting for Checkout
            </h2>
            <div className="space-y-2">
              {inCart.map((item) => (
                <div
                  key={item.orderID}
                  className="border rounded shadow p-4 space-y-4"
                >
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="font-lato">Rp{formatPrice(item.amount)}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <DefaultButton
                      isLink={true}
                      href={`${redirectURL}${item.snapToken}`}
                    >
                      Checkout
                    </DefaultButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-lg">
            Belum ada produk di keranjang kamu. Cek{" "}
            <Link href="/course" className="underline font-bold">
              Online Course
            </Link>{" "}
            dan{" "}
            <Link href="/liveclass" className="underline font-bold">
              Live Class
            </Link>{" "}
            kami sekarang!
          </p>
        )}

        {outCart.length > 0 ? (
          <div className="space-y-4">
            <h2 className="font-bold text-xl pb-2 border-b">History</h2>

            <div className="space-y-2">
              {outCart.map((item) => (
                <div
                  key={item.orderID}
                  className="border rounded shadow p-4 space-y-4"
                >
                  <div className="w-fit bg-primary-yellow rounded-full py-0.5 px-2 ">
                    <p className="font-bold">{item.status}</p>
                  </div>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="font-lato">Rp{formatPrice(item.amount)}</p>
                  </div>

                  <OutCartButton item={item} courses={courses} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </section>
  );
};

export default CartSection;
