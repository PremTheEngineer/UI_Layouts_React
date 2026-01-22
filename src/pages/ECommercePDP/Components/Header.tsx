import React from "react";

export default function Header() {
  return (
    <div className="h-14 bg-neutral-900 flex items-center px-6 gap-4">
      <div className="h-8 w-24 bg-neutral-700 rounded"></div>
      <div className="flex-1 max-w-2xl h-10 bg-neutral-800 rounded"></div>
      <div className="flex gap-4">
        <div className="h-8 w-8 bg-neutral-700 rounded"></div>
        <div className="h-8 w-8 bg-neutral-700 rounded"></div>
      </div>
    </div>
  );
}
