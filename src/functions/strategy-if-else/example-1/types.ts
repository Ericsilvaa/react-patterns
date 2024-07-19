export type AccountFunction = (number: number) => void
export type KeyName =
  | 'multiply for two'
  | 'divide by two'
  | 'add two'
  | 'subtract two'

export type CalculateType = {
  number: number
  operation: KeyName
}
