import React from "react";
import PropTypes from 'prop-types';
import { RoutePath } from "../../const";
import { Link } from "react-router-dom";

const MainHeaderLink = ({ additionalStyleName }) => {
    return (
        <header className={`main-header ${additionalStyleName || ""}`}>
            <Link to={RoutePath.MAIN} className="main-header__title" >Need for drive</Link>
            <span className="main-header__location">Ульяновск</span>
        </header>
    )
}

MainHeaderLink.propTypes = {
    additionalStyleName: PropTypes.string.isRequired
}

export default MainHeaderLink;