import React from 'react'
import BoxRounded from '../../../components/BoxRounded'

const Header = () => {
  return (
    <div className="h-16 border-b border-neutral-200 flex items-center px-6 gap-4">
          <BoxRounded className="h-8 w-32 bg-neutral-900 rounded"></BoxRounded>
          <BoxRounded className="h-10 flex-1 max-w-2xl bg-neutral-100 rounded-full"></BoxRounded>
          <div className="flex-1"></div>
          <BoxRounded className="h-8 w-8 bg-neutral-200 rounded-full"></BoxRounded>
        </div>
  )
}

export default Header
