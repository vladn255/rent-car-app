/* eslint-disable no-undef */
import React from "react";
import { Link } from "react-router-dom";

import { RoutePath } from "../../const.js";

import OrderReceipt from "../order-receipt/order-receipt.jsx";

const ResultForm = () => {
    return (
        <div className="order-page__form result">
            <div className="order-page__form-wrapper result__container">
                <h3 className="visually-hidden">Детали заказа</h3>
                <div className="result__wrapper">
                    <p className="result__model">Hyndai, i30 N</p>
                    <p className="result__plate-number">K 761 HA 73</p>
                    <p className="result__additional"><b>Топливо</b> 100%</p>
                    <p className="result__additional"><b>Доступна с</b> 12.06.2019 12:00</p>
                </div>
                <img className="result__picture" src={`${process.env.PUBLIC_URL}/img/gallery/image2.png`}
                    alt="ELANTRA view" width="256" height="116"></img>
            </div>

            <div className="order-page__receipt-wrapper">
                <OrderReceipt />
                <button className="button button--submit" type="button">Заказать</button>
            </div>

            <div className="modal modal--closed">
                <Link to={RoutePath.CHECKOUT} className="button button--submit">Подтвердить</Link>
            </div>
        </div>
    )
}

export default ResultForm;