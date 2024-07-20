import { PropsWithChildren } from 'react'
import { useToggle } from '../components/compound/compound-toggle/useToggle'

interface ModalProps extends PropsWithChildren {}

const Modal = ({ children }: ModalProps) => {
  const { on, toggle } = useToggle()

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Verifica se o clique foi diretamente no overlay e não dentro do modal
    if (e.target === e.currentTarget) {
      // Fecha o modal
      // toggle
      toggle()
    }
  }

  if (!on) return null

  return (
    <div className='modalOverlay' onClick={handleOverlayClick}>
      <div className='modal'>{children}</div>
    </div>
  )
}

export { Modal }
