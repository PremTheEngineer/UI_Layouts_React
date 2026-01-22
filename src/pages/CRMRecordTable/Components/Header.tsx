import React from 'react'
import BoxRounded from '../../../components/BoxRounded'
import BigGap from '../../../components/BigGap'

const Header = () => {
  return (
    <div className="h-14 border-b border-neutral-200 flex items-center px-6 gap-4">
        <BoxRounded className="h-8 w-8 bg-neutral-200 rounded"></BoxRounded>
        <BoxRounded className="h-6 w-48 bg-neutral-200 rounded"></BoxRounded>
        <BigGap />
        <BoxRounded className="h-8 w-20 bg-neutral-100 rounded"></BoxRounded>
        <BoxRounded className="h-8 w-20 bg-neutral-900 rounded"></BoxRounded>
      </div>
  )
}

export default Header
