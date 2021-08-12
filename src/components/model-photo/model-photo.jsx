import React from "react";
import PropTypes from 'prop-types';

const FILE_NAME_SLICE = '/files';
const URL_PART = 'https://api-factory.simbirsoft1.com';

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

    const checkIsValidSrc = (src) => {
        return src.includes(FILE_NAME_SLICE)
            ? `${URL_PART}${src}`
            : src
    }

    return (
        <>
            {checkIsValid()
                ? <img className={className} src={checkIsValidSrc(imgSrc)} alt={`${name} view`} width="256" height="116" />
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