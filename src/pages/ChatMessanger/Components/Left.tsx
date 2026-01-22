
import LeftHeader from "./LeftHeader";
import LeftListItem from "./LeftListItem";

export default function Left() {
  return (
    <div className="w-64 border-r border-neutral-200 flex flex-col">
      <LeftHeader />
      <div className="flex-1 flex flex-col overflow-auto">
        <LeftListItem className="bg-neutral-100" />
        <LeftListItem className="bg-neutral-50" />
        <LeftListItem className="bg-neutral-50" />
        <LeftListItem className="bg-neutral-50" />
        <LeftListItem className="bg-neutral-50" />
        <LeftListItem className="bg-neutral-50" />
        <LeftListItem className="bg-neutral-50" />
        <LeftListItem className="bg-neutral-50" />
      </div>
    </div>
  );
}
