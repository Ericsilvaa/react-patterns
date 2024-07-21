import { AuthProps } from '../types'

const Profile = ({ handleSetLoggedIn, loggedIn }: AuthProps) => {
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleSetLoggedIn}>
        {loggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

export default Profile
