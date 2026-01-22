import React from "react";
import BoxRounded from "../../../components/BoxRounded";
import Avatar from "../../../components/Avatar";

const Header = () => {
  return (
    <div className="h-14 border-b border-neutral-200 flex items-center px-6 gap-4">
      <BoxRounded className="h-6 w-48 bg-neutral-200 rounded"></BoxRounded>
      <div className="flex-1"></div>
      <div className="flex">
        <Avatar className="h-8 w-8 bg-neutral-300 border-2 border-white"></Avatar>
        <Avatar className="-ml-2 h-8 w-8 bg-neutral-300 border-2 border-white"></Avatar>
        <Avatar className="-ml-2 h-8 w-8 bg-neutral-300 border-2 border-white"></Avatar>
        <Avatar className="-ml-2 h-8 w-8 bg-neutral-300 border-2 border-white"></Avatar>
      </div>
      <BoxRounded className="h-8 w-24 bg-neutral-100 rounded"></BoxRounded>
    </div>
  );
};

export default Header;
