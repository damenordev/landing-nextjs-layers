import { cn } from '@/styles'

import { IconWrapper, IIconProps } from './IconWrapper'

export const IconMousePointer: React.FC<IIconProps> = ({ className, ...svgProps }) => {
  return (
    <IconWrapper className={cn('feather feather-mouse-pointer', className)} {...svgProps}>
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
      <path d="M13 13l6 6"></path>
    </IconWrapper>
  )
}
