import React from "react";
import PropTypes from 'prop-types';

const ModelPhoto = ({ name, imgSrc, className }) => {

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
        <>
            {checkIsValid()
                ? <img className={className} src={
                    imgSrc.includes('/files')
                        ? `https://api-factory.simbirsoft1.com${imgSrc}`
                        : imgSrc
                } alt={`${name} view`} width="256" height="116" />
                : <div className="gallery__fallback"></div>
            }
        </>
    )
}

ModelPhoto.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}

export default ModelPhoto;