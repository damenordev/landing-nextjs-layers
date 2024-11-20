export interface IIconProps extends React.HTMLAttributes<SVGElement> {
  size?: number
}

export const IconWrapper: React.FC<IIconProps> = ({ children, className, size = 24, ...svgProps }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...svgProps}
    >
      {children}
    </svg>
  )
}
