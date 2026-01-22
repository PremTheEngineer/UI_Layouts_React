import React from 'react'
import BoxRounded from '../../../components/BoxRounded'
import Avatar from '../../../components/Avatar'
import BigGap from '../../../components/BigGap'
import BoxPill from '../../../components/BoxPill'

export default function Header() {
  return (
    <div className="border-b border-neutral-200 px-6 py-4">
        <div className="flex items-center gap-6">
          <BoxRounded className="h-8 w-24 bg-neutral-300 rounded"></BoxRounded>
          <BoxPill className="h-12 flex-1 max-w-2xl bg-neutral-100 rounded-full border border-neutral-300"></BoxPill>
          <BigGap />
          <BoxRounded className="h-8 w-8 bg-neutral-200 rounded"></BoxRounded>
          <Avatar className="h-8 w-8 bg-neutral-200 rounded-full"></Avatar>
        </div>
        <div className="flex gap-6 mt-4 ml-32">
          <BoxRounded className="h-5 w-12 bg-neutral-900 rounded"></BoxRounded>
          <BoxRounded className="h-5 w-16 bg-neutral-200 rounded"></BoxRounded>
          <BoxRounded className="h-5 w-14 bg-neutral-200 rounded"></BoxRounded>
          <BoxRounded className="h-5 w-12 bg-neutral-200 rounded"></BoxRounded>
          <BoxRounded className="h-5 w-10 bg-neutral-200 rounded"></BoxRounded>
        </div>
      </div>
  )
}
