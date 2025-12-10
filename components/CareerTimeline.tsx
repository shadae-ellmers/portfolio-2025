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

export default function CareerTimeline({ events }: EventsProp) {
  return (
    <div className="relative container mx-auto pt-8 px-4 mb-[64px]">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-brandCream h-full"></div>

      {events.map((event, index) => (
        <div
          key={index}
          className="mb-8 flex justify-between items-center w-full flex-row"
        >
          <div className="w-1/2 text-right pr-6">
            {index % 2 === 0 && (
              <TimelineItem
                title={event.title}
                date={event.date}
                description={event.description}
                location={event.location}
                position="right"
              />
            )}
          </div>

          <div className="relative w-8 h-8 flex items-center justify-center">
            <span className="absolute w-4 h-4 bg-brandCream rounded-full"></span>
          </div>

          <div className="w-1/2 text-left pl-6">
            {index % 2 !== 0 && (
              <TimelineItem
                title={event.title}
                date={event.date}
                description={event.description}
                location={event.location}
                position="left"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
