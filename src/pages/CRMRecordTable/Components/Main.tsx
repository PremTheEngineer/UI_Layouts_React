import BoxRounded from "../../../components/BoxRounded";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

const Main = () => {
  return (
    <div className="flex flex-1">
      <div className="flex-1 flex flex-col">
        <div className="h-12 border-b border-neutral-200 flex items-center px-6 gap-6">
          <BoxRounded className="h-5 w-16 bg-neutral-900 rounded"></BoxRounded>
          <BoxRounded className="h-5 w-16 bg-neutral-200 rounded"></BoxRounded>
          <BoxRounded className="h-5 w-16 bg-neutral-200 rounded"></BoxRounded>
          <BoxRounded className="h-5 w-16 bg-neutral-200 rounded"></BoxRounded>
        </div>
        <MainLeft />
      </div>
      <MainRight />
    </div>
  );
};

export default Main;
