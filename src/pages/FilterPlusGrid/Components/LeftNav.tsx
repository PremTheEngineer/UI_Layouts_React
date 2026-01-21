import React from "react";
import BoxRounded from "../../../components/BoxRounded";

const LeftNav = () => {
  return (
    <div className="w-72 border-r border-neutral-200 p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <BoxRounded className="h-5 w-20 bg-neutral-300 rounded"></BoxRounded>
        <BoxRounded className="h-10 bg-neutral-100 rounded"></BoxRounded>
      </div>
      <div className="flex flex-col gap-2">
        <BoxRounded className="h-5 w-24 bg-neutral-300 rounded"></BoxRounded>
        <BoxRounded className="h-2 bg-neutral-200 rounded-full"></BoxRounded>
      </div>
      <div className="flex flex-col gap-2">
        <BoxRounded className="h-5 w-20 bg-neutral-300 rounded"></BoxRounded>
        <div className="flex flex-col gap-2">
          <BoxRounded className="h-6 bg-neutral-100 rounded"></BoxRounded>
          <BoxRounded className="h-6 bg-neutral-100 rounded"></BoxRounded>
          <BoxRounded className="h-6 bg-neutral-100 rounded"></BoxRounded>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <BoxRounded className="h-5 w-28 bg-neutral-300 rounded"></BoxRounded>
        <div className="flex flex-col gap-2">
          <BoxRounded className="h-6 bg-neutral-100 rounded"></BoxRounded>
          <BoxRounded className="h-6 bg-neutral-100 rounded"></BoxRounded>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
