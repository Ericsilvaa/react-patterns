import React from 'react'
import { Header } from './Header'

export default function HomeWithoutComposition() {
  const [loggedIn, setLoggedIn] = React.useState(false)

  const handleSetLoggedIn = () => {
    setLoggedIn(!loggedIn)
  }

  return <Header loggedIn={loggedIn} handleSetLoggedIn={handleSetLoggedIn} />
}
