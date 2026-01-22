import BoxRounded from "../../../components/BoxRounded";

export default function Left() {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="bg-white rounded-xl overflow-hidden border border-neutral-200">
        <div className="h-32 bg-neutral-300"></div>
        <div className="p-4 relative">
          <div className="h-24 w-24 bg-neutral-200 rounded-full border-4 border-white absolute -top-12"></div>
          <div className="ml-28 flex flex-col gap-2">
            <BoxRounded className="h-6 w-48 bg-neutral-200 rounded"></BoxRounded>
            <BoxRounded className="h-4 w-64 bg-neutral-100 rounded"></BoxRounded>
          </div>
          <div className="flex gap-2 mt-4">
            <div className="h-8 w-28 bg-neutral-900 rounded"></div>
            <div className="h-8 w-28 bg-neutral-100 rounded border border-neutral-300"></div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-neutral-200 p-4">
        <BoxRounded className="h-5 w-20 bg-neutral-200 rounded mb-3"></BoxRounded>
        <BoxRounded className="h-4 w-full bg-neutral-100 rounded"></BoxRounded>
        <BoxRounded className="h-4 w-3/4 bg-neutral-100 rounded mt-2"></BoxRounded>
      </div>
      <div className="bg-white rounded-xl border border-neutral-200 p-4">
        <BoxRounded className="h-5 w-24 bg-neutral-200 rounded mb-3"></BoxRounded>
        <div className="flex gap-4">
          <div className="h-12 w-12 bg-neutral-200 rounded"></div>
          <div className="flex-1 flex flex-col gap-1">
            <BoxRounded className="h-4 w-48 bg-neutral-200 rounded"></BoxRounded>
            <BoxRounded className="h-3 w-32 bg-neutral-100 rounded"></BoxRounded>
          </div>
        </div>
      </div>
    </div>
  );
}
