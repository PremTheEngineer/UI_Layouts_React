import React from "react";

export default function Header1() {
  return (
    <div className="h-14 border-b border-neutral-200 flex items-center px-6 gap-4">
      <div className="h-6 w-40 bg-neutral-200 rounded"></div>
      <div className="flex-1"></div>
      <div className="h-8 w-32 bg-neutral-100 rounded"></div>
      <div className="h-8 w-24 bg-neutral-900 rounded"></div>
    </div>
  );
}
