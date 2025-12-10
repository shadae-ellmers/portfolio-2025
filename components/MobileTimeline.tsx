'use client'

import TimelineItem from './TimelineItem'

type Event = {
  date: string
  title: string
  description: string
  location: string
}

type EventsProp = {
  events: Event[]
}

export default function MobileTimeline({ events }: EventsProp) {
  return (
    <div className="relative container mx-auto pt-6 px-6 mb-[64px]">
      <div className="absolute transform -translate-x-1/2 w-1 bg-brandCream h-full"></div>

      {events.map((event, index) => (
        <div
          key={index}
          className="mb-8 last:mb-0 flex justify-between items-center w-full flex-row"
        >
          <div className="absolute w-8 h-8 flex items-center justify-center">
            <span className="absolute right-6 w-4 h-4 bg-brandCream rounded-full"></span>
          </div>
          <div className="w-full text-left pl-6 sm:pl-10">
            <TimelineItem
              title={event.title}
              date={event.date}
              description={event.description}
              location={event.location}
              position="left"
            />
          </div>
        </div>
      ))}
    </div>
  )
}
