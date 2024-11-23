import Image from 'next/image'

import { Avatar, FeatureCard, Tag } from '@/components'
import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg'
import avatar2 from '@/assets/images/avatar-lula-meyers.jpg'
import avatar3 from '@/assets/images/avatar-florence-shaw.jpg'
import avatar4 from '@/assets/images/avatar-owen-garcia.jpg'
const features = ['Asset Library', 'Code Preview', 'Flow Mode', 'Smart Sync', 'Auto Layout', 'Fast Search', 'Smart Guides']

export const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCard
            className="md:col-span-2 lg:col-span-1 group"
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free learn editing"
          >
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-30" src={avatar1} alt="Avatar 1" />
              <Avatar className="z-20 -ml-6 border-indigo-600" src={avatar2} alt="Avatar 2" />
              <Avatar className="-ml-6 z-10 border-amber-500" src={avatar3} alt="Avatar 3" />
              <div className="-ml-6 rounded-full size-20 overflow-hidden border-4 border-transparent group-hover:border-emerald-400 transition-all p-1 bg-neutral-900">
                <div className="size-full bg-neutral-700 rounded-full flex items-center justify-center gap-1 relative">
                  <Image src={avatar4} alt="Avatar 4" className="absolute size-full rounded-full opacity-0 transition-all group-hover:opacity-100" />
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="size-1.5 rounded-full bg-white inline-flex"></div>
                  ))}
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            className="md:col-span-2 lg:col-span-1 group"
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that react to user actions"
          >
            <div className="aspect-video grid place-items-center">
              <p className="text-4xl font-extrabold text-white/20 transition duration-500 group-hover:text-white/5 text-center">
                We&apos;ve achieved{' '}
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                  <span>incredible</span>
                  <video
                    src="/assets/gif-incredible.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500"
                  />
                </span>{' '}
                growth this year
              </p>
            </div>
          </FeatureCard>

          <FeatureCard
            className="md:col-start-2 md:col-span-2 lg:col-span-1 lg:col-start-auto group"
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs incre quickly"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <div className="bg-neutral-300 text-neutral-950 text-xl size-14 grid place-items-center rounded-2xl outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 w-28">
                shift
              </div>
              <div className="bg-neutral-300 text-neutral-950 text-xl size-14 grid place-items-center rounded-2xl outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 delay-150">
                alt
              </div>
              <div className="bg-neutral-300 text-neutral-950 text-xl size-14 grid place-items-center rounded-2xl outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 delay-300">
                C
              </div>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map(feature => (
            <div
              key={feature}
              className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
            >
              <span className="bg-lime-400 size-5 text-neutral-950 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-90 transition duration-500">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
