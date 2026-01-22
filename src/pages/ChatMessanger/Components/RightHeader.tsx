
import Avatar from "../../../components/Avatar";
import BoxRounded from "../../../components/BoxRounded";

export default function RightHeader() {
  return (
    <div className="h-14 border-b border-neutral-200 flex items-center px-6 gap-3">
      <Avatar className="h-10 w-10 bg-neutral-200 rounded-full"></Avatar>
      <div className="flex flex-col gap-1">
        <BoxRounded className="h-5 w-32 bg-neutral-200 rounded"></BoxRounded>
        <BoxRounded className="h-3 w-20 bg-neutral-100 rounded"></BoxRounded>
      </div>
      <div className="flex-1"></div>
      <BoxRounded className="h-8 w-8 bg-neutral-100 rounded"></BoxRounded>
      <BoxRounded className="h-8 w-8 bg-neutral-100 rounded"></BoxRounded>
      <BoxRounded className="h-8 w-8 bg-neutral-100 rounded"></BoxRounded>
    </div>
  );
}
