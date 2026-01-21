import BigGap from "../../components/BigGap";
import BoxRounded from "../../components/BoxRounded";
import Separator from "../../components/Separator";
import ListItem from "./Components/ListItem";

const SidebarPlusContent = () => {
  return (
    <div className="h-full flex">
      <div className="border-r w-64 border-neutral-200 flex flex-col">
        <div className="p-4">
          <BoxRounded className="rounded h-12 bg-neutral-900" />
        </div>
        <div className="flex-1 p-4 pt-0 flex flex-col gap-1">
          <BoxRounded className="h-10 bg-neutral-200 rounded" />
          <BoxRounded className="h-10 bg-neutral-100 rounded" />
          <BoxRounded className="h-10 bg-neutral-100 rounded" />
          <BoxRounded className="h-10 bg-neutral-100 rounded" />
          <Separator />
          <BoxRounded className="h-10 bg-neutral-100 rounded" />
          <BoxRounded className="h-10 bg-neutral-100 rounded" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="h-14 border-b border-neutral-200 flex items-center px-4 gap-2">
          <BoxRounded className="h-8 w-8 bg-neutral-200 rounded" />
          <BoxRounded className="h-8 w-8 bg-neutral-200 rounded" />
          <BigGap />
          <BoxRounded className="h-8 w-64 bg-neutral-100 rounded" />
        </div>
        <div className="flex-1 p-4 pt-0 flex flex-col gap-1">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
    </div>
  );
};

export default SidebarPlusContent;
