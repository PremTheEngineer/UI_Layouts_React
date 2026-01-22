import Avatar from "../../../components/Avatar";
import BoxRounded from "../../../components/BoxRounded";

export default function Right() {
  return (
    <div className="w-72 flex flex-col gap-4">
      <div className="bg-white rounded-xl border border-neutral-200 p-4">
        <BoxRounded className="h-5 w-32 bg-neutral-200 rounded mb-3"></BoxRounded>
        <div className="flex gap-2 py-2">
          <Avatar className="h-8 w-8 bg-neutral-200 rounded-full"></Avatar>
          <div className="flex-1 flex flex-col gap-1">
            <BoxRounded className="h-3 w-full bg-neutral-100 rounded"></BoxRounded>
            <BoxRounded className="h-3 w-2/3 bg-neutral-100 rounded"></BoxRounded>
          </div>
        </div>
        <div className="flex gap-2 py-2">
          <Avatar className="h-8 w-8 bg-neutral-200 rounded-full"></Avatar>
          <div className="flex-1 flex flex-col gap-1">
            <BoxRounded className="h-3 w-full bg-neutral-100 rounded"></BoxRounded>
            <BoxRounded className="h-3 w-2/3 bg-neutral-100 rounded"></BoxRounded>
          </div>
        </div>
        <div className="flex gap-2 py-2">
          <Avatar className="h-8 w-8 bg-neutral-200 rounded-full"></Avatar>
          <div className="flex-1 flex flex-col gap-1">
            <BoxRounded className="h-3 w-full bg-neutral-100 rounded"></BoxRounded>
            <BoxRounded className="h-3 w-2/3 bg-neutral-100 rounded"></BoxRounded>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-neutral-200 p-4">
        <BoxRounded className="h-5 w-24 bg-neutral-200 rounded"></BoxRounded>
      </div>
    </div>
  );
}
