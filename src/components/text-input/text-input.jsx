import React, { useRef } from "react";
import PropTypes from 'prop-types';

const TextInput = ({ value, setDataValue, inputInfo: { name, additionalClass, placeholder, label }, isValid, validationText }) => {
    const inputRef = useRef(null);

    const inputChangeHandler = (evt) => {
        evt.preventDefault();
        setDataValue({
            name,
            value: evt.target.value
        })
    }

    const resetButtonHandler = (evt) => {
        evt.preventDefault();
        setDataValue({
            name,
            value: ``
        });
        inputRef.current.value = ``;
    }

    return (
        <>
            <input className={`${additionalClass}-form__input form__input`} type="text" name={name} id={name} value={value} placeholder={placeholder} onChange={inputChangeHandler} required ref={inputRef} />
            <label className={`${additionalClass}-form__label form__label`} htmlFor={name}>{label}</label>
            <div className={`form__reset-button-wrapper ${value.length === 0 ? `form__reset-button-wrapper--hidden` : ``}`} data-name={name} onClick={resetButtonHandler}>
                <button className={`${additionalClass}-form__button form__reset-button`} type="button"></button>
            </div>
            <span className={`form__validation-message ${isValid ? `form__validation-message--hidden` : ``}`}>{validationText}</span>
        </>
    )
}

TextInput.propTypes = {
    value: PropTypes.string.isRequired,
    setDataValue: PropTypes.func.isRequired,
    inputInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        additionalClass: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired,
    isValid: PropTypes.bool,
    validationText: PropTypes.string
}

export default TextInput;