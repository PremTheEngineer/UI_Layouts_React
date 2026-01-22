import Left from "./Components/Left";
import Right from "./Components/Right";

export default function Calendar() {
  return (
    <div className="flex h-full">
      <Left />
      <Right />
    </div>
  );
}
