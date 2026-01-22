
import Avatar from "../../../components/Avatar";
import BoxRounded from "../../../components/BoxRounded";

export default function LeftListItem({className=""}: {className?: string}) {
  return (
    <div className={`h-16 flex items-center gap-3 px-4 ${className}`}>
      <Avatar className="h-10 w-10 bg-neutral-300 rounded-full shrink-0"></Avatar>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between">
          <BoxRounded className="h-4 w-24 bg-neutral-200 rounded"></BoxRounded>
          <BoxRounded className="h-3 w-10 bg-neutral-200 rounded"></BoxRounded>
        </div>
        <BoxRounded className="h-3 w-full bg-neutral-100 rounded"></BoxRounded>
      </div>
    </div>
  );
}
