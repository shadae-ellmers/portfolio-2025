'use client'

import { useState } from 'react'
import HamburgerIcon from './HamburgerIcon'
import CloseIcon from './CloseIcon'
import Link from 'next/link'
import Image from 'next/image'

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <div
      className={`w-full bg-brandCream ${
        isOpen ? '' : 'shadow-md shadow-brandBlack/10 '
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
              priority
            />
          </div>
          <h1 className="font-semibold pr-4 text-2xl sm:text-3xl flex flex-row my-auto justify-start">
            Shadae Ellmers
          </h1>
        </div>
        <button
          onClick={toggleMenu}
          className="text-brandCream bg-brandBlack rounded-full my-auto p-2 cursor-pointer hover:bg-brandRed hover:text-brandCream focus:bg-brandRed focus:text-brandCream"
          aria-label={`${isOpen ? 'Close navigation' : 'Open navigation'}`}
        >
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:hidden bg-brandCream relative w-full space-y-4 py-5 shadow-md shadow-brandBlack/10`}
        aria-hidden={isOpen ? 'false' : 'true'}
      >
        <div className="flex flex-col md:flex-row justify-center gap-6 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl bg-brandBlack py-2 px-5 mx-auto md:mx-0 text-brandCream rounded-full hover:text-brandCream hover:bg-brandRed focus:text-brandCream focus:bg-brandRed"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
