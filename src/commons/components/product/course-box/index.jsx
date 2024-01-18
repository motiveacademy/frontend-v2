import DefaultButton from "../../button";
import SuspenseImage from "../../suspense-image";

const CourseBox = ({ data }) => {
  return (
    <div className="flex flex-col w-fit max-w-sm p-4 space-y-4 shadow-xl rounded">
      <div>
        <SuspenseImage src={`course/${data.pid}/cover.png`} />
      </div>

      <p className="text-xl text-primary-green font-bold">{data.name}</p>
      <div className="space-y-2">
        <p className="max-w-prose leading-7">
          {data.description.substring(0, 100)}...
        </p>

        <p className="text-xl text-primary-green font-bold font-lato">
          Rp{data.normalPrice}
        </p>
        <DefaultButton isLink={true} href={`/course/${data.id}`}>
          Detail
        </DefaultButton>
      </div>
    </div>
  );
};

export default CourseBox;
