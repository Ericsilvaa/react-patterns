import { useState } from 'react'

const OtherSection = () => {
  return (
    <div className='sidebar-section'>
      <ul className='section-menu'>
        <li>
          <AddShortcutItem />
        </li>
      </ul>
    </div>
  )
}

const ModalDialog = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

const AddShortcutItem = () => {
  const [showAddShortcuts, setShowAddShortcuts] = useState(false)

  return (
    <>
      <span onClick={() => setShowAddShortcuts(true)}>Add shortcuts</span>
      {showAddShortcuts && (
        <ModalDialog onClose={() => setShowAddShortcuts(false)} />
      )}
    </>
  )
}
