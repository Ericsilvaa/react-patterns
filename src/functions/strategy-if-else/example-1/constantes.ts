// solution with Strategy

import { AccountFunction, KeyName } from './types'

export const account: Record<KeyName, AccountFunction> = {
  'multiply for two': (number) => console.log(`result: ${number * 2}`),
  'divide by two': (number) => console.log(`result: ${number / 2}`),
  'add two': (number) => console.log(`result: ${number + 2}`),
  'subtract two': (number) => console.log(`result: ${number - 2}`)
}
