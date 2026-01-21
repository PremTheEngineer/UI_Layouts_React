import React from "react";
import BoxRounded from "../../../components/BoxRounded";

const RIghtSection = () => {
  return (
    <div className="w-1/2 bg-neutral-200 relative">
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <BoxRounded className="h-10 w-10 bg-white rounded shadow"></BoxRounded>
        <BoxRounded className="h-10 w-10 bg-white rounded shadow"></BoxRounded>
      </div>
      <BoxRounded className="absolute top-20 left-32 h-8 px-3 bg-white rounded-full shadow"></BoxRounded>
      <BoxRounded className="absolute top-40 right-48 h-8 px-3 bg-white rounded-full shadow"></BoxRounded>
      <BoxRounded className="absolute bottom-12 left-48 h-8 px-3 bg-white rounded-full shadow"></BoxRounded>
      <BoxRounded className="absolute bottom-0 right-32 h-8 px-3 bg-neutral-900 rounded-full shadow"></BoxRounded>
    </div>
  );
};

export default RIghtSection;
