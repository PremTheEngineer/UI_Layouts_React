import React from 'react'
import BoxRounded from '../../../components/BoxRounded'
import Avatar from '../../../components/Avatar'

const MainRight = () => {
  return (
     <div className="w-80 border-l border-neutral-200 p-4 flex flex-col gap-4">
          <BoxRounded className="h-6 w-24 bg-neutral-200 rounded"></BoxRounded>
          <div className="p-3 bg-neutral-50 rounded-lg flex gap-3">
            <Avatar className="h-8 w-8 bg-neutral-200 rounded-full shrink-0"></Avatar>
            <div className="flex-1 flex flex-col gap-1">
              <BoxRounded className="h-4 w-full bg-neutral-200 rounded"></BoxRounded>
              <BoxRounded className="h-3 w-20 bg-neutral-100 rounded"></BoxRounded>
            </div>
          </div>
          <div className="p-3 bg-neutral-50 rounded-lg flex gap-3">
            <Avatar className="h-8 w-8 bg-neutral-200 rounded-full shrink-0"></Avatar>
            <div className="flex-1 flex flex-col gap-1">
              <BoxRounded className="h-4 w-full bg-neutral-200 rounded"></BoxRounded>
              <BoxRounded className="h-3 w-20 bg-neutral-100 rounded"></BoxRounded>
            </div>
          </div>
          <div className="p-3 bg-neutral-50 rounded-lg flex gap-3">
            <Avatar className="h-8 w-8 bg-neutral-200 rounded-full shrink-0"></Avatar>
            <div className="flex-1 flex flex-col gap-1">
              <BoxRounded className="h-4 w-full bg-neutral-200 rounded"></BoxRounded>
              <BoxRounded className="h-3 w-20 bg-neutral-100 rounded"></BoxRounded>
            </div>
          </div>
          
        </div>
  )
}

export default MainRight
