"use client";

import VideoPlayer from "@/commons/components/video-player";
import { addLastWatched } from "@/commons/services/course";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import {
  faFeather,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WatchCourse = ({ courseData, topicData, userData }) => {
  const lastWatchedHandler = async () => {
    const data = {
      lastWatched: {
        id: topicData.id,
        name: topicData.name,
      },
      completedVideo: [...userData.completedVideo, topicData.id],
    };

    await addLastWatched(courseData.pid, userData.userID, data);
  };

  return (
    <section className="w-full">
      <div className="w-full bg-slate-900 px-16">
        <VideoPlayer
          src={topicData.video}
          onEnded={lastWatchedHandler}
          autoplay={true}
        />
      </div>

      <div className="border-t border pt-4 px-8 pb-16 text-primary-green space-y-8">
        <h2 className="text-xl font-bold py-2 border-b">Course Overview</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="space-x-4 text-xl">
              <span>
                <FontAwesomeIcon icon={faBookmark} />
              </span>
              <span className="font-bold">Deskripsi</span>
            </p>
            <p className="leading-7">{courseData.description}</p>
          </div>

          <div className="space-y-2">
            <p className="space-x-4 text-xl">
              <span>
                <FontAwesomeIcon icon={faPersonChalkboard} />
              </span>
              <span className="font-bold">Pembawa Materi</span>
            </p>
            <div>
              <p className="font-bold">{courseData.mentor.name}</p>
              <p className="leading-7">{courseData.mentor.description}</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="space-x-4 text-xl">
              <span>
                <FontAwesomeIcon icon={faFeather} />
              </span>
              <span className="font-bold">Penyusun Course</span>
            </p>
            <div>
              <p className="font-bold">{courseData.writer.name}</p>
              <p className="leading-7">{courseData.writer.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchCourse;
