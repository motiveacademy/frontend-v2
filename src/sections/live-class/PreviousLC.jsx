import DefaultButton from "@/commons/components/button";
import SuspenseImage from "@/commons/components/suspense-image";
import {
  faChevronLeft,
  faChevronRight,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PreviousLC = ({ lcList }) => {
  return (
    <section className="w-full md:max-w-[70vw] text-primary-green space-y-8">
      <h2 className="text-xl font-bold">
        <span className="text-lg mr-2">
          <FontAwesomeIcon icon={faClockRotateLeft} />
        </span>
        Previous Live Class
      </h2>
      <div className="space-y-16">
        {lcList.map((lc) => (
          <div className="flex flex-col lg:grid lg:grid-cols-[max-content_1fr] gap-8 border p-4 rounded" key={lc.id}>
            <div className="lg:max-w-sm relative text-black z-0">
              <SuspenseImage
                src={`/live-class/${lc.id}/poster.png`}
                alt="previous live class documentary"
              />
              <div className="absolute top-0 right-0 flex items-center h-full w-[2em] bg-gradient-to-r from-transparent to-slate-500/80 opacity-0 hover:opacity-100 hover:cursor-pointer">
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
              <div className="absolute top-0 left-0 flex items-center justify-end h-full w-[2em] bg-gradient-to-l from-transparent to-slate-500/80 opacity-0 hover:opacity-100 hover:cursor-pointer">
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
            </div>
            <div className="space-y-4">
              <p className="w-fit bg-primary-yellow px-2 py-1 rounded-r font-bold">
                {`${new Intl.DateTimeFormat("id-ID", { month: "long" }).format(
                  lc.date
                )} ${lc.date.getUTCFullYear()}`}
              </p>
              <p className="text-2xl font-bold">{lc.name}</p>
              <p className="leading-7">{lc.description}</p>
              <DefaultButton isLink={true} href={`/liveclass/${lc.id}`}>
                Tonton Rekaman
              </DefaultButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviousLC;
