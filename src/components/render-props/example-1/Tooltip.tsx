import { TooltipProps } from '../types'

const Tooltip = ({ render, children }: TooltipProps) => (
  <div className='tooltip'>
    {children}
    {render()}
  </div>
)

export default Tooltip
