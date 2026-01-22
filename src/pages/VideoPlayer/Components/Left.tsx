
export default function Left() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="aspect-video bg-neutral-900 rounded-xl"></div>
      <div className="py-4 flex flex-col gap-3">
        <div className="h-6 w-3/4 bg-neutral-300 rounded"></div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 bg-neutral-300 rounded-full"></div>
          <div className="flex flex-col gap-1">
            <div className="h-4 w-32 bg-neutral-200 rounded"></div>
            <div className="h-3 w-24 bg-neutral-100 rounded"></div>
          </div>
          <div className="h-9 w-28 bg-neutral-900 rounded-full ml-4"></div>
          <div className="flex-1"></div>
          <div className="flex gap-2">
            <div className="h-9 w-24 bg-neutral-200 rounded-full"></div>
            <div className="h-9 w-20 bg-neutral-200 rounded-full"></div>
            <div className="h-9 w-9 bg-neutral-200 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 rounded-xl p-4">
        <div className="h-4 w-48 bg-neutral-300 rounded mb-2"></div>
        <div className="h-4 w-full bg-neutral-300 rounded"></div>
      </div>
    </div>
  );
}
