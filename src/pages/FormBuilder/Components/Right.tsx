

export default function Right() {
  return (
    <div className="w-72 border-l border-neutral-200 flex flex-col">
      <div className="h-14 border-b border-neutral-200 flex items-center px-4">
        <div className="h-5 w-24 bg-neutral-200 rounded"></div>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="h-4 w-16 bg-neutral-200 rounded"></div>
          <div className="h-10 bg-neutral-100 rounded"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-4 w-20 bg-neutral-200 rounded"></div>
          <div className="h-10 bg-neutral-100 rounded"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 bg-neutral-200 rounded"></div>
          <div className="h-6 w-10 bg-neutral-300 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-4 w-24 bg-neutral-200 rounded"></div>
          <div className="h-6 w-10 bg-neutral-900 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
