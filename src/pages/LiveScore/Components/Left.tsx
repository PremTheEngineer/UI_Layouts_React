
import ListItem from "./ListItem";

export default function Left() {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4">
      <div className="flex gap-2 border-b border-neutral-200 pb-2">
        <div className="h-8 w-24 bg-neutral-900 rounded"></div>
        <div className="h-8 w-24 bg-neutral-100 rounded"></div>
        <div className="h-8 w-24 bg-neutral-100 rounded"></div>
        <div className="h-8 w-24 bg-neutral-100 rounded"></div>
      </div>
      <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
        <div className="h-10 bg-neutral-100 flex items-center px-4">
          <div className="w-48 h-4 bg-neutral-300 rounded"></div>
          <div className="flex-1"></div>
          <div className="w-12 h-4 bg-neutral-300 rounded"></div>
          <div className="w-12 h-4 bg-neutral-300 rounded ml-4"></div>
          <div className="w-12 h-4 bg-neutral-300 rounded ml-4"></div>
          <div className="w-12 h-4 bg-neutral-300 rounded ml-4"></div>
        </div>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
}
