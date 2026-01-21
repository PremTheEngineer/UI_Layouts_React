import BoxRounded from "../../../components/BoxRounded";

const ListItem = () => {
  return (
    <div className="h-12 border-b border-neutral-100 flex items-center gap-3 px-2">
      <BoxRounded className="w-5 h-5 bg-neutral-200 rounded" />
      <BoxRounded className="w-5 h-5 bg-neutral-200 rounded" />
      <BoxRounded className="w-32 h-4 bg-neutral-200 rounded" />
      <BoxRounded className="flex-1 h-4 bg-neutral-100 rounded" />
      <BoxRounded className="w-16 h-4 bg-neutral-100 rounded" />
    </div>
  );
};

export default ListItem;
