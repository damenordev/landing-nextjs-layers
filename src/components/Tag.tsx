import { cn } from '@/styles'

export interface ITagProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export const Tag: React.FC<ITagProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn('inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center', className)} {...props}>
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  )
}
