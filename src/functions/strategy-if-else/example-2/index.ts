import { getPriceWithoutPattern, getPriceWithPattern } from './get-price-util'

const MOCK_PRICE = {}

const resultGetPriceWithoutPattern = getPriceWithoutPattern()

console.log('resultGetPriceWithoutPattern:', resultGetPriceWithoutPattern)

const resultGetPriceWithPattern = getPriceWithPattern()

console.log('resultGetPriceWithPattern:', resultGetPriceWithPattern)
