import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";

import { Tabs, Additionals, TIME_FORMAT, ReceiptNames, ReceiptCosts, FEATURES_FORM_COLOR_DEFAULT_NAME } from "../../const.js";
import { isDateValid } from "../../utils.js"
import { setColor, setDate, setRate, setAdditions } from "../../store/action";
import { fetchRateDataEntity } from "../../store/api-action";

import OrderReceipt from "../order-receipt/order-receipt.jsx";
import TabFormButton from "../tab-form-button/tab-form-button.jsx";
import RadioInput from "../radio-input/radio-input.jsx";
import CheckboxInput from "../checkbox-input/checkbox-input.jsx";
import DatePickerInputs from "../date-picker-input/date-picker-input.jsx";

dayjs.extend(CustomParseFormat)


const AdditionalsCheckboxes = [
    {
        name: Additionals.FULL_TANK,
        form: "features",
        label: `${ReceiptNames[Additionals.FULL_TANK]}, ${ReceiptCosts[Additionals.FULL_TANK]}₽`
    },
    {
        name: Additionals.CHILD_SEAT,
        form: "features",
        label: `${ReceiptNames[Additionals.CHILD_SEAT]}, ${ReceiptCosts[Additionals.CHILD_SEAT]}₽`
    },
    {
        name: Additionals.RIGHT_WHEEL,
        form: "features",
        label: `${ReceiptNames[Additionals.RIGHT_WHEEL]}, ${ReceiptCosts[Additionals.RIGHT_WHEEL]}₽`
    },
]

const BUTTON_LABEL = "Итого";
const FORM_RATE_NAME = "rate";
const FORM_COLOR_NAME = "color";

const getRateLabel = (name, price, unit) => {
    return `${name}, ${price}₽/${unit}`
}

const validateDate = (date, format) => {
    return dayjs(date, format).format(format) === date;
}

const isDurationNegative = (startDateString, finishDateString) => {
    const startDate = dayjs(startDateString, TIME_FORMAT).toDate().getTime();
    const finishDate = dayjs(finishDateString, TIME_FORMAT).toDate().getTime();

    return (finishDate - startDate) < 0
}

const FeaturesForm = () => {
    const stateAdditions = useSelector((state) => state.additions)
    const modelColors = useSelector((state) => state.modelColors)

    const [isValid, setIsValid] = useState(false);
    const [currentColor, setCurrentColor] = useState(FEATURES_FORM_COLOR_DEFAULT_NAME);
    const [currentDate, setCurrentDate] = useState({
        dateStart: useSelector((state) => state.dateStart),
        dateFinish: useSelector((state) => state.dateFinish)
    });
    const [currentRate, setCurrentRate] = useState(useSelector((state) => state.rate));
    const [rateData, setRateData] = useState([])
    const [additionsList, setAdditionsList] = useState(stateAdditions);


    const colorRadios = modelColors.map((color) => {
        return {
            name: color,
            form: FORM_COLOR_NAME,
            label: color
        }
    })

    const setColorValue = (color) => {
        setCurrentColor(color)
    };
    const setDateValue = (dateValue) => {
        setCurrentDate({
            ...currentDate, [dateValue.name]: {
                value: dateValue.value,
                valid: validateDate(dateValue.value, TIME_FORMAT)
            }
        });
    }
    const setRateValue = (name) => {
        const activeRate = rateData.find((rate) => rate.name === name)
        setCurrentRate(activeRate);
    }
    const setAdditionsValue = (feature) => {
        const newList = stateAdditions.slice();
        const index = newList.indexOf(feature);
        newList.includes(feature)
            ? newList.splice(index, 1)
            : newList.push(feature)
        setAdditionsList(newList)
    }

    const checkIsValid = () => {
        return isDateValid(currentDate.dateStart)
            && isDateValid(currentDate.dateFinish)
            && !isDurationNegative(currentDate.dateStart.value, currentDate.dateFinish.value)
            && currentRate.name
            ? setIsValid(true)
            : setIsValid(false)
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if (!rateData.length) {
            dispatch(fetchRateDataEntity())
                .then((response) => {
                    const parsedRateData = response.map(({ id, price, rateTypeId: { unit, name } }) => {
                        return {
                            id,
                            price,
                            unit,
                            name,
                            form: FORM_RATE_NAME
                        }
                    })
                    setRateData(parsedRateData)
                })
        }

        setCurrentColor(currentColor);
        setCurrentDate(currentDate);
        setCurrentRate(currentRate);
        setAdditionsList(additionsList);

        checkIsValid();
        dispatch(setColor(currentColor));
        dispatch(setDate(currentDate));
        dispatch(setRate(currentRate));
        dispatch(setAdditions(additionsList));
    }, [currentColor, currentDate, currentRate, additionsList])

    return (
        <form className=" features-form form">
            <div className="order-page__form">
                <div className="order-page__form-wrapper features-form__wrapper">
                    <fieldset className="features-form__fieldset features-form__fieldset--color form__fieldset">
                        <legend className="features-form__legend form__legend">Цвет</legend>
                        <ul className="features-form__list features-form__list--color">
                            {colorRadios.map(({ name, form, label }) =>
                                <li className="features-form__item" key={name}>
                                    <RadioInput key={name} name={name} form={form} label={label} setCurrentFilterValue={setColorValue} currentFilter={currentColor} />
                                </li>
                            )}
                        </ul>
                    </fieldset>

                    <DatePickerInputs dateStart={currentDate.dateStart} dateFinish={currentDate.dateFinish} setDateValue={setDateValue} />

                    <fieldset className="features-form__fieldset features-form__fieldset--rate form__fieldset">
                        <legend className="features-form__legend form__legend">Тариф</legend>
                        <ul className="features-form__list features-form__list--rate">
                            {rateData.map(({ id, price, unit, name, form }) =>
                                <li className="features-form__item" key={id}>
                                    <RadioInput key={id} name={name} form={form} label={getRateLabel(name, price, unit)} setCurrentFilterValue={setRateValue} currentFilter={currentRate.name} />
                                </li>
                            )}
                        </ul>
                    </fieldset>

                    <fieldset className="features-form__fieldset features-form__fieldset--additional form__fieldset">
                        <legend className="features-form__legend form__legend">Доп услуги</legend>
                        <ul className="features-form__list features-form__list--additional">
                            {AdditionalsCheckboxes.map(({ name, form, label }) =>
                                <li className="features-form__item" key={name}>
                                    <CheckboxInput key={name} name={name} form={form} label={label} setCurrentFilterValue={setAdditionsValue} currentFilter={additionsList} />
                                </li>
                            )}
                        </ul>
                    </fieldset>
                </div>
                <div className="order-page__receipt-wrapper">
                    <OrderReceipt />
                    <TabFormButton tab={Tabs.get('RESULT')} isValid={isValid} label={BUTTON_LABEL} />
                </div>
            </div>
        </form>
    )
}

export default FeaturesForm;