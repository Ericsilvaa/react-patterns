import { PropsWithChildren } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Topbar from '../components/topbar/Topbar'

const JiraPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='app'>
      <Topbar />
      <div className='main-content'>
        <Sidebar />
        <div className='page-content'>{children}</div>
      </div>
    </div>
  )
}

export default JiraPageLayout
