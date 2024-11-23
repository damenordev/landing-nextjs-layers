import { cn } from '@/styles'

import { IconWrapper, IIconProps } from './IconWrapper'

export interface IIconMenuAnimatedProps extends IIconProps {
  isOpen?: boolean
}

export const IconMenuAnimated: React.FC<IIconMenuAnimatedProps> = ({ className, isOpen, ...svgProps }) => {
  return (
    <IconWrapper className={cn('feather feather-menu', className)} {...svgProps}>
      <line x1="3" y1="6" x2="21" y2="6" className={cn('origin-left transition-transform', { 'rotate-45 -translate-y-1': isOpen })}></line>
      <line x1="3" y1="12" x2="21" y2="12" className={cn({ 'opacity-0': isOpen })}></line>
      <line x1="3" y1="18" x2="21" y2="18" className={cn('origin-left transition-transform', { '-rotate-45 translate-y-1': isOpen })}></line>
    </IconWrapper>
  )
}
