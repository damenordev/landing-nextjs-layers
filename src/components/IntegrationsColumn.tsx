'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Fragment } from 'react'

import figmaIcon from '@/assets/images/figma-logo.svg'
import notionIcon from '@/assets/images/notion-logo.svg'
import slackIcon from '@/assets/images/slack-logo.svg'
import relumeIcon from '@/assets/images/relume-logo.svg'
import framerIcon from '@/assets/images/framer-logo.svg'
import githubIcon from '@/assets/images/github-logo.svg'
import { cn } from '@/styles'

const integrations = [
  { name: 'GitHub', icon: githubIcon, description: 'GitHub is the leading platform for code collaboration.' },
  { name: 'Framer', icon: framerIcon, description: 'Framer is a professional website prototyping tool.' },
  { name: 'Relume', icon: relumeIcon, description: 'Relume is a no-code website builder and design system.' },
  { name: 'Slack', icon: slackIcon, description: 'Slack is a powerful team communication platform.' },
  { name: 'Notion', icon: notionIcon, description: 'Notion is an all-in-one workspace for notes and docs.' },
  { name: 'Figma', icon: figmaIcon, description: 'Figma is a collaborative interface design tool.' },
]

export interface IIntegrationsColumnProps {
  className?: string
  isReverse?: boolean
}

export const IntegrationsColumn: React.FC<IIntegrationsColumnProps> = ({ className, isReverse }) => {
  const integrationsToShow = isReverse ? integrations.slice().reverse() : [...integrations]

  return (
    <motion.div
      animate={{ y: isReverse ? 0 : '-50%' }}
      initial={{ y: isReverse ? '-50%' : 0 }}
      transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      className={cn('flex flex-col gap-4 pb-4', className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrationsToShow.map(integration => (
            <div key={integration.name} className="bg-neutral-900 border border-white/10 rounded-3xl p-6">
              <div className="flex justify-center">
                <Image className="size-24" src={integration.icon} alt={`${integration.name} icon`} />
              </div>
              <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
              <p className="text-center text-white/50 mt-2">{integration.description}</p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  )
}
