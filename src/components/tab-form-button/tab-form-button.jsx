import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';

import { changeTab } from "../../store/action";


const TabFormButton = ({ tab, isValid, label }) => {
    const dispatch = useDispatch();

    const submitButtonClickHandler = (evt) => {
        evt.preventDefault();
        dispatch(changeTab(tab));
    }


    return (
        <button className="button button--submit" type="submit" disabled={!isValid} onClick={submitButtonClickHandler}>{label}</button>
    )
}

TabFormButton.propTypes = {
    tab: PropTypes.string.isRequired,
    isValid: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired
}

export default TabFormButton;