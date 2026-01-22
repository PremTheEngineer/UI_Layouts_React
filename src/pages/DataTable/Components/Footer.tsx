import React from "react";
import BoxRounded from "../../../components/BoxRounded";

const Footer = () => {
  return (
    <div className="h-12 border-t border-neutral-200 flex items-center justify-between px-6">
      <BoxRounded className="h-5 w-32 bg-neutral-200 rounded"></BoxRounded>
      <div className="flex gap-2">
        <BoxRounded className="h-8 w-8 bg-neutral-100 rounded"></BoxRounded>
        <BoxRounded className="h-8 w-8 bg-neutral-200 rounded"></BoxRounded>
        <BoxRounded className="h-8 w-8 bg-neutral-100 rounded"></BoxRounded>
        <BoxRounded className="h-8 w-8 bg-neutral-100 rounded"></BoxRounded>
        <BoxRounded className="h-8 w-8 bg-neutral-100 rounded"></BoxRounded>
      </div>
    </div>
  );
};

export default Footer;
