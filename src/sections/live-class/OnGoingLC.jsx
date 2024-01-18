import DefaultButton from "@/commons/components/button";
import SuspenseImage from "@/commons/components/suspense-image";
import {
  faBullhorn,
  faCalendarDays,
  faClock,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OnGoingLC = ({ data }) => {
  return (
    <section className="rounded shadow-xl border border-neutral-300 m-16 p-8 space-y-8 text-primary-green">
      <h2 className="text-xl font-bold">
        <span className="text-lg mr-2">
          <FontAwesomeIcon icon={faBullhorn} transform={{ rotate: -15 }} />
        </span>
        Live Class Terbaru
      </h2>
      <div className="flex gap-x-8">
        <div className="max-w-sm">
          <SuspenseImage src={`/live-class/${data.id}/poster.png`} />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="w-fit bg-primary-yellow px-2 py-1 rounded-r font-bold">
              Edisi{" "}
              {new Intl.DateTimeFormat("id-ID", { month: "long" }).format(
                data.date
              )}{" "}
              {data.date.getUTCFullYear()}
            </p>
            <p className="text-2xl font-bold">{data.name}</p>
            <p className="leading-7">{data.description}</p>
          </div>
          <div className="space-y-2">
            <p className="w-fit font-bold pb-1 border-b">Save The Date</p>
            <p>
              <span className="text-lg mr-2 font-lato">
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
              {data.date.toLocaleDateString("id-ID", data.dateOptions)}
            </p>
            <p>
              <span className="text-lg mr-2 font-lato">
                <FontAwesomeIcon icon={faClock} />
              </span>
              {`${data.date.getHours()}:${data.date.getMinutes()}`}
            </p>
            <p>
              <span className="text-lg mr-2">
                <FontAwesomeIcon icon={faDesktop} />
              </span>
              Zoom Meeting
            </p>
          </div>
          <DefaultButton isLink={true} href={`/live-class/${data.id}`}>
            Tonton Rekaman
          </DefaultButton>
        </div>
      </div>
    </section>
  );
};

export default OnGoingLC;