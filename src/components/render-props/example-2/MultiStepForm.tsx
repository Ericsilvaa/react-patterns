import RenderPropsWrapper from './RenderPropsWrapper '
import { StepOne, StepThree, StepTwo, StepUnknown } from './Steps'
import useMultiStepForm from './useMultiStepForm'

const MultiStepForm = () => {
  const { currentStep, nextStep, prevStep } = useMultiStepForm()

  const renderStep = () =>
    ({
      1: <StepOne nextStep={nextStep} />,
      2: <StepTwo {...{ nextStep, prevStep }} />,
      3: <StepThree {...{ prevStep }} />
    }[currentStep] || <StepUnknown />)

  return <RenderPropsWrapper render={renderStep} />
}

export default MultiStepForm
