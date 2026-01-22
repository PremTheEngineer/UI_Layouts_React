import Form from "./Form";

export default function Mid() {
  return (
    <div className="flex-1 flex flex-col bg-neutral-100">
      <div className="h-14 bg-white border-b border-neutral-200 flex items-center justify-center gap-4">
        <div className="h-8 w-8 bg-neutral-200 rounded"></div>
        <div className="h-8 w-8 bg-neutral-200 rounded"></div>
        <div className="h-8 w-8 bg-neutral-900 rounded"></div>
        <div className="h-8 w-8 bg-neutral-200 rounded"></div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <Form />
      </div>
    </div>
  );
}
