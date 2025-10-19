'use client'

import BriefcaseIcon from './BriefcaseIcon'
import CapIcon from './CapIcon'

type ItemProps = {
  title: string
  date: string
  description: string
  location: string
  position: string
}

export default function TimelineItem({
  title,
  date,
  description,
  location,
  position,
}: ItemProps) {
  return (
    <div className="bg-red-50 p-4 rounded shadow-lg inline-block text-brandBlack">
      <div
        className={`w-full pb-2 flex ${
          position === 'right' ? 'justify-end' : 'justify-start'
        }`}
      >
        {title === 'Education' && <CapIcon />}
        {title === 'Career' && <BriefcaseIcon />}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <span className="text-sm ">{date}</span>
      <p className="mt-1">{description}</p>
      <p className="mt-1">{location}</p>
    </div>
  )
}
