import React from "react";
import PropTypes from 'prop-types';

import { TabNames } from "../../const";

const OrderNavItem = ({ tab, tabButtonClickHandler, isActiveTab, isTabDisabled }) => {

    return (
        <li className="order-nav__item" data-tab={tab} onClick={tabButtonClickHandler} >
            <button className={`order-nav__button ${isActiveTab ? "order-nav__button--active" : ""} ${isTabDisabled ? "order-nav__button--disabled" : ""}`} type="button" disabled={isTabDisabled}>
                {TabNames[tab]}
            </button>
        </li >
    )
}

OrderNavItem.propTypes = {
    tab: PropTypes.string.isRequired,
    tabButtonClickHandler: PropTypes.func.isRequired,
    isActiveTab: PropTypes.bool.isRequired,
    isTabDisabled: PropTypes.bool.isRequired
}

export default OrderNavItem;