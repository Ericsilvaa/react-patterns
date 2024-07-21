import { renderProps } from '../types'

const RenderPropsWrapper = ({ render }: renderProps) => (
  <div className='form-container'>{render()}</div>
)

export default RenderPropsWrapper
