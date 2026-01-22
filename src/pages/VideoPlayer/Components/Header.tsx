
export default function Header() {
  return (
    <div className="h-14 bg-white border-b border-neutral-200 flex items-center px-6 gap-4">
      <div className="h-6 w-24 bg-neutral-900 rounded"></div>
      <div className="flex-1 max-w-xl h-10 bg-neutral-100 rounded-full mx-auto"></div>
      <div className="flex gap-4">
        <div className="h-8 w-8 bg-neutral-200 rounded"></div>
        <div className="h-8 w-8 bg-neutral-200 rounded"></div>
        <div className="h-8 w-8 bg-neutral-200 rounded-full"></div>
      </div>
    </div>
  );
}
