import { IconMousePointer } from '@/assets'
import { cn } from '@/styles'

export interface IPointerProps {
  name: string
  color?: 'red' | 'blue'
}

export const Pointer: React.FC<IPointerProps> = ({ name, color = 'blue' }) => {
  return (
    <div className="relative">
      <IconMousePointer className="text-white" size={20} />
      <div className="absolute top-full left-full">
        <div
          className={cn('inline-flex rounded-full font-bold text-sm px-2 rounded-tl-none text-white', {
            'bg-red-500': color === 'red',
            'bg-blue-500': color === 'blue',
          })}
        >
          {name}
        </div>
      </div>
    </div>
  )
}
