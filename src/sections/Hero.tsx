'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'

import designExample1Image from '@/assets/images/design-example-1.png'
import designExample2Image from '@/assets/images/design-example-2.png'
import cursorYoutubeImage from '@/assets/images/cursor-you.svg'
import { Button, Pointer } from '@/components'

export const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate()
  const [leftPointerScope, leftPointerAnimate] = useAnimate()
  const [rightDesignScope, rightDesignAnimate] = useAnimate()
  const [rightPointerScope, rightPointerAnimate] = useAnimate()

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ])
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: 'easeInOut' }],
    ])
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ])
    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5, ease: 'easeInOut' }],
    ])
  }, [])

  return (
    <section
      className="py-24 overflow-x-clip pt-40 md:pt-24"
      style={{
        cursor: `url(${cursorYoutubeImage.src}), auto`,
      }}
    >
      <div className="container relative">
        <motion.div ref={leftDesignScope} className="hidden lg:block absolute -left-32 top-16" initial={{ opacity: 0, y: 100, x: -100 }} drag>
          <Image src={designExample1Image} alt="Design example 1 image" draggable={false} />
        </motion.div>
        <motion.div ref={leftPointerScope} className="hidden lg:block absolute left-56 top-96" initial={{ opacity: 0, y: 100, x: -200 }}>
          <Pointer name="Andrea" />
        </motion.div>
        <motion.div ref={rightDesignScope} className="hidden lg:block absolute -right-64 -top-16" initial={{ opacity: 0, y: 100, x: 100 }} drag>
          <Image src={designExample2Image} alt="Design example 2 image" draggable={false} />
        </motion.div>
        <motion.div ref={rightPointerScope} className="hidden lg:block absolute top-0 right-80" initial={{ opacity: 0, y: 100, x: 275 }}>
          <Pointer name="Bryan" color="red" />
        </motion.div>

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
