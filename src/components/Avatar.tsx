import Image, { type ImageProps } from 'next/image'

import { cn } from '@/styles'

export interface IAvatarProps extends ImageProps {
  className?: string
}

export const Avatar: React.FC<IAvatarProps> = ({ className, src, alt, ...imageProps }) => {
  return (
    <div className={cn('rounded-full size-20 overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900', className)}>
      <Image className="rounded-full" src={src} alt={alt} {...imageProps} />
    </div>
  )
}
