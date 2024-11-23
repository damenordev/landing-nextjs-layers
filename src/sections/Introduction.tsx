'use client'
import { useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { Tag } from '@/components'
import { cn } from '@/styles'

const text = `Your creative process deserves better. You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`
const words = text.split(' ')

export const Introduction = () => {
  const scrollTargetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: scrollTargetRef, offset: ['start end', 'end end'] })

  const [currentWord, setCurrentWord] = useState(0)
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])

  useEffect(() => {
    wordIndex.on('change', setCurrentWord)
  }, [wordIndex])

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-28 lg:top-32">
          <div className="flex justify-center">
            <Tag>Introducing Layers</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className={cn('transition duration-500 text-white/15', { 'text-white': wordIndex < currentWord })}>{`${word} `}</span>
            ))}
            <span className="text-lime-400 block">That&apos;s why we built Layers.</span>
          </div>
        </div>
        <div ref={scrollTargetRef} className="h-[150vh]"></div>
      </div>
    </section>
  )
}
