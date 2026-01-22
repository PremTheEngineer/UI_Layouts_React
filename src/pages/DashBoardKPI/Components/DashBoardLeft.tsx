import Avatar from "../../../components/Avatar";
import BigGap from "../../../components/BigGap";
import BoxRounded from "../../../components/BoxRounded";

const DashBoardLeft = () => {
  return <div className="flex flex-col py-4 items-center bg-neutral-900 w-16 gap-4">
    <BoxRounded className="rounded h-10 w-10 bg-neutral-700" />
    <BoxRounded className="rounded h-10 w-10 bg-neutral-800" />
    <BoxRounded className="rounded h-10 w-10 bg-neutral-800" />
    <BoxRounded className="rounded h-10 w-10 bg-neutral-800" />
    <BigGap />
    <Avatar className="h-10 w-10 bg-neutral-700" />
  </div>;
};

export default DashBoardLeft;
