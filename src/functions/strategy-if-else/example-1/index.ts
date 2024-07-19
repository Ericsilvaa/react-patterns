import { calculateWithoutPattern, calculateWithPattern } from './calculate-util'
import { CalculateType } from './types'

const MOCK_CALCULATE: CalculateType = {
  number: 10,
  operation: 'multiply for two'
}

const resultCalculateWithoutPattern = calculateWithoutPattern(MOCK_CALCULATE)

console.log('resultCalculateWithoutPattern:', resultCalculateWithoutPattern)

const resultCalculateWithPattern = calculateWithPattern(MOCK_CALCULATE)

console.log('resultCalculateWithPattern:', resultCalculateWithPattern)
