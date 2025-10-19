'use client'

import projects from '../data/projects.json'
import React from 'react'
import GithubIcon from './GithubIcon'
import ExternalLinkIcon from './ExternalLinkIcon'

export default function Projects() {
  return (
    <div
      id="projects"
      className="text-brandBlack flex flex-col justify-start text-center py-8 pt-[112px] mt-[-80px] max-w-[1150px] mx-auto"
    >
      <h2 className="text-4xl font-semibold pb-8 text-brandCream">Projects</h2>
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        {projects.map((item: any, index: number) => (
          <div
            key={index}
            className="w-full max-w-[360px] rounded bg-red-50 flex flex-col shadow-lg"
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
  )
}
