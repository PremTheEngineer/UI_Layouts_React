
import Header from "./Components/Header";
import LeftSection from "./Components/LeftSection";
import RIghtSection from "./Components/RIghtSection";

const MapPlusListSplit = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex flex-1">
        <LeftSection />
        <RIghtSection />
      </div>
    </div>
  );
};

export default MapPlusListSplit;
