// solution with Strategy

import { KeyErrorMessages } from './types'

export const ErrorMessage: Record<KeyErrorMessages, string> = {
  'unsupported-code': 'This Operation is not supported',
  'invalid-code': 'This Operation is invalid'
}

export const ErrorMessagesMap: KeyErrorMessages[] = [
  'unsupported-code',
  'invalid-code'
]
