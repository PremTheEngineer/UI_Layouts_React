import React from "react";
import RightFooter from "./RightFooter";
import RightHeader from "./RightHeader";
import Avatar from "../../../components/Avatar";
import BoxRounded from "../../../components/BoxRounded";

export default function Right() {
  return (
    <div className="flex-1 flex flex-col">
      <RightHeader />
      <div className="flex-1 p-6 flex flex-col gap-4 overflow-auto">
        <div className="flex gap-3">
          <Avatar className="h-8 w-8 bg-neutral-200 rounded-full shrink-0"></Avatar>
          <div className="max-w-md bg-neutral-100 rounded-2xl rounded-tl-none p-4">
            <BoxRounded className="h-4 w-64 bg-neutral-200 rounded"></BoxRounded>
          </div>
        </div>
        <div className="flex gap-3 self-end">
          <div className="max-w-md bg-neutral-900 rounded-2xl rounded-tr-none p-4">
            <BoxRounded className="h-4 w-48 bg-neutral-700 rounded"></BoxRounded>
            <BoxRounded className="h-4 w-32 bg-neutral-700 rounded mt-2"></BoxRounded>
          </div>
        </div>
        <div className="flex gap-3">
          <Avatar className="h-8 w-8 bg-neutral-200 rounded-full shrink-0"></Avatar>
          <div className="max-w-md bg-neutral-100 rounded-2xl rounded-tl-none p-4">
            <BoxRounded className="h-4 w-80 bg-neutral-200 rounded"></BoxRounded>
            <BoxRounded className="h-4 w-48 bg-neutral-200 rounded mt-2"></BoxRounded>
          </div>
        </div>
        <div className="flex gap-3 self-end">
          <div className="max-w-md bg-neutral-900 rounded-2xl rounded-tr-none p-4">
            <BoxRounded className="h-4 w-56 bg-neutral-700 rounded"></BoxRounded>
          </div>
        </div>
      </div>
      <RightFooter />
    </div>
  );
}