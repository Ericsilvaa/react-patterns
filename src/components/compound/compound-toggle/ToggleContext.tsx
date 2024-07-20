import React from 'react'

type ToggleValue = {
  on: boolean
  toggle: () => void
}

// # ToggleContext will be used to pass the state and the toggle function to the children
const ToggleContext = React.createContext<ToggleValue | null>(null)

const ToggleProvider = ({ children }: React.PropsWithChildren) => {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return (
    <ToggleContext.Provider value={{ toggle, on }}>
      {children}
    </ToggleContext.Provider>
  )
}

export { ToggleContext, ToggleProvider }
