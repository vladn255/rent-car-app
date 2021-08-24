import React from "react";
import PropTypes from 'prop-types';
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";

import { TIME_FORMAT } from "../../const.js";
import { parseStringToDate, parseDateToString } from "../../utils.js"

import DatePicker from "react-datetime-picker";

dayjs.extend(CustomParseFormat)

const InputNames = {
    DATE_START: "dateStart",
    DATE_FINISH: "dateFinish"
}

const DatePickerInputs = ({ dateStart, dateFinish, setDateValue }) => {

    const setDateStartValue = (value) => {
        value
            ? setDateValue({
                name: InputNames.DATE_START,
                value: parseDateToString(value, TIME_FORMAT)
            })
            : setDateValue({
                name: InputNames.DATE_START,
                value: parseDateToString(new Date(), TIME_FORMAT)
            })
    }

    const setDateFinishValue = (value) => {
        value
            ? setDateValue({
                name: InputNames.DATE_FINISH,
                value: parseDateToString(value, TIME_FORMAT)
            })
            : setDateValue({
                name: InputNames.DATE_FINISH,
                value: dateStart.value
            })
    }

    return (
        <fieldset className="features-form__fieldset features-form__fieldset--date form__fieldset">
            <legend className="features-form__legend form__legend">Дата аренды</legend>
            <ul className="features-form__list features-form__list--date">

                <li className="features-form__item">
                    <span className="features-form__label form__label">C</span>
                    <DatePicker
                        name={InputNames.DATE_START}
                        onChange={setDateStartValue}
                        value={parseStringToDate(dateStart.value, TIME_FORMAT)}
                        format={'dd.MM.yyyy HH:mm'}
                        className="features-form__input form__input"
                        minDate={new Date()}
                        required={true}
                    />
                </li>

                <li className="features-form__item">
                <span className="features-form__label form__label">По</span>
                    <DatePicker
                        name={InputNames.DATE_FINISH}
                        onChange={setDateFinishValue}
                        value={parseStringToDate(dateFinish.value, TIME_FORMAT)}
                        format={'dd.MM.yyyy HH:mm'}
                        className="features-form__input form__input"
                        minDate={parseStringToDate(dateStart.value, TIME_FORMAT)}
                        required={true}
                    />
                </li>

            </ul>
        </fieldset>
    )
}

DatePickerInputs.propTypes = {
    dateStart: PropTypes.shape({
        value: PropTypes.string.isRequired,
        valid: PropTypes.bool.isRequired
    }).isRequired,
    dateFinish: PropTypes.shape({
        value: PropTypes.string.isRequired,
        valid: PropTypes.bool.isRequired
    }).isRequired,
    setDateValue: PropTypes.func.isRequired
}

export default DatePickerInputs