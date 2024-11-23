'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

import { IconMenuAnimated } from '@/assets'
import logoImage from '@/assets/images/logo.svg'
import { Button } from '@/components'
import { cn } from '@/styles'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'FAQs', href: '#faqs' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prevState => !prevState)

  return (
    <section className="fixed w-full md:sticky top-0 z-40 py-4 lg:py-8">
      <div className="container max-w-5xl">
        <div className="bg-neutral-950/50 backdrop-blur-xl border border-white/15 rounded-[32px] md:rounde-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
            <div>
              <Link href="/">
                <Image className="h-9 md:h-auto w-auto" src={logoImage} alt="logo" />
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <nav className="flex gap-6 font-medium">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={cn('text-white/35 hover:underline text-white', {
                      'text-white': link.href === '#',
                    })}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex justify-end gap-4">
              <button className="p-2 rounded-full transition-all hover:bg-neutral-800 active:scale-95 md:hidden">
                <IconMenuAnimated isOpen={isOpen} onClick={toggleMenu} />
              </button>
              <Button className="hidden md:block" variant="secondary">
                Log In
              </Button>
              <Button className="hidden md:block">Sign Up</Button>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div className="overflow-hidden" initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
                <div className="flex flex-col items-center gap-4 py-4">
                  {navLinks.map(link => (
                    <a key={link.label} href={link.href}>
                      {link.label}
                    </a>
                  ))}
                  <Button variant="secondary">Log In</Button>
                  <Button>Sign Up</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
