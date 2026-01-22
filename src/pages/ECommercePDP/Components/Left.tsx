import React from "react";

export default function Left() {
  return (
    <div className="w-1/2 p-6 flex gap-4">
      <div className="w-20 flex flex-col gap-2">
        <div className="h-20 bg-neutral-200 rounded border-2 border-neutral-900"></div>
        <div className="h-20 bg-neutral-200 rounded "></div>
        <div className="h-20 bg-neutral-200 rounded "></div>
        <div className="h-20 bg-neutral-200 rounded "></div>
      </div>
      <div className="flex-1 bg-neutral-100 rounded-lg"></div>
    </div>
  );
}
