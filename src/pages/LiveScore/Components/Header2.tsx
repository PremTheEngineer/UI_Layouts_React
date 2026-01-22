
export default function Header2() {
  return (
    <div className="bg-neutral-800 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-neutral-600 rounded"></div>
              <div className="flex flex-col gap-1">
                <div className="h-5 w-20 bg-neutral-600 rounded"></div>
                <div className="h-8 w-32 bg-neutral-500 rounded"></div>
              </div>
            </div>
            <div className="text-center">
              <div className="h-4 w-16 bg-neutral-600 rounded mx-auto mb-2"></div>
              <div className="h-6 w-24 bg-red-500/30 rounded"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1 items-end">
                <div className="h-5 w-20 bg-neutral-600 rounded"></div>
                <div className="h-8 w-32 bg-neutral-500 rounded"></div>
              </div>
              <div className="h-12 w-12 bg-neutral-600 rounded"></div>
            </div>
          </div>
          <div className="h-5 w-72 bg-neutral-700 rounded mx-auto mt-4"></div>
        </div>
      </div>
  )
}
