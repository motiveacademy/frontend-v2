const DetailCourse = ({ data }) => {
  return (
    <section className="w-full max-w-[40vw] space-y-8 text-primary-green space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p className="leading-7">{data.description}</p>
      </div>
      <div className="space-y-2">
        <p className="">
          <span className="font-bold">Course </span>Statistics
        </p>
        <div className="flex gap-x-4">
          <div className="bg-slate-200 rounded-xl">
            <p className="text-xl font-bold">20</p>
            <p>videos</p>
          </div>
          <div className="bg-slate-200 rounded-xl">
            <p className="text-xl font-bold">1 Hour</p>
            <p>total duration</p>
          </div>
        </div>
      </div>
      <div>
        <p className="">
          <span className="font-bold">Course </span>Content
        </p>
        <div>
          
        </div>
      </div>
    </section>
  );
};

export default DetailCourse;
