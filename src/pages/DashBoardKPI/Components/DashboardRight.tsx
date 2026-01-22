import React from "react";
import BoxRounded from "../../../components/BoxRounded";

const DashboardRight = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="h-14 border-b border-neutral-200 flex items-center px-6 justify-between">
        <BoxRounded className="h-6 w-48 bg-neutral-200 rounded" />
        <div className="flex gap-2">
          <BoxRounded className="h-8 w-32 bg-neutral-100 rounded"></BoxRounded>
          <BoxRounded className="h-8 w-8 bg-neutral-100 rounded"></BoxRounded>
        </div>
      </div>
      <div className="flex-1 p-6 flex flex-col gap-6 overflow-auto bg-neutral-50">
        <div className="grid grid-cols-4 gap-4">
          {new Array(4).fill(null).map((_, idx) => {
            return (
              <div className="h-28 bg-white rounded-xl border border-neutral-200 p-4 flex flex-col justify-between">
                <BoxRounded key={idx} className="h-4 w-20 bg-neutral-200 rounded"></BoxRounded>
                <BoxRounded key={idx} className="h-8 w-24 bg-neutral-300 rounded"></BoxRounded>
                <BoxRounded key={idx} className="h-3 w-16 bg-neutral-100 rounded"></BoxRounded>
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 flex-1">
          <div className="flex-2 bg-white rounded-xl border border-neutral-200 p-4 flex flex-col">
            <BoxRounded className="h-6 w-32 bg-neutral-200 rounded mb-4"></BoxRounded>
            <BoxRounded className="flex-1 bg-neutral-100 rounded"></BoxRounded>
          </div>
          <div className="flex-1 bg-white rounded-xl border border-neutral-200 p-4 flex flex-col">
            <BoxRounded className="h-6 w-24 bg-neutral-200 rounded mb-4"></BoxRounded>
            <div className="flex-1 flex items-center justify-center">
              <BoxRounded className="w-40 h-40 rounded-full border-[20px] border-neutral-200 border-t-neutral-900"></BoxRounded>
            </div>
          </div>
        </div>
        <div className="h-64 bg-white rounded-xl border border-neutral-200 p-4 flex flex-col">
          <BoxRounded className="h-6 w-40 bg-neutral-200 rounded mb-4"></BoxRounded>
          <BoxRounded className="flex-1 bg-neutral-100 rounded"></BoxRounded>
        </div>
      </div>
    </div>
  );
};

export default DashboardRight;
