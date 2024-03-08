"use client";

import { useRef, useState } from "react";
import { useAuth } from "@/commons/contexts/auth";

import DefaultButton from "@/commons/components/button";
import { addCart } from "@/commons/services/cart";
import { hardRedirect } from "@/commons/services/redirect";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const selectedAmountStyling =
  "w-full p-2 rounded border border-primary-green flex justify-center hover:bg-primary-green hover:cursor-pointer hover:text-white font-lato";

const isSelected = (amount, selected) => {
  if (amount === selected) {
    return "bg-primary-green text-primary-white";
  }
};

const DonationLC = ({ data }) => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const auth = useAuth();
  const customInputRef = useRef();

  const submitHandler = async () => {
    setLoading(true)

    const dates = new Date();
    const timeFormatted = dates.getTime()
    const orderID = `LC_${auth.uid}_${timeFormatted}`;

    const cartData = {
      type: "Live Class",
      id: data.id,
      name: data.name,
      amount: selectedAmount,
      status: "In Cart"
    };

    await addCart(auth.uid, orderID, cartData);
    hardRedirect("/cart")
    setLoading(false)
  };

  const inputCustomHandler = (e) => {
    if (selectedAmount !== 0) {
      setSelectedAmount(0);
    }

    const value = e.target.value;

    if (value.substring(0, 2) !== "Rp") {
      customInputRef.current.value = `Rp${e.target.value}`;
    } else {
      const customAmount = parseInt(value.substring(2));
      if (customAmount > 0) {
        setSelectedAmount(customAmount);
        customInputRef.current.value = `Rp${customAmount}`;
      } else {
        setSelectedAmount(0);
        customInputRef.current.value = "";
      }
    }
  };

  const defaultAmountHandler = (amount) => {
    setSelectedAmount(amount);
    customInputRef.current.value = "";
  };

  return (
    <section className="text-primary-green md:max-w-[25vw] md:px-8 space-y-4">
      <p className="font-bold text-lg">
        Support Motive
      </p>
      <p>
        Kamu dapat membantu mengembangkan Motive Live Class serta platform Motive
        Academy menjadi lebih baik lagi dengan memberikan donasi.
      </p>
      <div className="space-y-4">
        <p className="font-bold">Jumlah Donasi</p>
        <div className="space-y-1 font-bold">
          <div
            className={`${selectedAmountStyling} ${isSelected(
              5000,
              selectedAmount
            )}`}
            onClick={() => defaultAmountHandler(5000)}
          >
            <p>Rp5.000</p>
          </div>
          <div
            className={`${selectedAmountStyling} ${isSelected(
              10000,
              selectedAmount
            )}`}
            onClick={() => defaultAmountHandler(10000)}
          >
            <p>Rp10.000</p>
          </div>
          <div
            className={`${selectedAmountStyling} ${isSelected(
              20000,
              selectedAmount
            )}`}
            onClick={() => defaultAmountHandler(20000)}
          >
            <p>Rp20.000</p>
          </div>
          <div
            className={`${selectedAmountStyling} ${isSelected(
              50000,
              selectedAmount
            )}`}
            onClick={() => defaultAmountHandler(50000)}
          >
            <p>Rp50.000</p>
          </div>
          <input
            ref={customInputRef}
            className="w-full p-2 rounded border border-primary-green text-center placeholder:font-normal font-lato focus:bg-slate-200"
            placeholder="Masukkan jumlah lainnya"
            onChange={inputCustomHandler}
          />
        </div>
        {loading ? (
          <p className="text-2xl my-2"><FontAwesomeIcon icon={faCircleNotch} spin={true} /></p>
        ) : (
          <DefaultButton onClick={submitHandler}>Submit</DefaultButton>
        )}
      </div>
    </section>
  );
};

export default DonationLC;
