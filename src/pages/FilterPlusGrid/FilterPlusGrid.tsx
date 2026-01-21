import React from "react";
import Header from "./Components/Header";
import LeftNav from "./Components/LeftNav";
import BoxRounded from "../../components/BoxRounded";
import MainContent from "./Components/MainContent";

const FilterPlusGrid = () => {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <div className="flex flex-1">
        <LeftNav />
        <MainContent />
      </div>
    </div>
  );
};

export default FilterPlusGrid;
