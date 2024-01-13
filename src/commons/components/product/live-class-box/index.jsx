import DefaultButton from "../../button"
import SuspenseImage from "../../suspense-image"

const LiveClassBox = ({ data }) => {
  return (
    <div
      className="flex flex-col max-w-sm bg-gradient-to-b from-white to-white/80 p-4 space-y-4 shadow-xl rounded text-primary-green"
    >
      <div>
        <SuspenseImage src={`live-class/${data.id}/poster.png`} />
      </div>

      <p className="text-xl font-bold">{data.name}</p>
      <div className="space-y-2">
        <p className="max-w-prose leading-7">{data.description.substring(0, 100)}...</p>
        <DefaultButton isLink={true} href={`/live-class/${data.id}`}>Detail</DefaultButton>
      </div>

    </div>)
}

export default LiveClassBox