
import BoxRounded from "../../../components/BoxRounded";
import Avatar from "../../../components/Avatar";

export default function RightFooter() {
  return (
    <div className="h-20 border-t border-neutral-200 p-4 flex items-center gap-3">
      <BoxRounded className="h-10 w-10 bg-neutral-100 rounded"></BoxRounded>
      <Avatar className="flex-1 h-12 bg-neutral-100 rounded-full"></Avatar>
      <Avatar className="h-10 w-10 bg-neutral-900 rounded-full"></Avatar>
    </div>
  );
}
