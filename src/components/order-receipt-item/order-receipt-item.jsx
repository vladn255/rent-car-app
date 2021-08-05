import React from "react";
import PropTypes from 'prop-types';

const OrderReceiptItem = ({name, value}) => {
    return (
        <li className="receipt__item">
            <span className="receipt__key">
                {name}
            </span>
            <span className="receipt__value">
                {value}
            </span>
        </li>
    )
}

OrderReceiptItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default OrderReceiptItem;