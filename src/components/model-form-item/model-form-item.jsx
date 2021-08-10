import React from "react";
import PropTypes from 'prop-types';

const ModelFormItem = ({ name, priceMin, priceMax, imgSrc, isActive, setModelValue }) => {
    const galleryButtonClickHandler = (evt) => {
        evt.preventDefault();
        setModelValue(name);
    }

    const checkIsValid = () => {
        let isValid = true;

        if (typeof imgSrc !== 'string') {
            isValid = false;
        } else if (typeof imgSrc === 'string') {
            if (!(imgSrc.includes('jpg') || imgSrc.includes('jpeg') || imgSrc.includes('png'))) {
                isValid = false;
            }
        }

        return isValid
    }

    return (
        <article className="gallery__item">
            <button className={`gallery__model-wrapper ${isActive ? `gallery__model-wrapper--visited` : ``}`} type="button" onClick={galleryButtonClickHandler}>
                <div className="gallery__text-wrapper">
                    <h4 className="gallery__title">{name}</h4>
                    <p className="gallery__text">{`${priceMin} - ${priceMax} ₽`}</p>
                </div>
                {checkIsValid()
                    ? <img className="gallery__picture" src={
                        imgSrc.includes('/files')
                            ? `https://api-factory.simbirsoft1.com${imgSrc}`
                            : imgSrc
                    } alt={`${name} view`} width="256" height="116" />
                    : <div className="gallery__fallback"></div>
                }

            </button>
        </article>
    )
}

ModelFormItem.propTypes = {
    name: PropTypes.string.isRequired,
    priceMin: PropTypes.number.isRequired,
    priceMax: PropTypes.number.isRequired,
    imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    isActive: PropTypes.bool.isRequired,
    setModelValue: PropTypes.func.isRequired,
}

export default ModelFormItem;