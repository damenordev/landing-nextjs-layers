import { Features, Hero, Integrations, Introduction, LogoTicker, Navbar } from '@/sections'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
    </>
  )
}
