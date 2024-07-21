import { useState } from 'react'

type Props = {
  children: React.ReactNode
  title: string
}

const CollapsableSection = ({ children, title }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className='sidebar-section'>
      <div
        className='sidebar-section-title'
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {title}
      </div>

      {!isCollapsed && <>{children}</>}
    </div>
  )
}

export default CollapsableSection
