'use client'

import Link from 'next/link'
import MobileNavigation from './MobileNavigation'
import Image from 'next/image'
import useIsTablet from './useIsTablet'

export default function Navigation() {
  const isTablet = useIsTablet()

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={` text-brandBlack  flex flex-row justify-between shadow-lg ${
        isTablet ? 'bg-transparent' : 'px-5 py-4 bg-red-50'
      }`}
    >
      {isTablet ? (
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
                priority
              />
            </div>
            <h1 className="font-semibold text-4xl flex flex-row my-auto justify-start">
              Shadae Ellmers
            </h1>
          </div>

          <div className="flex flex-row justify-end gap-3 lg:gap-6 pl-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl lg:text-2xl bg-brandBlack py-2 px-5 my-auto text-red-50 rounded-full hover:text-brandCream hover:bg-brandRed focus:text-brandCream focus:bg-brandRed"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
