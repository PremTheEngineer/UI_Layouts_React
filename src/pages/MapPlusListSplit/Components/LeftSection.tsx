import React from "react";
import BoxRounded from "../../../components/BoxRounded";
import ListItem from "./ListItem";

const LeftSection = () => {
  return (
    <div className="w-1/2 flex flex-col border-r border-neutral-200">
      <div className="h-12 border-b border-neutral-200 flex items-center px-4 gap-2">
        <BoxRounded className="h-8 w-24 bg-neutral-100 rounded-full"></BoxRounded>
        <BoxRounded className="h-8 w-24 bg-neutral-100 rounded-full"></BoxRounded>
        <BoxRounded className="h-8 w-24 bg-neutral-100 rounded-full"></BoxRounded>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-auto">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
};

export default LeftSection;
