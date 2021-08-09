import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

import { Tabs, Colors, Additionals, TIME_FORMAT } from "../../const.js";
import { setColor, setDate, setRate, setAdditions } from "../../store/action";
import { fetchRateDataEntity } from "../../store/api-action";

import OrderReceipt from "../order-receipt/order-receipt.jsx";
import TabFormButton from "../tab-form-button/tab-form-button.jsx";
import TextInput from "../text-input/text-input.jsx";
import RadioInput from "../radio-input/radio-input.jsx";
import CheckboxInput from "../checkbox-input/checkbox-input.jsx";


const ColorRadios = [
    {
        name: Colors.ALL_COLOR,
        form: "color",
        label: "Любой"
    },
    {
        name: Colors.RED,
        form: "color",
        label: "Красный"
    },
    {
        name: Colors.BLUE,
        form: "color",
        label: "Голубой"
    }
];

const DateInputs = [
    {
        name: "dateStart",
        additionalClass: "features",
        placeholder: "Введите дату и время",
        label: "С"
    },
    {
        name: "dateFinish",
        additionalClass: "features",
        placeholder: "Введите дату и время",
        label: "По"
    }
];

const AdditionalsCheckboxes = [
    {
        name: Additionals.FULL_TANK,
        form: "features",
        label: "Полный бак, 500₽"
    },
    {
        name: Additionals.CHILD_SEAT,
        form: "features",
        label: "Детское кресло, 200₽"
    },
    {
        name: Additionals.RIGHT_WHEEL,
        form: "features",
        label: "Правый руль, 1600₽"
    },
]

const BUTTON_LABEL = "Итого";
const FORM_RATE_NAME = "rate";
const DATE_LETTER_COUNT = 16;

const getRateLabel = (name, price, unit) => {
    return `${name}, ${price}₽/${unit}`
}

const validateDate = (date, format) => {
    console.log('testing format', dayjs(date, format), dayjs(date, format).format(format))
    return dayjs(date, format).format(format) === date;
}

const FeaturesForm = () => {
    const [isValid, setIsValid] = useState(false);
    const [currentColor, setCurrentColor] = useState(useSelector((state) => state.color));
    const [currentDate, setCurrentDate] = useState({
        dateStart: {
            value: useSelector((state) => state.dateStart.value),
            valid: true
        },
        dateFinish: {
            value: useSelector((state) => state.dateFinish.value),
            valid: true
        }
    });
    const [currentRate, setCurrentRate] = useState(useSelector((state) => state.rate));
    const [rateData, setRateData] = useState([])

    const stateAdditions = useSelector((state) => state.additions)
    const [additionsList, setAdditionsList] = useState(stateAdditions);

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
    const setRateValue = (rate) => {
        setCurrentRate(rate);
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
        const isDateValid = (dateType) => dateType.valid && dateType.value.length === DATE_LETTER_COUNT
        return isValid !== (isDateValid(currentDate.dateStart) && isDateValid(currentDate.dateFinish))
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
                            {ColorRadios.map(({ name, form, label }) =>
                                <li className="features-form__item" key={name}>
                                    <RadioInput key={name} name={name} form={form} label={label} setCurrentFilterValue={setColorValue} currentFilter={currentColor} />
                                </li>
                            )}
                        </ul>
                    </fieldset>

                    <fieldset className="features-form__fieldset features-form__fieldset--date form__fieldset">
                        <legend className="features-form__legend form__legend">Дата аренды</legend>
                        <ul className="features-form__list features-form__list--date">
                            {DateInputs.map((input) =>
                                <li className="features-form__item" key={input.name}>
                                    <TextInput setDataValue={setDateValue} inputInfo={input} value={currentDate[input.name].value} isValid={currentDate[input.name].valid} validationText={'формат [ДД.ММ.ГГГГ ЧЧ:ММ]'} />
                                </li>)}
                        </ul>
                    </fieldset>

                    <fieldset className="features-form__fieldset features-form__fieldset--rate form__fieldset">
                        <legend className="features-form__legend form__legend">Тариф</legend>
                        <ul className="features-form__list features-form__list--rate">
                            {rateData.map(({ id, price, unit, name, form }) =>
                                <li className="features-form__item" key={id}>
                                    <RadioInput key={id} name={name} form={form} label={getRateLabel(name, price, unit)} setCurrentFilterValue={setRateValue} currentFilter={currentRate} />
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