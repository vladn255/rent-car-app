import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Tabs } from "../../const.js";
import { setLocation } from "../../store/action";

import Map from "../map/map.jsx";
import OrderReceipt from "../order-receipt/order-receipt.jsx";
import TextInput from "../text-input/text-input.jsx";
import TabFormButton from "../tab-form-button/tab-form-button";

const INPUT_INFO = [
    {
        name: "city",
        additionalClass: "location",
        placeholder: "Начните вводить город",
        label: "Город"
    },
    {
        name: "pickpoint",
        additionalClass: "location",
        placeholder: "Начните вводить пункт...",
        label: "Пункт выдачи"
    }
];

const BUTTON_LABEL = "Выбрать модель";

const LocationForm = () => {
    const [isValid, setIsValid] = useState(false);
    const [locationData, setLocationData] = useState({
        city: useSelector((state) => state.city),
        pickpoint: useSelector((state) => state.pickpoint)
    });

    const dispatch = useDispatch();

    useEffect(() => {
        setLocationData(locationData);
        checkIsValid();
        dispatch(setLocation(locationData));
    }, [locationData])

    const checkIsValid = () => {
        return isValid !== (locationData.city.length !== 0 && locationData.pickpoint.length !== 0)
            ? setIsValid(locationData.city.length !== 0 && locationData.pickpoint.length !== 0)
            : isValid
    };

    const setLocationDataValue = (locationValue) => setLocationData({ ...locationData, [locationValue.name]: locationValue.value });



    return (
        <form className="location-form form">
            <div className="order-page__form ">
                <div className="order-page__form-wrapper location-form__wrapper">
                    <fieldset className="location-form__fieldset form__fieldset">
                        <legend className="visually-hidden">Форма выбора местоположения</legend>
                        <ul className="location-form__list">
                            {INPUT_INFO.map((input) =>
                             <li className="location-form__item" key={input.name}>
                                <TextInput key={name} setLocationDataValue={setLocationDataValue} inputInfo={input} value={locationData[input.name]} />
                            </li>)}
                        </ul>
                    </fieldset>

                    <div className="order-page__selection location-form__map">
                        <h3 className="location-form__text">Выбрать на карте:</h3>
                        <Map />
                    </div>
                </div>

                <div className="order-page__receipt-wrapper">
                    <OrderReceipt />
                    <TabFormButton tab={Tabs.get('MODEL')} isValid={isValid} label={BUTTON_LABEL} />
                </div>
            </div>
        </form >

    )
}

export default LocationForm;