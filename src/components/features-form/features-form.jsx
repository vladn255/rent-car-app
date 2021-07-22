import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Tabs, Colors, Rates, Additionals } from "../../const.js";
import { setColor, setDate, setRate, setAdditions } from "../../store/action";

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

const RatesRadios = [
    {
        name: Rates.BY_MINUTE,
        form: "rate",
        label: "Поминутно, 7₽/мин"
    },
    {
        name: Rates.BY_DAY,
        form: "rate",
        label: "На сутки, 1999₽/мин"
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

const FeaturesForm = () => {
    const [isValid, setIsValid] = useState(false);
    const [currentColor, setCurrentColor] = useState(useSelector((state) => state.color));
    const [currentDateData, setCurrentDate] = useState({
        dateStart: useSelector((state) => state.dateStart),
        dateFinish: useSelector((state) => state.dateFinish)
    });
    const [currentRate, setCurrentRate] = useState(useSelector((state) => state.rate));
    const [additionsList, setAdditionsList] = useState(useSelector((state) => state.additions));

    const setColorValue = (color) => {
        setCurrentColor(color)
        console.log('color', color, currentColor)
    };
    const setDateStartValue = (dateValue) => {
        setCurrentDate({ ...currentDateData, [dateValue.name]: dateValue.value });
    }
    const setRateValue = (rate) => {
        setCurrentRate(rate);
        console.log('rate', rate, currentRate)
    }
    const setAdditionsValue = (feature) => {
        const index = additionsList.indexOf(feature);
        additionsList.includes(feature)
            ? additionsList.splice(index, 1)
            : additionsList.push(feature)
    }

    const checkIsValid = () => {
        return isValid !== (currentDateData.dateStart.length !== 0 && currentDateData.dateFinish.length !== 0)
            ? setIsValid(currentDateData.dateStart.length !== 0 && currentDateData.dateFinish.length !== 0)
            : isValid
    };

    const dispatch = useDispatch();

    useEffect(() => {
        setCurrentColor(currentColor);
        setCurrentDate(currentDateData);
        setCurrentRate(currentRate);
        setAdditionsList(additionsList);

        checkIsValid();

        dispatch(setColor(currentColor));
        dispatch(setDate(currentDateData));
        dispatch(setRate(currentRate));
        dispatch(setAdditions(additionsList));
    }, [currentColor, currentDateData, currentRate, additionsList])

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
                                    <TextInput setLocationDataValue={setDateStartValue} inputInfo={input} value={currentDateData[input.name]} />
                                </li>)}
                        </ul>
                    </fieldset>

                    <fieldset className="features-form__fieldset features-form__fieldset--rate form__fieldset">
                        <legend className="features-form__legend form__legend">Тариф</legend>
                        <ul className="features-form__list features-form__list--rate">
                            {RatesRadios.map(({ name, form, label }) =>
                                <li className="features-form__item" key={name}>
                                    <RadioInput key={name} name={name} form={form} label={label} setCurrentFilterValue={setRateValue} currentFilter={currentRate} />
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