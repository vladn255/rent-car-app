import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Tabs } from "../../const.js";
import { setLocation } from "../../store/action";
import { fetchCitiesEntity, fetchPickpoint } from "../../store/api-action";

import MapComponent from "../map-component/map-component.jsx";
import OrderReceipt from "../order-receipt/order-receipt.jsx";
import AutocompleteTextInputs from "../autocomplete-text-inputs/autocomplete-text-inputs.jsx";
import TabFormButton from "../tab-form-button/tab-form-button";

const BUTTON_LABEL = "Выбрать модель";
const Labels = {
    CITY: "city",
    PICKPOINT: "pickpoint"
};

const LocationForm = () => {
    const [isValid, setIsValid] = useState(false);
    const [locationData, setLocationData] = useState({
        city: useSelector((state) => state.city.name),
        pickpoint: useSelector((state) => state.pickpoint.name)
    });
    const [citiesData, setCitiesData] = useState(useSelector((state) => state.citiesData));
    const [pickpointData, setPickpointData] = useState(useSelector((state) => state.pickpointData));
    const [pickpoints, setPickpoints] = useState([])
    const [activeCity, setActiveCity] = useState(useSelector((state) => state.city))
    const [activeMarker, setActiveMarker] = useState(useSelector((state) => state.pickpoint))

    const dispatch = useDispatch();

    useEffect(() => {
        if (citiesData.length === 0) {
            dispatch(fetchCitiesEntity())
                .then((response) => {
                    setCitiesData(response.map((city) => {
                        return {
                            id: city.id,
                            value: city.name
                        }
                    }))
                })

            dispatch(fetchPickpoint()).then((response) => {
                setPickpointData(response)

            })
        }

        setLocationData(locationData);
        checkIsValid();
        dispatch(setLocation({
            city: activeCity,
            pickpoint: activeMarker
        }));
    }, [activeCity, activeMarker, pickpoints])

    const checkIsValid = () => {
        return isValid !== (locationData.city.length !== 0 && locationData.pickpoint.length !== 0)
            ? setIsValid(locationData.city.length !== 0 && locationData.pickpoint.length !== 0)
            : isValid
    };

    const setLocationDataValue = (locationValue) => {
        setLocationData({ ...locationData, [locationValue.name]: locationValue.value })

        if (locationValue.name === Labels.CITY) {
            const filteredCity = citiesData.find((item) => item.value === locationValue.value)

            if (filteredCity) {

                setActiveCity({
                    id: filteredCity.id,
                    name: filteredCity.value
                })

                const filteredPoints = pickpointData.filter((point) => point.cityId && point.cityId.name === filteredCity.value)
                setPickpoints(filteredPoints.map((point) => {
                    return {
                        id: point.id,
                        value: point.address
                    }
                }))
            }
        }

        if (locationValue.name === Labels.PICKPOINT) {
            const filteredPoints = pickpoints.find((item) => item.value === locationValue.value)

            if (filteredPoints) {
                setActiveMarker({
                    value: filteredPoints.value,
                    id: filteredPoints.id
                })
            }
        }
    };

    const resetLocationData = () => {
        setLocationData({
            city: '',
            pickpoint: ''
        })
    }

    return (
        <form className="location-form form" >
            <div className="order-page__form ">
                <div className="order-page__form-wrapper location-form__wrapper">
                    <fieldset className="location-form__fieldset form__fieldset">
                        <legend className="visually-hidden">Форма выбора местоположения</legend>
                        <AutocompleteTextInputs values={locationData} citiesData={citiesData} pickpointData={pickpoints} setDataValue={setLocationDataValue} resetLocationData={resetLocationData} />
                    </fieldset>

                    <div className="order-page__selection location-form__map">
                        <h3 className="location-form__text">Выбрать на карте:</h3>
                        <MapComponent activeCity={activeCity.name} markersData={pickpoints} activeMarker={activeMarker.value} />
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