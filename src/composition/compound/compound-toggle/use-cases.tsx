import { Modal } from '../../../shared/Modal'
import { ToggleButton } from './components/ToggleButton'
import { ToggleOff } from './components/ToggleOff'
import { ToggleOn } from './components/ToggleOn'
import { ToggleProvider } from './context/ToggleContext'

const ContainerToggle = () => {
  return (
    <ToggleProvider>
      <ToggleOn>The button is on</ToggleOn>
      <ToggleOff>The button is off</ToggleOff>
      <ToggleButton />
    </ToggleProvider>
  )
}

const ContainerToggleModal = () => {
  return (
    <ToggleProvider>
      <ToggleOn>
        <Modal>
          <h1 className=''>The modal is open</h1>
        </Modal>
      </ToggleOn>
      <ToggleOff>
        <h1 className=''>The modal is closed</h1>
      </ToggleOff>
      <ToggleButton />
    </ToggleProvider>
  )
}

export { ContainerToggle, ContainerToggleModal }
