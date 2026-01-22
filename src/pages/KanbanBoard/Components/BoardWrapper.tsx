
import BoxRounded from "../../../components/BoxRounded";

const BoardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-72 shrink-0 bg-neutral-200 rounded-xl p-3 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <BoxRounded className="h-5 w-24 bg-neutral-400 rounded"></BoxRounded>
        <BoxRounded className="h-5 w-6 bg-neutral-400 rounded"></BoxRounded>
      </div>
      {children}
      <div className="h-8 w-full bg-neutral-300 rounded mt-2"></div>
    </div>
  );
};

export default BoardWrapper;
