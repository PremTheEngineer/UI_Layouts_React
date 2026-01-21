import React from 'react'
import BoxRounded from '../../../components/BoxRounded'
import ListItem from './ListItem'

const MainContent = () => {
  return (
    <div className="flex-1 p-6 flex flex-col gap-4 overflow-auto">
          <div className="flex justify-between items-center">
            <BoxRounded className="h-6 w-48 bg-neutral-200 rounded"></BoxRounded>
            <BoxRounded className="h-8 w-32 bg-neutral-100 rounded"></BoxRounded>
          </div>
          <div className="grid grid-cols-3 gap-4 flex-1">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </div>
  )
}

export default MainContent
