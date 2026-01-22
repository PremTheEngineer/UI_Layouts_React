import Avatar from "../../../components/Avatar";
import BigGap from "../../../components/BigGap";
import BoxPill from "../../../components/BoxPill";
import BoxRounded from "../../../components/BoxRounded";

export default function Header() {
  return (
    <div className="h-14 bg-white border-b border-neutral-200 flex items-center px-6 gap-4">
      <BoxRounded className="h-8 w-8 bg-neutral-900 rounded"></BoxRounded>
      <BoxPill className="h-10 w-64 bg-neutral-100 rounded-full"></BoxPill>
      <BigGap />
      <div className="flex gap-4">
        <BoxRounded className="h-8 w-8 bg-neutral-200 rounded"></BoxRounded>
        <BoxRounded className="h-8 w-8 bg-neutral-200 rounded"></BoxRounded>
        <BoxRounded className="h-8 w-8 bg-neutral-200 rounded"></BoxRounded>
        <BoxRounded className="h-8 w-8 bg-neutral-200 rounded"></BoxRounded>
      </div>
      <Avatar className="h-8 w-8 bg-neutral-300 rounded-full"></Avatar>
    </div>
  );
}
