import { cn } from '@/styles'

import { IconWrapper, IIconProps } from './IconWrapper'

export const IconMenu: React.FC<IIconProps> = ({ className, ...svgProps }) => {
  return (
    <IconWrapper className={cn('feather feather-menu', className)} {...svgProps}>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </IconWrapper>
  )
}
