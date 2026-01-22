export default function Right() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="h-14 border-b border-neutral-200 flex items-center px-6">
        <div className="h-6 w-24 bg-neutral-300 rounded"></div>
      </div>
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-2xl flex flex-col gap-6">
          <div className="flex flex-col gap-4 pb-6 border-b border-neutral-200">
            <div className="h-5 w-32 bg-neutral-300 rounded"></div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="h-4 w-24 bg-neutral-200 rounded"></div>
                <div className="h-3 w-48 bg-neutral-100 rounded"></div>
              </div>
              <div className="h-10 w-64 bg-neutral-100 rounded"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="h-4 w-20 bg-neutral-200 rounded"></div>
                <div className="h-3 w-40 bg-neutral-100 rounded"></div>
              </div>
              <div className="h-10 w-64 bg-neutral-100 rounded"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pb-6 border-b border-neutral-200">
            <div className="h-5 w-28 bg-neutral-300 rounded"></div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="h-4 w-32 bg-neutral-200 rounded"></div>
                <div className="h-3 w-56 bg-neutral-100 rounded"></div>
              </div>
              <div className="h-6 w-12 bg-neutral-300 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="h-4 w-28 bg-neutral-200 rounded"></div>
                <div className="h-3 w-48 bg-neutral-100 rounded"></div>
              </div>
              <div className="h-6 w-12 bg-neutral-900 rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <div className="h-10 w-24 bg-neutral-200 rounded"></div>
            <div className="h-10 w-24 bg-neutral-900 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
