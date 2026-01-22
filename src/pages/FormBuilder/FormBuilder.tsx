import Left from "./Components/Left"
import Mid from "./Components/Mid"
import Right from "./Components/Right";

export default function FormBuilder() {
  return (
    <div className="flex h-full">
      <Left />
      <Mid />
      <Right />
    </div>
  );
}
