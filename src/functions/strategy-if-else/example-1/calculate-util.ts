// WITHOUT PATTERN

import { account } from './constantes'
import { CalculateType } from './types'

const calculateWithoutPattern = ({ number, operation }: CalculateType) => {
  if (operation == 'multiply for two') {
    console.log(`result: ${number * 2}`)
  } else if (operation == 'divide by two') {
    console.log(`result: ${number / 2}`)
  } else if (operation == 'add two') {
    console.log(`result: ${number + 2}`)
  } else if (operation == 'subtract two') {
    console.log(`result: ${number - 2}`)
  }
}

const calculateWithPattern = ({ number, operation }: CalculateType) => {
  /* 
    first way (longer)
    const accountKey = account[operation]
    const result = accountKey(number)
    return result
  */

  // second way (shorter)
  return account[operation](number)

  /* 
    * solution with Strategy
    account[operation](number) => access the object and execute the function!
    return: (5) => console.log(`result: ${5 / 2}`)
  */
}

export { calculateWithoutPattern, calculateWithPattern }
