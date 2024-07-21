import { AuthProps } from '../types'
import Profile from './Profile'

function Header({ loggedIn, handleSetLoggedIn }: AuthProps) {
  return (
    <>
      <Profile loggedIn={loggedIn} handleSetLoggedIn={handleSetLoggedIn} />
    </>
  )
}

export { Header }
