
import BoxRounded from "../../../components/BoxRounded";

const ListItem = () => {
  return (
    <div className="bg-neutral-100 rounded-xl overflow-hidden flex flex-col">
      <BoxRounded className="h-48 bg-neutral-200"></BoxRounded>
      <div className="p-4 flex flex-col gap-2">
        <BoxRounded className="h-5 bg-neutral-200 rounded w-3/4"></BoxRounded>
        <BoxRounded className="h-4 bg-neutral-200 rounded w-1/2"></BoxRounded>
        <BoxRounded className="h-6 bg-neutral-300 rounded w-1/3 mt-2"></BoxRounded>
      </div>
    </div>
  );
};

export default ListItem;
