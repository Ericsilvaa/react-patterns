import CollapsableSection from '../collapsable/CollapsableSection'

const MainMenu = () => {
  return (
    <div>
      <CollapsableSection title='Projects'>
        <div>Project 1</div>
        <div>Project 2</div>
      </CollapsableSection>
      <CollapsableSection title='Dashboard'>
        <div>Project 1</div>
        <div>Project 2</div>
      </CollapsableSection>
      <CollapsableSection title='Apps'>
        <div>Project 1</div>
        <div>Project 2</div>
      </CollapsableSection>
    </div>
  )
}

export default MainMenu
