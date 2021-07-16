import React from "react";
import PropTypes from 'prop-types';


const RadioInput = ({ name, form, label, setCurrentFilterValue, currentFilter }) => {

    const changeModelTypeHandler = (evt) => setCurrentFilterValue(evt.target.value);

    return (
        <>
            <input className="form__input form__input--radio visually-hidden" type="radio" name={form} id={name} value={name} checked={currentFilter === name} onChange={changeModelTypeHandler}></input>
            <label className="form__label form__label--radio" htmlFor={name}>{label}</label>
        </>
    )
}

RadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    setCurrentFilterValue: PropTypes.func.isRequired,
    currentFilter: PropTypes.string.isRequired,
}

export default RadioInput;