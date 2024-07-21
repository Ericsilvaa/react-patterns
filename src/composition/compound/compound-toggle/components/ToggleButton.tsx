import { Switch } from '../../../../shared/switch'
import { useToggle } from '../hooks/useToggle'

const ToggleButton = (props: React.ComponentProps<'button'>) => {
  const { on, toggle } = useToggle()
  return <Switch on onClick={toggle} aria-pressed={on} {...props} />
}

export { ToggleButton }
