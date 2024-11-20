import { cn } from "@/styles"

export interface IFeatureCardProps extends React.PropsWithChildren {
  title: string
  description: string
  className?: string
}

export const FeatureCard: React.FC<IFeatureCardProps> = ({ children, className, title, description }) => {
  return (
    <div className={cn('bg-neutral-900 border border-neutral-800 rounded-3xl p-6', className)}>
      <div className="aspect-video">{children}</div>
      <div>
        <h3 className="text-3xl font-medium mt-6">{title}</h3>
        <p className="text-white/50 mt-2">{description}</p>
      </div>
    </div>
  )
}
