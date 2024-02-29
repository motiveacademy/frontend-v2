"use client";

import { useEffect, useState } from "react";

import DefaultButton from "@/commons/components/button";
import VideoPlayer from "@/commons/components/video-player";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addCart } from "@/commons/services/cart";
import { hardRedirect } from "@/commons/services/redirect";
import { useRouter } from "next/navigation";

const OverviewCourse = ({ data, userData }) => {
  const [loading, setLoading] = useState();
  const [eligible, setEligibile] = useState(false);
  const router = useRouter()

  useEffect(() => {
    if (userData?.availableProduct?.includes(data.pid)) {
      setEligibile(true);
    }
  }, []);

  const courseHandler = async () => {
    if (userData.isLogin) {
      setLoading(true);

      const dates = new Date();
      const timeFormatted = dates.getTime();
      const orderID = `Course_${auth.uid}_${timeFormatted}`;

      const cartData = {
        type: "Course",
        id: data.pid,
        name: data.name,
        amount: data.normalPrice,
        status: "In Cart",
      };

      await addCart(auth.uid, orderID, cartData);
      hardRedirect("/cart");

      setLoading(false);
    } else {
      router.push("/signin")
    }
  };

  return (
    <section className="w-full h-fit md:max-w-[30vw] bg-white shadow rounded-2xl p-8 space-y-4 text-primary-green">
      <VideoPlayer src={data.trailer} coverImg={data.cover} />
      <div className="">
        <p className="text-xl mt-4 mb-8">
          <span className="font-bold">Course </span>Intro
        </p>
        {!eligible && (
          <div className="flex justify-between items-center pt-4 border-t border-slate-300">
            <p className="font-lato font-bold text-lg md:text-xl">Rp{data.normalPrice}</p>
            {loading ? (
              <p className="text-2xl my-2">
                <FontAwesomeIcon icon={faCircleNotch} spin={true} />
              </p>
            ) : (
              <DefaultButton onClick={courseHandler}>Get Course</DefaultButton>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default OverviewCourse;
