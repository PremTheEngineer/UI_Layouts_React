export default function ListItem() {
  return (
    <div className="flex gap-2">
      <div className="w-40 h-24 bg-neutral-300 rounded-lg shrink-0"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="h-4 w-full bg-neutral-200 rounded"></div>
        <div className="h-4 w-3/4 bg-neutral-200 rounded"></div>
        <div className="h-3 w-1/2 bg-neutral-100 rounded mt-1"></div>
        <div className="h-3 w-1/3 bg-neutral-100 rounded"></div>
      </div>
    </div>
  );
}
