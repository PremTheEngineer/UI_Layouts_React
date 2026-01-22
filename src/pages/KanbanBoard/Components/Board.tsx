import React from "react";

const Board = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 flex flex-col gap-2 overflow-y-auto">{children}</div>
  );
};

export default Board;
