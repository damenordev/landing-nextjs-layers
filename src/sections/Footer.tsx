import Image from 'next/image'

import logoImage from '@/assets/images/logo.svg'

const footerLinks = [
  { href: 'https://cv.damenor.dev', label: 'Contact', target: '_blank' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms & Conditions' },
]

export const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="flex flex-co md:flex-row items-center md:justify-between gap-6">
          <div>
            <Image className="h-9 md:h-auto w-auto" src={logoImage} alt="logo" />
          </div>
          <div>
            <nav className="flex gap-6">
              {footerLinks.map(link => (
                <a key={link.label} href={link.href} target={link.target} className="text-white/50 text-sm">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
