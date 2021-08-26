import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

const AUTOCOMPLETE_LETTER_COUNT = 2;

const getFilteredSuggestions = (list, targetValue, setter, callback) => {
    const filteredSuggestions = list.slice().filter((item) => item.value.toLowerCase().includes(targetValue.toLowerCase()))
    setter(filteredSuggestions);

    if (targetValue.length >= AUTOCOMPLETE_LETTER_COUNT) {
        callback(true)
    }
}


const AutocompleteTextInputs = ({ values: { city, pickpoint }, citiesData, pickpointData, setDataValue, resetLocationData }) => {
    const inputCityRef = useRef(null);
    const inputPickpointRef = useRef('');
    const [isListVisible, setIsListVisible] = useState(false);
    const [cities, setCities] = useState(citiesData);
    const [pickpoints, setPickpoints] = useState(pickpointData);

    useEffect(() => {
        setPickpoints(pickpointData)
    }, [pickpointData])

    const inputCityChangeHandler = (evt) => {
        evt.preventDefault();
        setDataValue({
            name: 'city',
            value: evt.target.value
        })

        getFilteredSuggestions(citiesData, evt.target.value, setCities, setIsListVisible)

        if (!evt.target.value.length) {
            inputPickpointRef.current.value = ``;
        }
    }

    const inputPickpointChangeHandler = (evt) => {
        evt.preventDefault();
        setDataValue({
            name: 'pickpoint',
            value: evt.target.value
        })

        getFilteredSuggestions(pickpointData, evt.target.value, setPickpoints, setIsListVisible)
    }

    const resetButtonCityHandler = (evt) => {
        evt.preventDefault();
        resetLocationData();
        setCities(citiesData)
        inputCityRef.current.value = ``;
    }

    const resetButtonPickpointHandler = (evt) => {
        evt.preventDefault();
        setDataValue({
            name: 'pickpoint',
            value: ``
        });
        setPickpoints(pickpointData)
        inputPickpointRef.current.value = ``;
    }

    return (
        <ul className="location-form__list">
            <li className="location-form__item">
                <input className={`location-form__input form__input`} list={`city-list`} name={`city`} id={`city`} value={city.name} placeholder={`Начните вводить город`} onChange={inputCityChangeHandler} required ref={inputCityRef} />
                <label className={`location-form__label form__label`} htmlFor={`city`}>Город</label>

                <datalist id={`city-list`} className={`form__list ${isListVisible ? '' : 'form__list--hidden'}`}>
                    {cities.map((item) => {
                        return (
                            <option className="suggestions__item" key={item.id} value={item.value} />
                        )
                    })}
                </datalist>

                <div className={`form__reset-button-wrapper ${(inputCityRef.current && inputCityRef.current.value.length === 0) ? `form__reset-button-wrapper--hidden` : ``}`} data-name={`city`} onClick={resetButtonCityHandler}>
                    <button className={`location-form__button form__reset-button`} type="button"></button>
                </div>
            </li>

            <li className="location-form__item">
                <input className={`location-form__input form__input`} list={`pickpoint-list`} name={`pickpoint`} id={`pickpoint`} value={pickpoint.name} placeholder={`Начните вводить пункт...`} onChange={inputPickpointChangeHandler} required ref={inputPickpointRef} />
                <label className={`location-form__label form__label`} htmlFor={`pickpoint`}>Пункт выдачи</label>

                <datalist id={`pickpoint-list`} className={`form__list ${isListVisible ? '' : 'form__list--hidden'}`}>
                    {pickpoints.map((item) => {
                        return (
                            <option className="suggestions__item" key={item.id} value={item.value} />
                        )
                    })}
                </datalist>

                <div className={`form__reset-button-wrapper ${(inputPickpointRef.current && inputPickpointRef.current.value.length === 0) ? `form__reset-button-wrapper--hidden` : ``}`} data-name={`city`} onClick={resetButtonPickpointHandler}>
                    <button className={`location-form__button form__reset-button`} type="button"></button>
                </div>
            </li>
        </ul>
    )
}

AutocompleteTextInputs.propTypes = {
    setDataValue: PropTypes.func.isRequired,
    citiesData: PropTypes.array.isRequired,
    pickpointData: PropTypes.array.isRequired,
    values: PropTypes.shape({
        city: PropTypes.string.isRequired,
        pickpoint: PropTypes.string.isRequired,
    }).isRequired,
    resetLocationData: PropTypes.func.isRequired
}

export default AutocompleteTextInputs;