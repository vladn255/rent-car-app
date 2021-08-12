import React from "react";
import PropTypes from 'prop-types';

import ModelPhoto from "../model-photo/model-photo";

const MODEL_FORM_PHOTO_CLASS = "gallery__picture"

const ModelFormItem = ({ name, id, priceMin, priceMax, imgSrc, isActive, setModelValue }) => {
    const galleryButtonClickHandler = (evt) => {
        evt.preventDefault();
        setModelValue(id);
    }

    return (
        <article className="gallery__item">
            <button className={`gallery__model-wrapper ${isActive ? `gallery__model-wrapper--visited` : ``}`} type="button" onClick={galleryButtonClickHandler}>
                <div className="gallery__text-wrapper">
                    <h4 className="gallery__title">{name}</h4>
                    <p className="gallery__text">{`${priceMin} - ${priceMax} ₽`}</p>
                </div>
                <ModelPhoto name={name} imgSrc={imgSrc} className={MODEL_FORM_PHOTO_CLASS}/>
            </button>
        </article>
    )
}

ModelFormItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    priceMin: PropTypes.number.isRequired,
    priceMax: PropTypes.number.isRequired,
    imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    isActive: PropTypes.bool.isRequired,
    setModelValue: PropTypes.func.isRequired,
}

export default ModelFormItem;