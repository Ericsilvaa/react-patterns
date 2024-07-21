import { ToggleProps } from '../../shared/types'
import { useToggle } from '../hooks/useToggle'

const ToggleOff = ({ children }: ToggleProps) => {
  const { on } = useToggle()
  return on ? null : <>{children}</>
}

export { ToggleOff }
