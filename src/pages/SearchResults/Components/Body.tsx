import BoxRounded from '../../../components/BoxRounded'
import ListItem from './ListItem'

export default function Body() {
  return (
    <div className="flex-1 overflow-auto px-6 py-4">
        <div className="max-w-2xl ml-32">
          <BoxRounded className="h-4 w-48 bg-neutral-200 rounded mb-6"></BoxRounded>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
         
        </div>
      </div>
  )
}
