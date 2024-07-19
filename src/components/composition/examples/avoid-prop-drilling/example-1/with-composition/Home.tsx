import React from 'react'
import { Header } from './Header'
import Profile from './Profile'

export default function HomeComposition() {
  const [loggedIn, setLoggedIn] = React.useState(false)

  const handleSetLoggedIn = () => {
    setLoggedIn(!loggedIn)
  }

  return (
    <Header>
      <Profile loggedIn={loggedIn} handleSetLoggedIn={handleSetLoggedIn} />
    </Header>
  )
}
