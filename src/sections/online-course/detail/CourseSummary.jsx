import {
  faBookmark,
  faFeather,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseSummary = ({ courseData }) => {
  return (
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
  );
};

export default CourseSummary;
