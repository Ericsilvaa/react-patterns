// WITHOUT PATTERN

import { ErrorMessage, ErrorMessagesMap } from './constantes'
import { KeyErrorMessages } from './types'

const getErrorMessageWithoutPattern = () => {}

const getErrorMessageWithPattern = (errorType: KeyErrorMessages) => {
  return ErrorMessage[errorType]
}

const randomErrorType = () => {
  return ErrorMessagesMap[Math.floor(Math.random() * ErrorMessagesMap.length)]
}

export {
  getErrorMessageWithoutPattern,
  getErrorMessageWithPattern,
  randomErrorType
}
