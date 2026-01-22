import React from "react";
import Avatar from "../../../components/Avatar";
import BoxRounded from "../../../components/BoxRounded";

const Customer = () => {
  return (
    <div className="bg-neutral-100 p-6 border-b border-neutral-200">
      <div className="flex gap-6">
        <Avatar className="h-20 w-20 bg-neutral-300"></Avatar>
        <div className="flex-1 flex flex-col gap-2">
          <BoxRounded className="h-8 w-64 bg-neutral-300 rounded"></BoxRounded>
          <BoxRounded className="h-5 w-96 bg-neutral-200 rounded"></BoxRounded>
          <div className="flex gap-4 mt-2">
            <BoxRounded className="h-8 w-28 bg-white rounded border border-neutral-300"></BoxRounded>
            <BoxRounded className="h-8 w-28 bg-white rounded border border-neutral-300"></BoxRounded>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
