import React from "react";
import BoxRounded from "../../../components/BoxRounded";
import BoxPill from "../../../components/BoxPill";
import Avatar from "../../../components/Avatar";

const Header = () => {
  return (
    <div className="h-16 border-b border-neutral-200 flex justify-between items-center px-6 gap-4">
      <BoxRounded className="h-8 w-32 bg-neutral-900 rounded" />
      <BoxPill className="h-10 w-80 bg-neutral-100 rounded-full" />
      <Avatar className="h-8 w-8 bg-neutral-200" />
    </div>
  );
};

export default Header;
