import { Avatar, FeatureCard, Tag } from '@/components'

import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg'
import avatar2 from '@/assets/images/avatar-lula-meyers.jpg'
import avatar3 from '@/assets/images/avatar-florence-shaw.jpg'

const features = ['Asset Library', 'Code Preview', 'Flow Mode', 'Smart Sync', 'Auto Layout', 'Fast Search', 'Smart Guides']

export const Features = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <FeatureCard className="md:col-span-2 lg:col-span-1" title="Real-time Collaboration" description="Work together seamlessly with conflict-free learn editing">
            <div className="aspect-video flex items-center justify-center">
              <Avatar className="z-30" src={avatar1} alt="Avatar 1" />
              <Avatar className="z-20 -ml-6 border-indigo-600" src={avatar2} alt="Avatar 2" />
              <Avatar className="-ml-6 z-10 border-amber-500" src={avatar3} alt="Avatar 3" />
              <div className="-ml-6 rounded-full size-20 overflow-hidden border-4 border-transparent p-1 bg-neutral-900">
                <div className="size-full bg-neutral-700 rounded-full flex items-center justify-center gap-1">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="size-1.5 rounded-full bg-white inline-flex"></div>
                  ))}
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard className="md:col-span-2 lg:col-span-1" title="Interactive Prototyping" description="Engage your clients with prototypes that react to user actions">
            <div className="aspect-video grid place-items-center">
              <p className="text-4xl font-extrabold text-white/20 text-center">
                We&apos;ve achieved <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span> growth
                this year
              </p>
            </div>
          </FeatureCard>

          <FeatureCard
            className="md:col-start-2 md:col-span-2 lg:col-span-1 lg:col-start-auto"
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs incre quickly"
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <div className="bg-neutral-300 text-neutral-950 text-xl size-14 grid place-items-center rounded-2xl w-28">shift</div>
              <div className="bg-neutral-300 text-neutral-950 text-xl size-14 grid place-items-center rounded-2xl">alt</div>
              <div className="bg-neutral-300 text-neutral-950 text-xl size-14 grid place-items-center rounded-2xl">C</div>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map(feature => (
            <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center">
              <span className="bg-lime-400 size-5 text-neutral-950 rounded-full inline-flex items-center justify-center text-xl">&#10038;</span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
