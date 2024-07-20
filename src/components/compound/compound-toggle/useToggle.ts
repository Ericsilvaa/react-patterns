import React from 'react'
import { ToggleContext } from './ToggleContext'

// # useToggle will be used to access the state and the toggle function
export const useToggle = () => {
  const context = React.useContext(ToggleContext)
  if (!context) {
    throw new Error('useToggle must be used within a <Toggle /> component')
  }
  return context
}
