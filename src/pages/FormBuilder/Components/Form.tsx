import React from "react";

export default function Form() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl">
      <div className="h-6 w-3/4 bg-neutral-200 rounded mb-6"></div>
      <div className="flex flex-col gap-4">
        <div className="h-12 bg-neutral-100 rounded"></div>
        <div className="h-12 bg-neutral-100 rounded"></div>
        <div className="flex gap-3 mt-4">
          <div className="h-10 flex-1 bg-neutral-200 rounded"></div>
          <div className="h-10 flex-1 bg-neutral-900 rounded"></div>
        </div>
      </div>
    </div>
  );
}
