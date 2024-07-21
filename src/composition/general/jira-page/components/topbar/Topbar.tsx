import CreateIssue from './CreateIssue'
import Logo from './Logo'
import MainMenu from './MainMenu'

export const Topbar = () => {
  return (
    <div className='top-bar'>
      <Logo />
      <MainMenu />
      <CreateIssue />
      more top bar items here like search bar and profile menu
    </div>
  )
}
export default Topbar
