'use client'

import { useState } from 'react'
import HamburgerIcon from './HamburgerIcon'
import CloseIcon from './CloseIcon'
import Link from 'next/link'
import LinkedInIcon from './LinkedInIcon'
import GithubIcon from './GithubIcon'
import Image from 'next/image'

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div
      className={`w-full bg-red-50 ${
        isOpen ? '' : 'shadow-md shadow-neutral-800/10 '
      }`}
    >
      <div className="flex flex-row justify-between px-5 py-4">
        <div className="flex flex-row justify-start">
          <div className="pr-4 flex flex-col justify-center">
            <Image
              src="/images/memoji.png"
              alt=""
              width="40"
              height="40"
              loading="lazy"
            />
          </div>
          <h1 className="font-semibold pr-4 text-3xl flex flex-row my-auto justify-start">
            Shadae Ellmers
          </h1>
        </div>
        <button
          onClick={toggleMenu}
          className="text-red-50 bg-neutral-800 rounded-full my-auto p-2 cursor-pointer hover:bg-red-400 hover:text-neutral-800"
          aria-label={`${isOpen ? 'Close navigation' : 'Open navigation'}`}
        >
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-red-50 relative w-full space-y-4 py-5 shadow-md shadow-neutral-800/10`}
        aria-hidden={isOpen ? 'false' : 'true'}
      >
        <div className="flex flex-col justify-center gap-6 font-medium">
          <Link
            className="text-2xl bg-neutral-800 py-2 px-5 mx-auto text-red-50 rounded-full hover:text-neutral-800 hover:bg-red-400"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-2xl bg-neutral-800 py-2 px-5 mx-auto text-red-50 rounded-full hover:text-neutral-800 hover:bg-red-400"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-2xl bg-neutral-800 py-2 px-5 mx-auto text-red-50 rounded-full hover:text-neutral-800 hover:bg-red-400"
            href="/about"
          >
            About
          </Link>
        </div>
        <div className="flex flex-row justify-center gap-6 pt-5 pb-10">
          <button
            aria-label="Open LinkedIn account"
            className="fill-white flex flex-col justify-center my-auto cursor-pointer p-3 rounded-full bg-neutral-800 hover:bg-red-400 hover:fill-neutral-800"
          >
            <LinkedInIcon />
          </button>
          <button
            aria-label="Open GitHub account"
            className="fill-white flex flex-col justify-center my-auto cursor-pointer p-3 rounded-full bg-neutral-800 hover:bg-red-400 hover:fill-neutral-800"
          >
            <GithubIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
