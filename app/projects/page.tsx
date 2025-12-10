'use client'

import GithubIcon from '@/components/GithubIcon'
import projects from '../../data/allProjects.json'
import ExternalLinkIcon from '@/components/ExternalLinkIcon'
import { useState } from 'react'

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string>('All')

  const getTechList = () => {
    const list: string[] = []
    projects.forEach((project) => {
      project.tech.forEach((item: string) => list.push(item))
    })
    return Array.from(new Set(list))
  }
  const handleFilterClick = (tech: string) => {
    setSelectedTech(tech)
  }

  const filteredProjects =
    selectedTech === 'All'
      ? projects
      : projects.filter((project) => project.tech.includes(selectedTech))

  const techList = ['All', ...getTechList()]

  return (
    <div className="bg-[radial-gradient(circle_at_center,_var(--color-brandRed)_60%,_color-mix(in_lab,_var(--color-brandRed)_80%,_white_20%)_100%)] text-brandCream px-4 md:px-8 pb-8 pt-[80px]">
      <div className="flex flex-col justify-center text-center py-8 max-w-[1150px] mx-auto">
        <h2 className="text-5xl pt-8 pb-12">Projects 👩‍💻</h2>
        {/* filter section */}
        <h3 className="text-3xl pt-8 pb-8">Filter by tech:</h3>
        <div className="flex flex-row justify-center flex-wrap pb-16 gap-4 text-xl lg:text-2xl">
          {techList.map((item: any, index: number) => {
            const isActive = selectedTech === item
            return (
              <button
                key={index}
                onClick={() => handleFilterClick(item)}
                className={`py-2 px-5 rounded-full cursor-pointer transition
                  ${
                    isActive
                      ? 'bg-brandBlack text-brandCream'
                      : 'bg-brandCream text-brandBlack'
                  }`}
              >
                {item}
              </button>
            )
          })}
        </div>
        {/* results section */}
        <div className="flex flex-row flex-wrap gap-6 justify-center text-brandBlack">
          {filteredProjects.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full max-w-[360px] rounded bg-brandCream flex flex-col shadow-lg"
            >
              <div className="max-w-[360px] overflow-hidden h-[85%] bg-brandRed">
                {item.imageSrc ? (
                  <img
                    src={item.imageSrc}
                    alt=""
                    loading="lazy"
                    className="object-cover rounded"
                    role="presentation"
                  />
                ) : (
                  <></>
                )}
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-semibold pb-2 text-xl text-center">
                    {item.title}
                  </h3>
                  <p className="text-lg text-center">{item.description}</p>
                </div>
                {item.repo || item.link ? (
                  <div className="flex flex-row flex-nowrap justify-center gap-3 lg:gap-6 pt-4">
                    {item.repo && (
                      <a
                        href={item.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open GitHub account"
                        className="fill-brandCream self-end flex flex-col justify-center my-auto cursor-pointer p-3 rounded-full bg-brandBlack hover:bg-brandRed focus:bg-brandRed hover:fill-brandCream focus:fill-brandCream w-fit"
                      >
                        <GithubIcon />
                      </a>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open site"
                        className="fill-brandCream self-end flex flex-col justify-center my-auto cursor-pointer p-3 rounded-full bg-brandBlack hover:bg-brandRed focus:bg-brandRed hover:fill-brandCream focus:fill-brandCream w-fit"
                      >
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
