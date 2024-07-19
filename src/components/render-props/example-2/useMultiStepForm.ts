import { useState } from 'react'

const useMultiStepForm = (initialStep = 1) => {
  const [currentStep, setCurrentStep] = useState(initialStep)

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return {
    currentStep,
    nextStep,
    prevStep
  }
}

export default useMultiStepForm
