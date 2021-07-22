import React, { useState } from "react";
import { Link } from "react-router-dom";

import { RoutePath } from "../../const.js";

import OrderReceipt from "../order-receipt/order-receipt.jsx";

const ResultForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalButtonClickHandler = (evt) => {
        evt.preventDefault();
        setIsModalOpen(!isModalOpen);
    }

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
                {/* eslint-disable-next-line no-undef */}
                <img className="result__picture" src={`${process.env.PUBLIC_URL}/img/gallery/image2.png`}
                    alt="ELANTRA view" width="256" height="116"></img>
            </div>

            <div className="order-page__receipt-wrapper">
                <OrderReceipt />
                <button className="button button--submit" type="button" onClick={modalButtonClickHandler}>Заказать</button>
            </div>

            <div className={`modal ${isModalOpen ? `` : `modal--closed`}`}>
                <div className="modal__wrapper">
                    <h3 className="modal__title">Подтвердить заказ</h3>
                    <Link to={RoutePath.CHECKOUT} className="button button--modal-link">Подтвердить</Link>
                    <button className="button button--modal-close button--checkout-color" type="button" onClick={modalButtonClickHandler}>Вернуться</button>
                </div>

            </div>
        </div>
    )
}

export default ResultForm;