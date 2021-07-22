import React from "react";
import PropTypes from 'prop-types';

const CheckboxInput = ({ name, form, label, setCurrentFilterValue, currentFilter }) => {

    const inputChangeHandler = (evt) => {
        setCurrentFilterValue(evt.target.value)
    }

    return (
        <>
            <input className="form__input form__input--checkbox visually-hidden" type="checkbox" name={form} id={name} value={name} сhecked={currentFilter.includes(name).toString()} onChange={inputChangeHandler} />
            <label className="form__label form__label--checkbox" htmlFor={name}>{label}</label>
            <div className="form__label-tick"></div>
        </>
    )
}

CheckboxInput.propTypes = {
    name: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    setCurrentFilterValue: PropTypes.func.isRequired,
    currentFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default CheckboxInput;