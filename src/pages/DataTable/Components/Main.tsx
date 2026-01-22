
import BoxRounded from "../../../components/BoxRounded";
import BigGap from "../../../components/BigGap";
import ListItem from "./ListItem";

const Main = () => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="min-w-full">
        <div className="h-10 bg-neutral-100 border-b border-neutral-200 flex items-center px-4 sticky top-0">
          <BoxRounded className="w-12 h-5 bg-neutral-200 rounded"></BoxRounded>
          <BoxRounded className="w-48 h-5 bg-neutral-200 rounded ml-4"></BoxRounded>
          <BoxRounded className="w-40 h-5 bg-neutral-200 rounded ml-4"></BoxRounded>
          <BoxRounded className="w-32 h-5 bg-neutral-200 rounded ml-4"></BoxRounded>
          <BoxRounded className="w-32 h-5 bg-neutral-200 rounded ml-4"></BoxRounded>
          <BoxRounded className="w-24 h-5 bg-neutral-200 rounded ml-4"></BoxRounded>
          <BigGap />
          <div className="w-20 h-5 bg-neutral-200 rounded"></div>
        </div>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </div>
    </div>
  );
};

export default Main;
