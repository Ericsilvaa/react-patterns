export type TooltipProps = {
  render: () => React.ReactNode // Function that returns a React element
  children: React.ReactNode // React element
}

export type renderProps = {
  render: () => React.ReactNode // Function that returns a React element
}

export type FormStepProps = {
  children: React.ReactNode // React element
  stepNumber: number
}

export type MultiStepMapStrategyType = {
  [key: number]: React.JSX.Element
}
