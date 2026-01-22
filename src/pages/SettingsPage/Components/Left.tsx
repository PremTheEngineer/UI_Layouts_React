import LeftListItem from "./LeftListItem"

export default function Left() {
  return (
    <div className="w-64 border-r border-neutral-200 p-4 flex flex-col gap-1">
        <div className="h-10 w-full bg-neutral-100 rounded flex items-center px-3 mb-4">
          <div className="h-4 flex-1 bg-neutral-200 rounded"></div>
        </div>
        <div className="h-10 rounded flex items-center px-3 bg-neutral-200">
          <div className="h-4 w-24 rounded bg-neutral-400"></div>
        </div>
        <LeftListItem />
        <LeftListItem />
        <LeftListItem />
        <LeftListItem />
        <LeftListItem />
        <LeftListItem />
        <LeftListItem />
        
      </div>
  )
}
