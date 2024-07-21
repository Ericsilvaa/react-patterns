import CollapsableSection from '../collapsable/CollapsableSection'
import { menuDevelopment, menuPlanning } from './constants'
import { DraggableSidebar } from './DraggableSidebar'
import { MenuItemProps, MenuItemTypes } from './types'

export const Sidebar = () => {
  return (
    <DraggableSidebar>
      <Header />
      <PlanningSection />
      <DevelopmentSection />
      other Sections
    </DraggableSidebar>
  )
}

const Header = () => <div className='sidebar-header'>ELS project</div>

const MenuItem = ({ title, path }: MenuItemTypes) => {
  const navigationItem = () => {
    console.log(path)
  }

  return (
    <li>
      <button onClick={navigationItem}>{title}</button>
    </li>
  )
}

const MenuSectionList = ({ menu }: MenuItemProps) => {
  return (
    <ul>
      {menu.map(({ path, title }) => (
        <MenuItem key={path} {...{ path, title }} />
      ))}
    </ul>
  )
}

const PlanningSection = () => {
  return (
    <CollapsableSection title='Planning'>
      <button className='board-picker'>ELS board</button>

      <MenuSectionList menu={menuPlanning} />
    </CollapsableSection>
  )
}

const DevelopmentSection = () => {
  return (
    <CollapsableSection title='development'>
      <button className='board-picker'>Dev board</button>
      <MenuSectionList menu={menuDevelopment} />
    </CollapsableSection>
  )
}

export default Sidebar
