import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Tabs, ModelTypes } from "../../const.js";
import { setModel, setActiveFilter } from "../../store/action";
import { Models } from "../../mocks.js";
import ModelFormItem from "../model-form-item/model-form-item.jsx";

import OrderReceipt from "../order-receipt/order-receipt.jsx";
import TabFormButton from "../tab-form-button/tab-form-button";
import RadioInput from "../radio-input/radio-input.jsx";

const ModelFormRadios = [
    {
        name: ModelTypes.ALL_MODELS,
        form: "model-type",
        label: "Все модели"
    },
    {
        name: ModelTypes.ECONOMY,
        form: "model-type",
        label: "Эконом"
    },
    {
        name: ModelTypes.PREMIUM,
        form: "model-type",
        label: "Премиум"
    },
]

const BUTTON_LABEL = "Дополнительно";

const ModelForm = () => {
    const [isValid, setIsValid] = useState(false);
    const [currentModel, setCurrentModel] = useState(useSelector((state) => state.model));
    const [currentFilter, setCurrentFilter] = useState(useSelector((state) => state.activeFilter));

    const setModelValue = (modelValue) => setCurrentModel(modelValue);

    const setCurrentFilterValue = (filter) => setCurrentFilter(filter);

    const checkIsValid = () => {
        return isValid !== (currentModel !== null)
            ? setIsValid(currentModel !== null)
            : isValid
    }

    const dispatch = useDispatch();

    useEffect(() => {
        setCurrentFilter(currentFilter);
        setCurrentModel(currentModel);
        checkIsValid();
        dispatch(setModel(currentModel));
        dispatch(setActiveFilter(currentFilter));
    }, [currentModel, currentFilter])

    return (
        <form className="model-form form">
            <div className="order-page__form">
                <div className="order-page__form-wrapper model-form__wrapper">
                    <fieldset className="model-form__fieldset form__fieldset" >
                        <legend className="visually-hidden">Форма выбора модели</legend>
                        <ul className="model-form__list">
                            {ModelFormRadios.map(({ name, form, label }) =>
                                <li className="model-form__item" key={name}>
                                    <RadioInput key={name} name={name} form={form} label={label} setCurrentFilterValue={setCurrentFilterValue} currentFilter={currentFilter} />
                                </li>
                            )}
                        </ul>
                    </fieldset>

                    <div className="order-page__selection model-form__gallery gallery">
                        {Models.map(({ name, cost, imgSrc }) => <ModelFormItem key={Math.random() * 10000} name={name} cost={cost} imgSrc={imgSrc} isActive={name === currentModel} setModelValue={setModelValue} />)}

                    </div>
                </div>

                <div className="order-page__receipt-wrapper">
                    <OrderReceipt />
                    <TabFormButton tab={Tabs.get('ADDITIONS')} isValid={isValid} label={BUTTON_LABEL} />
                </div>
            </div>
        </form>


    )
}

export default ModelForm;