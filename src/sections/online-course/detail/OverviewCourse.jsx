"use client";

import { useEffect, useState } from "react";

import DefaultButton from "@/commons/components/button";
import VideoPlayer from "@/commons/components/video-player";
import {
  faCircleInfo,
  faCircleNotch,
  faFileVideo,
  faHourglassHalf,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addCart } from "@/commons/services/cart";
import { hardRedirect } from "@/commons/services/redirect";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/commons/utils/price";

const OverviewCourse = ({ data, userData }) => {
  const [loading, setLoading] = useState();
  const [eligible, setEligibile] = useState(false);
  const router = useRouter();

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
      router.push("/signin");
    }
  };

  return (
    <section className="w-full h-fit md:fixed md:right-8 md:max-w-[40vw] lg:max-w-[30vw] bg-white shadow-md rounded-2xl p-4 lg:p-8 space-y-8 text-primary-green">
      <VideoPlayer src={data.trailer} coverImg={data.cover} />
      <div className="space-y-4">
        <p className="text-xl mt-4">
          <span className="font-bold">Course </span>Overview
        </p>

        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row align-bottom gap-x-2">
            <FontAwesomeIcon icon={faFileVideo} />
            <p className="font-bold font-lato">20 videos</p>
          </div>

          <div className="flex flex-row align-bottom gap-x-2">
            <FontAwesomeIcon icon={faHourglassHalf} />
            <p className="font-bold font-lato">1 Hour length</p>
          </div>

          <div className="flex flex-row align-bottom gap-x-2">
            <FontAwesomeIcon icon={faMobileScreen} />
            <p className="font-bold font-lato">Access from Mobile & Desktop</p>
          </div>

          <div className="flex flex-row align-bottom gap-x-2">
            <FontAwesomeIcon icon={faCircleInfo} />
            <p className="font-bold font-lato">Unlimited lifetime access</p>
          </div>
        </div>

        {!eligible && (
          <div className="flex justify-between items-center pt-4 border-t border-slate-300">
            <p className="font-lato font-bold text-lg md:text-xl">
              Rp{formatPrice(data.normalPrice)}
            </p>
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
