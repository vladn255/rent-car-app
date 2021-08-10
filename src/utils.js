import { DATE_LETTER_COUNT } from "./const.js"

const isDateValid = (dateType) => dateType.valid && dateType.value.length === DATE_LETTER_COUNT

export {
    isDateValid
}