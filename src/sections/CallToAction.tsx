'use client'
import { AnimationPlaybackControls, motion, useAnimate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export const CallToAction = () => {
  const [isHovered, setIsHovered] = useState(false)
  const animation = useRef<AnimationPlaybackControls>()
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animation.current = animate(scope.current, { x: '-50%' }, { duration: 30, ease: 'linear', repeat: Infinity })
  }, [])
  useEffect(() => {
    if (!animation.current) return
    animation.current.speed = isHovered ? 0.25 : 1
  }, [isHovered])

  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 font-medium group cursor-pointer select-none"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span className="text-7xl md:text-8xl group-hover:text-lime-400">Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
