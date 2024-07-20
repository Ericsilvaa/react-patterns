import CollapsableSection from '../collapsable/CollapsableSection'
import { DraggableSidebar } from './DraggableSidebar'

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

const PlanningSection = () => {
  return (
    <CollapsableSection title='Planning'>
      <button className='board-picker'>ELS board</button>

      <ul className='section-menu'>... all the menu items here</ul>
    </CollapsableSection>
  )
}

const DevelopmentSection = () => {
  return (
    <CollapsableSection title='development'>
      sidebar development section
    </CollapsableSection>
  )
}

export default Sidebar
