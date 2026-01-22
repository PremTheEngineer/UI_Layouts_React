
import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import Left from "./Components/Left";

export default function LiveScore() {
  return (
    <div className="flex flex-col h-full">
      <Header1 />
      <Header2 />
      <div className="flex-1 flex overflow-auto">
        <Left />
        <div className="w-80 border-l border-neutral-200 p-4 flex flex-col gap-4">
          <div className="h-6 w-24 bg-neutral-200 rounded"></div>
          <div className="p-3 bg-neutral-100 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-5 w-12 bg-neutral-300 rounded"></div>
              <div className="h-4 w-4 bg-neutral-200 rounded"></div>
            </div>
            <div className="h-4 w-full bg-neutral-200 rounded"></div>
          </div>
          <div className="p-3 bg-neutral-100 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-5 w-12 bg-neutral-300 rounded"></div>
              <div className="h-4 w-4 bg-neutral-200 rounded"></div>
            </div>
            <div className="h-4 w-full bg-neutral-200 rounded"></div>
          </div>
          <div className="p-3 bg-neutral-100 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-5 w-12 bg-neutral-300 rounded"></div>
              <div className="h-4 w-4 bg-neutral-200 rounded"></div>
            </div>
            <div className="h-4 w-full bg-neutral-200 rounded"></div>
          </div>
          <div className="p-3 bg-neutral-100 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-5 w-12 bg-neutral-300 rounded"></div>
              <div className="h-4 w-4 bg-neutral-200 rounded"></div>
            </div>
            <div className="h-4 w-full bg-neutral-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
