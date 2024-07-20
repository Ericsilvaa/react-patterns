import React from 'react'
import { Switch } from '../../../shared/switch'
import { useToggle } from './useToggle'

interface Props extends React.PropsWithChildren {}
// // # Toggle will act as a wrapper for the children = ToggleProvider
// const Toggle = ({ children }: Props) => {
//   const [on, setOn] = React.useState(false)
//   const toggle = () => setOn(!on)

//   return (
//     <ToggleContext.Provider value={{ toggle, on }}>
//       {children}
//     </ToggleContext.Provider>
//   )
// }

const ToggleOn = ({ children }: Props) => {
  const { on } = useToggle()
  return on ? <>{children}</> : null
}

const ToggleOff = ({ children }: Props) => {
  const { on } = useToggle()
  return on ? null : <>{children}</>
}

const ToggleButton = (props: React.ComponentProps<'button'>) => {
  const { on, toggle } = useToggle()
  return <Switch on onClick={toggle} aria-pressed={on} {...props} />
}

export { ToggleButton, ToggleOff, ToggleOn }
