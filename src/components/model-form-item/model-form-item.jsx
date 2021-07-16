import React from "react";
import PropTypes from 'prop-types';

const ModelFormItem = ({ name, cost, imgSrc, isActive, setModelValue }) => {
    const galleryButtonClickHandler = (evt) => {
        evt.preventDefault();
        setModelValue(name);
    }
    return (
        <article className="gallery__item">
            <button className={`gallery__model-wrapper ${isActive ? `gallery__model-wrapper--visited` : ``}`} type="button" onClick={galleryButtonClickHandler}>
                <h4 className="gallery__title">{name}</h4>
                <p className="gallery__text">{cost}</p>
                <img className="gallery__picture" src={imgSrc}
                    alt={`${name} view`} width="256" height="116" />
            </button>
        </article>
    )
}

ModelFormItem.propTypes = {
    name: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    setModelValue: PropTypes.func.isRequired
}

export default ModelFormItem;