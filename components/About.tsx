'use client'

import CareerTimeline from './CareerTimeline'
import MobileTimeline from './MobileTimeline'
import useIsMobile from './useIsMobile'

const timelineData = [
  {
    date: 'July 2025',
    title: 'Career',
    description: 'Intermediate Full Stack Software Developer',
    location: 'Signify Limited',
  },
  {
    date: 'July 2023',
    title: 'Career',
    description: 'Junior Full Stack Software Developer',
    location: 'Signify Limited',
  },
  {
    date: 'May 2023',
    title: 'Education',
    description: 'New Zealand Certificate in Applied Software Development',
    location: 'Dev Academy Aotearoa',
  },
  {
    date: 'February 2022',
    title: 'Education',
    description: 'Bachelor of Biomedical Science in Molecular Pathology',
    location: 'Victoria University of Wellington',
  },
]

export default function About() {
  const isMobile = useIsMobile()

  return (
    <div
      id="about"
      className="flex flex-col justify-center py-8 pt-[112px] mt-[-80px] text-center max-w-[1150px] mx-auto"
    >
      <h2 className="text-4xl font-semibold pb-8">About me</h2>
      <p className="text-lg pb-5">
        I've always had a knack for creative hobbies, and after picking up
        coding courses online in my gap year, I discovered my love for coding.
        Since then I have attended Dev Academy Aotearoa, which further developed
        my tech skills and soft skills. Currently I am working as an
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
  )
}
