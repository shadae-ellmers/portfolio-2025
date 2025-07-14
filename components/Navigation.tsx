'use client'

import Link from 'next/link'
import LinkedInIcon from './LinkedInIcon'
import GithubIcon from './GithubIcon'
import useIsMobile from './useIsMobile'
import HamburgerIcon from './HamburgerIcon'
import MobileNavigation from './MobileNavigation'
import Image from 'next/image'

export default function Navigation() {
  const isMobile = useIsMobile()

  return (
    <nav
      className={` text-neutral-800  flex flex-row justify-between ${
        isMobile ? 'bg-transparent' : 'px-5 py-4 bg-red-50'
      }`}
    >
      {isMobile ? (
        <MobileNavigation />
      ) : (
        <div className="flex flex-row justify-between w-full">
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
            <h1 className="font-semibold text-4xl flex flex-row my-auto justify-start">
              Shadae Ellmers
            </h1>
          </div>

          <div className="flex flex-row justify-end gap-3 lg:gap-6 pl-6">
            <Link
              className="text-xl lg:text-2xl bg-neutral-800 py-2 px-5 my-auto text-red-50 rounded-full hover:text-neutral-800 hover:bg-red-400"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-xl lg:text-2xl bg-neutral-800 py-2 px-5 my-auto text-red-50 rounded-full hover:text-neutral-800 hover:bg-red-400"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="text-xl lg:text-2xl bg-neutral-800 py-2 px-5 my-auto text-red-50 rounded-full hover:text-neutral-800 hover:bg-red-400"
              href="/about"
            >
              About
            </Link>
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
      )}
    </nav>
  )
}
