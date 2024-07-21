// FormStep.js

import { FormStepProps } from '../types'

const FormStep = ({ stepNumber, children }: FormStepProps) => (
  <div className='form-step'>
    <h2>Step {stepNumber}</h2>
    {children}
  </div>
)

export default FormStep
