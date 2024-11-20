import { cva, VariantProps } from 'class-variance-authority'

const classes = cva('border rounded-full px-6 font-medium transition-transform active:scale-95', {
  variants: {
    size: {
      sm: 'h-10',
      md: 'h-12',
      lg: 'h-14',
    },
    variant: {
      primary: 'bg-lime-400 border-lime-400 text-neutral-950',
      secondary: 'border-white text-white bg-transparent',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof classes> {}

export const Button: React.FC<IButtonProps> = ({ children, className, size, variant, ...buttonProps }) => {
  return (
    <button className={classes({ className, size, variant })} {...buttonProps}>
      {children}
    </button>
  )
}
