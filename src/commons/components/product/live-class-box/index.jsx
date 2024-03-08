import DefaultButton from "../../button"
import SuspenseImage from "../../suspense-image"

const LiveClassBox = ({ data }) => {
  return (
    <div
      className="flex flex-col w-full min-w-[40%] xl:min-w-[20%] bg-gradient-to-b from-white to-white/80 p-4 space-y-4 shadow-xl rounded text-primary-green"
    >
      <div className="w-full">
        <SuspenseImage src={`live-class/${data.id}/poster.png`} />
      </div>

      <p className="text-xl font-bold">{data.name}</p>
      <div className="space-y-2">
        <p className="max-w-prose leading-7">{data.description.substring(0, 150)}...</p>
        <DefaultButton isLink={true} href={`/liveclass/${data.id}`}>Detail</DefaultButton>
      </div>

    </div>)
}

export default LiveClassBox