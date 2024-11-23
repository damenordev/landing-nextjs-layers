import { Button, Pointer } from '@/components'
import designExample1Image from '@/assets/images/design-example-1.png'
import designExample2Image from '@/assets/images/design-example-2.png'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="py-24 overflow-x-clip pt-40 md:pt-24">
      <div className="container relative">
        <div className="hidden lg:block absolute -left-32 top-16">
          <Image src={designExample1Image} alt="Design example 1 image" />
        </div>
        <div className="hidden lg:block absolute -right-64 -top-16">
          <Image src={designExample2Image} alt="Design example 2 image" />
        </div>

        <div className="hidden lg:block absolute left-56 top-96">
          <Pointer name="Andrea" />
        </div>
        <div className="hidden lg:block absolute top-0 right-80">
          <Pointer name="Bryan" color="red" />
        </div>

        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            💫 $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center text-balance mt-6">Impactful design, created effortlessly</h1>
        <p className="text-center text-balance text-xl text-neutral-600 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powrful features with an intuitive interface that keeps you in your creative flow.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input className="flex-1 bg-transparent px-4 outline-none w-full" type="email" placeholder="Enter your email" />
          <Button className="whitespace-nowrap" size="sm" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  )
}
