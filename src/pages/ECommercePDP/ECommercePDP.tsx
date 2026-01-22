import Header from "./Components/Header";
import Left from "./Components/Left";
import Right from "./Components/Right";

export default function ECommercePDP() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-1 flex overflow-auto">
        <Left />
        <Right />
      </div>
    </div>
  );
}
