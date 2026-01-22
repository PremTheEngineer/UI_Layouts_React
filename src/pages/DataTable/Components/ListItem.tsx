
import BoxRounded from "../../../components/BoxRounded";
import BigGap from "../../../components/BigGap";

const ListItem = () => {
  return (
    <div className="h-14 border-b border-neutral-100 flex items-center px-4 hover:bg-neutral-50">
      <BoxRounded className="w-12 h-5 bg-neutral-200 rounded"></BoxRounded>
      <BoxRounded className="w-48 h-5 bg-neutral-100 rounded ml-4"></BoxRounded>
      <BoxRounded className="w-40 h-5 bg-neutral-100 rounded ml-4"></BoxRounded>
      <BoxRounded className="w-32 h-5 bg-neutral-100 rounded ml-4"></BoxRounded>
      <BoxRounded className="w-32 h-5 bg-neutral-100 rounded ml-4"></BoxRounded>
      <BoxRounded className="w-24 h-5 bg-neutral-200 rounded ml-4"></BoxRounded>
      <BigGap />
      <div className="w-20 flex gap-2">
        <BoxRounded className="h-6 w-6 bg-neutral-200 rounded"></BoxRounded>
        <BoxRounded className="h-6 w-6 bg-neutral-200 rounded"></BoxRounded>
      </div>
    </div>
  );
};

export default ListItem;
