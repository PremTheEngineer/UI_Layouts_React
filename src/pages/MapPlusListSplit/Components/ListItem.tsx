import React from "react";
import BoxRounded from "../../../components/BoxRounded";

const ListItem = () => {
  return (
    <div className="flex gap-4 p-2 rounded-xl hover:bg-neutral-50">
      <BoxRounded className="w-72 h-48 bg-neutral-200 rounded-xl shrink-0"></BoxRounded>
      <div className="flex-1 py-2 flex flex-col gap-2">
        <BoxRounded className="h-4 w-32 bg-neutral-200 rounded"></BoxRounded>
        <BoxRounded className="h-6 w-3/4 bg-neutral-200 rounded"></BoxRounded>
        <BoxRounded className="h-4 w-1/2 bg-neutral-100 rounded"></BoxRounded>
        <div className="flex-1"></div>
        <BoxRounded className="h-6 w-24 bg-neutral-300 rounded"></BoxRounded>
      </div>
    </div>
  );
};

export default ListItem;
