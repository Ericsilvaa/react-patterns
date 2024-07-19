import FormStep from './FormStep'

type Props = {
  nextStep?: () => void
  prevStep?: () => void
}

const StepOne = ({ nextStep }: Props) => {
  return (
    <FormStep stepNumber={1}>
      <p>Content of Step 1</p>
      <button key='next' onClick={nextStep}>
        Next
      </button>
    </FormStep>
  )
}

const StepTwo = ({ nextStep, prevStep }: Props) => {
  return (
    <FormStep stepNumber={2}>
      <p>Content of Step 2</p>
      <button key='back' onClick={prevStep}>
        Back
      </button>
      <button key='next' onClick={nextStep}>
        Next
      </button>
    </FormStep>
  )
}

const StepThree = ({ prevStep }: Props) => {
  return (
    <FormStep stepNumber={3}>
      <p>Content of Step 3</p>
      <button key='back' onClick={prevStep}>
        Back
      </button>
      <button key='submit' onClick={() => alert('Form Submitted')}>
        Submit
      </button>
    </FormStep>
  )
}

const StepUnknown = () => <p>Unknown Step</p>

export { StepOne, StepThree, StepTwo, StepUnknown }
