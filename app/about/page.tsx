'use client'

import CareerTimeline from '@/components/CareerTimeline'
import MobileTimeline from '@/components/MobileTimeline'
import useIsMobile from '@/components/useIsMobile'
import timelineData from '../../data/timeline.json'

export default function About() {
  const isMobile = useIsMobile()

  return (
    <div className="bg-[radial-gradient(circle_at_center,_var(--color-brandRed)_60%,_color-mix(in_lab,_var(--color-brandRed)_80%,_white_20%)_100%)] text-brandCream px-4 md:px-8 pb-8 pt-[80px]">
      <div className="flex flex-col justify-center text-center py-8 max-w-[1150px] mx-auto">
        <h2 className="text-5xl pt-8 pb-12">About me 💁🏻‍♀️</h2>
        <p className="text-lg pb-5">
          I've always had a knack for creative hobbies, and after picking up
          coding courses online in my gap year, I discovered my love for coding.
          Since then I have attended Dev Academy Aotearoa, which further
          developed my tech skills and soft skills. Currently I am working as an
          intermediate full stack software developer, with a focus on projects
          using React and APIs.
        </p>
        <p className="text-lg pb-5">
          As a wahine Māori, I am passionate about uplifting disadvantaged
          communities, and want to achieve this while creating artistic and
          accessible tech. I'm constantly thinking of ways to improve others'
          lives, and tech has provided the perfect outlet for this.
        </p>
        {isMobile ? (
          <MobileTimeline events={timelineData} />
        ) : (
          <CareerTimeline events={timelineData} />
        )}
      </div>
    </div>
  )
}
