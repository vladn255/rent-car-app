import React, { useRef } from "react";
import PropTypes from 'prop-types';

const TextInput = ({ value, setLocationDataValue, inputInfo: { name, additionalClass, placeholder, label } }) => {
    const inputRef = useRef(null);

    const inputChangeHandler = (evt) => {
        evt.preventDefault();
        setLocationDataValue({
            name,
            value: evt.target.value
        })
    }

    const resetButtonHandler = (evt) => {
        evt.preventDefault();
        setLocationDataValue({
            name,
            value: ``
        });
        inputRef.current.value = ``;
    }

    return (
        <>
            <input className={`${additionalClass}-form__input form__input`} name={name} id={name} value={value} placeholder={placeholder} onChange={inputChangeHandler} required ref={inputRef} />
            <label className={`${additionalClass}-form__label form__label`} htmlFor={name}>{label}</label>
            <div className={`form__reset-button-wrapper ${value.length === 0 ? `form__reset-button-wrapper--hidden` : ``}`} data-name={name} onClick={resetButtonHandler}>
                <button className={`${additionalClass}-form__button form__reset-button`} type="button"></button>
            </div>
        </>
    )
}

TextInput.propTypes = {
    value: PropTypes.string.isRequired,
    setLocationDataValue: PropTypes.func.isRequired,
    inputInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        additionalClass: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired

}

export default TextInput;