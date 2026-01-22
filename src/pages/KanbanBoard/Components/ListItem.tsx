import BoxRounded from "../../../components/BoxRounded";
import Avatar from "../../../components/Avatar";

export default function ListItem(){
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm flex flex-col gap-2">
      <BoxRounded className="h-4 w-full bg-neutral-200 rounded"></BoxRounded>
      <BoxRounded className="h-4 w-3/4 bg-neutral-100 rounded"></BoxRounded>
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-1">
          <div className="h-5 w-12 bg-neutral-200 rounded"></div>
        </div>
        <Avatar className="h-6 w-6 bg-neutral-200 rounded-full"></Avatar>
      </div>
    </div>
  );
}
