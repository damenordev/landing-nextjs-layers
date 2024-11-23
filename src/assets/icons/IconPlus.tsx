import { cn } from '@/styles'

import { IconWrapper, IIconProps } from './IconWrapper'

export const IconPlus: React.FC<IIconProps> = ({ className, ...svgProps }) => {
  return (
    <IconWrapper className={cn('feather feather-plus', className)} {...svgProps}>
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </IconWrapper>
  )
}
