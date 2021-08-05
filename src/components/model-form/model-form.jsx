import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Tabs, ModelTypes } from "../../const.js";
import { setModel, setActiveFilter } from "../../store/action";
import { fetchModelsDataEntity } from "../../store/api-action";

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

const ModelClassTags = {
    economy: "коном",
    premium: "юкс"
}

const ModelForm = () => {
    const dispatch = useDispatch();

    const initialModelsData = useSelector((state) => state.modelsData)

    const [isValid, setIsValid] = useState(false);
    const [currentModel, setCurrentModel] = useState(useSelector((state) => state.model));
    const [currentFilter, setCurrentFilter] = useState(useSelector((state) => state.activeFilter));
    const [models, setModels] = useState(initialModelsData);

    if (models.length === 0) {
        dispatch(fetchModelsDataEntity())
            .then((response) => {
                setModels(response)
            })
    }

    const setModelValue = (modelValue) => setCurrentModel(modelValue);

    const setCurrentFilterValue = (filter) => {
        setCurrentFilter(filter);

        filter !== ModelTypes.ALL_MODELS
            ? setModels(initialModelsData.slice().filter((model) => {
                return model.categoryId !== null && model.categoryId.name.includes(`${ModelClassTags[filter]}`)
            }))
            : setModels(initialModelsData)
    };

    const checkIsValid = () => {
        return isValid !== (currentModel.length !== 0)
            ? setIsValid(currentModel.length !== 0)
            : isValid
    }

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
                        {models.length !== 0
                            ? models.map(({ id, name, priceMin, priceMax, thumbnail: { path } }) => <ModelFormItem key={id} name={name} priceMin={priceMin} priceMax={priceMax} imgSrc={path} isActive={name === currentModel} setModelValue={setModelValue} />)
                            : <h4>Данные загружаются</h4>}
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