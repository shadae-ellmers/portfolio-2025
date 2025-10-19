'use client'

import EnvelopeIcon from './EnvelopeIcon'
import FileIcon from './FileIcon'
import GithubIcon from './GithubIcon'
import LinkedInIcon from './LinkedInIcon'

export default function Contact() {
  return (
    <div
      id="contact"
      className="py-8 flex flex-col justify-center text-center gap-3 lg:gap-6 pt-[80px] mt-[-80px] max-w-[1150px] mx-auto"
    >
      <h2 className="text-4xl font-semibold pb-5">The info essentials:</h2>
      <div className="pb-5 flex flex-row justify-center gap-3 lg:gap-6 mx-auto">
        <a
          href="https://www.linkedin.com/in/shadae-ellmers/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn account"
          className="fill-brandCream flex flex-col justify-center my-auto cursor-pointer p-3 rounded-full bg-brandBlack hover:bg-red-50 hover:fill-brandBlack focus:bg-red-50 focus:fill-brandBlack"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/shadae-ellmers"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub account"
          className="fill-brandCream flex flex-col justify-center my-auto cursor-pointer p-3 rounded-full bg-brandBlack hover:bg-red-50 hover:fill-brandBlack focus:bg-red-50 focus:fill-brandBlack"
        >
          <GithubIcon />
        </a>
        <a
          href="mailto:shadae.ell@gmail.com"
          aria-label="Send an email"
          className="fill-brandCream flex flex-col justify-center my-auto cursor-pointer p-3 rounded-full bg-brandBlack hover:bg-red-50 hover:fill-brandBlack focus:bg-red-50 focus:fill-brandBlack"
        >
          <EnvelopeIcon />
        </a>
        <a
          href="/files/ShadaeEllmersCV.pdf"
          aria-label="Download CV"
          className="fill-brandCream flex flex-col justify-center my-auto cursor-pointer p-3 rounded-full bg-brandBlack hover:bg-red-50 hover:fill-brandBlack focus:bg-red-50 focus:fill-brandBlack"
          download="Shadae Ellmers CV"
        >
          <FileIcon />
        </a>
      </div>
    </div>
  )
}
