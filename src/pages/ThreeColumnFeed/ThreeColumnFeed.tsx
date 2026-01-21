import BoxPill from "../../components/BoxPill";
import BoxRounded from "../../components/BoxRounded";

const ThreeColumnFeed = () => {
  return (
    <div className="h-full flex">
      <div className="w-64 border-r border-neutral-200 flex flex-col p-4 gap-2">
        <BoxRounded className="rounded h-10 bg-neutral-200" />
        <BoxRounded className="rounded h-10 bg-neutral-100" />
        <BoxRounded className="rounded h-10 bg-neutral-100" />
        <BoxRounded className="rounded h-10 bg-neutral-100" />
        <BoxRounded className="rounded h-10 bg-neutral-100" />
        <div className="flex-1"></div>
        <BoxRounded className="rounded h-12 bg-neutral-900" />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="h-14 border-b border-neutral-200"></div>
        <div className="flex-1 p-4 flex flex-col gap-4 overflow-auto">
            <BoxRounded className="h-40 bg-neutral-100 rounded border border-neutral-200"></BoxRounded>
            <BoxRounded className="h-56 bg-neutral-100 rounded border border-neutral-200"></BoxRounded>
            <BoxRounded className="h-40 bg-neutral-100 rounded border border-neutral-200"></BoxRounded>
        </div>
      </div>
      <div className="flex flex-col p-4 w-80 border-l border-gray-200 gap-4">
        <BoxPill className="h-10 bg-neutral-100" />
        <BoxRounded className="rounded-xl h-48 bg-neutral-100"></BoxRounded>
        <BoxRounded className="rounded-xl h-64 bg-neutral-100"></BoxRounded>
      </div>
    </div>
  )
}

export default ThreeColumnFeed;
