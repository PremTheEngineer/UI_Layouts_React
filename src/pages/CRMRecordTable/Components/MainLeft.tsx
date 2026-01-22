import React from 'react'
import BoxRounded from '../../../components/BoxRounded'

const MainLeft = () => {    
  return (
    <div className="flex-1 p-6 overflow-auto">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <BoxRounded className="h-6 w-32 bg-neutral-200 rounded"></BoxRounded>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <BoxRounded className="h-4 w-24 bg-neutral-200 rounded"></BoxRounded>
                  <BoxRounded className="h-4 w-40 bg-neutral-100 rounded"></BoxRounded>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <BoxRounded className="h-4 w-24 bg-neutral-200 rounded"></BoxRounded>
                  <BoxRounded className="h-4 w-40 bg-neutral-100 rounded"></BoxRounded>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <BoxRounded className="h-4 w-24 bg-neutral-200 rounded"></BoxRounded>
                  <BoxRounded className="h-4 w-40 bg-neutral-100 rounded"></BoxRounded>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <BoxRounded className="h-4 w-24 bg-neutral-200 rounded"></BoxRounded>
                  <BoxRounded className="h-4 w-40 bg-neutral-100 rounded"></BoxRounded>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="h-6 w-32 bg-neutral-200 rounded"></div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <BoxRounded className="h-4 w-24 bg-neutral-200 rounded"></BoxRounded>
                  <BoxRounded className="h-4 w-40 bg-neutral-100 rounded"></BoxRounded>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <BoxRounded className="h-4 w-24 bg-neutral-200 rounded"></BoxRounded>
                  <BoxRounded className="h-4 w-40 bg-neutral-100 rounded"></BoxRounded>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <BoxRounded className="h-4 w-24 bg-neutral-200 rounded"></BoxRounded>
                  <BoxRounded className="h-4 w-40 bg-neutral-100 rounded"></BoxRounded>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-100">
                  <BoxRounded className="h-4 w-24 bg-neutral-200 rounded"></BoxRounded>
                  <BoxRounded className="h-4 w-40 bg-neutral-100 rounded"></BoxRounded>
                </div>
              </div>
            </div>
          </div>
  )
}

export default MainLeft
