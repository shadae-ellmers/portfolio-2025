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
    <div className="bg-brandCream p-4 rounded shadow-lg inline-block text-brandBlack">
      <div
        className={`w-full pb-2 flex ${
          position === 'right' ? 'justify-end' : 'justify-start'
        }`}
      >
        {title === 'Education' && <CapIcon />}
        {title === 'Career' && <BriefcaseIcon />}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <h4 className="font-semibold">{description}</h4>
      <p className="mt-1">{location}</p>
      <span className="mt-1 text-sm">{date}</span>
    </div>
  )
}
