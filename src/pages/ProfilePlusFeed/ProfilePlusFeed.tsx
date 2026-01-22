import Header from "./Components/Header"
import Left from "./Components/Left";
import Right from "./Components/Right";

export default function ProfilePlusFeed() {
  return (
    <div className="flex flex-col h-full bg-neutral-100">
      <Header />
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto py-4 flex gap-4">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}
