import Image from 'next/image'
import Link from 'next/link'

import { IconMenu } from '@/assets'
import logoImage from '@/assets/images/logo.svg'
import { Button } from '@/components'
import { cn } from '@/styles'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'FAQs', href: '#faqs' },
]

export const Navbar = () => {
  return (
    <section className="sticky top-0 z-40 py-4 lg:py-8">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 bg-neutral-950/50 backdrop-blur-lg lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
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
                  className={cn('text-white/35 hover:underline', {
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
              <IconMenu />
            </button>
            <Button className="hidden md:block" variant="secondary">
              Log In
            </Button>
            <Button className="hidden md:block">Sign Up</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
