import React from "react";

import { Link } from 'react-router-dom';

import { RoutePath } from "../../const";

const Banner = () => {
    return (
        <section className="banner">
            <h2 className="banner__title">Каршеринг<span className="banner__title-brand">Need for drive</span></h2>
            <p className="banner__text">
                Поминутная аренда авто твоего города
            </p>
            <Link to={RoutePath.ORDER} className="button button--banner">Забронировать</Link>
        </section>
    )
}

export default Banner;