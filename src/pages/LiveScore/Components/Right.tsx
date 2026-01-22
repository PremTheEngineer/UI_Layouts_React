
import ListItemRight from "./ListItemRight";

export default function Right() {
  return (
    <div className="w-80 border-l border-neutral-200 p-4 flex flex-col gap-4">
      <div className="h-6 w-24 bg-neutral-200 rounded"></div>
      <ListItemRight />
      <ListItemRight />
      <ListItemRight />
      <ListItemRight />
    </div>
  );
}
