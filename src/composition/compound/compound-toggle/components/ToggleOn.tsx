import { ToggleProps } from '../../shared/types'
import { useToggle } from '../hooks/useToggle'

const ToggleOn = ({ children }: ToggleProps) => {
  const { on } = useToggle()
  return on ? <>{children}</> : null
}

export { ToggleOn }
