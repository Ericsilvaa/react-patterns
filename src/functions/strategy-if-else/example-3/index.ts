import {
  getErrorMessageWithoutPattern,
  getErrorMessageWithPattern,
  randomErrorType
} from './get-error-message-util'

const MOCK_ERROR_MESSAGE = 'unsupported-code'

const resultGetErrorMessageWithoutPattern = getErrorMessageWithoutPattern()

console.log(
  'resultGetErrorMessageWithoutPattern:',
  resultGetErrorMessageWithoutPattern
)

const resultGetErrorMessageWithPattern =
  getErrorMessageWithPattern(MOCK_ERROR_MESSAGE)

console.log(
  'resultGetErrorMessageWithPattern:',
  resultGetErrorMessageWithPattern
)

// scenario use case
export const fetchExchangeRateReject = async () => {
  try {
    const randomError = randomErrorType()
    const response = await Promise.reject(randomError)

    if (!response) {
      throw new Error(getErrorMessageWithPattern('unsupported-code'))
    }
  } catch (error) {
    throw new Error(getErrorMessageWithPattern('unsupported-code'))
  }
}
