import React from "react";
import PropTypes from 'prop-types';

const MainHeader = ({ additionalStyleName }) => {
    return (
        <header className={`main-header ${additionalStyleName || ""}`}>
            <h1 className="main-header__title" >Need for drive</h1>
            <span className="main-header__location">Ульяновск</span>
        </header>
    )
}

MainHeader.propTypes = {
    additionalStyleName: PropTypes.string.isRequired
}

export default MainHeader;