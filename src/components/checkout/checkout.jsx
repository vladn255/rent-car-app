import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RoutePath } from "../../const.js";


import MainHeader from "../main-header/main-header";
import OrderReceipt from "../order-receipt/order-receipt";

const Checkout = () => {

    const model = useSelector((state) => state.model);
    const dateStart = useSelector((state) => state.dateStart);

    return (
        <main className="order-page checkout">
            <h2 className="visually-hidden">Страница подтвержденного заказа</h2>
            <MainHeader additionalStyleName={"order-page__header"} />
            <section className="order-page__content">
                <div className="order-page__nav">
                    <span className="order-nav__item checkout__order-info">Заказ номер RU58491823</span>
                </div>
                <div className="order-page__form">
                    <div className="order-page__form-wrapper result__container">
                        <div className="result__wrapper">
                            <h3 className="checkout__title">Ваш заказ подтверждён</h3>
                            <p className="result__model">{`Hyndai, ${model}`}</p>
                            <p className="result__plate-number">K 761 HA 73</p>
                            <p className="result__additional"><b>Топливо</b> 100%</p>
                            <p className="result__additional"><b>Доступна с </b><span>{dateStart}</span></p>
                        </div>
                        {/* eslint-disable-next-line no-undef */}
                        <img className="result__picture" src={`${process.env.PUBLIC_URL}/img/gallery/image2.png`}
                            alt="ELANTRA view" width="256" height="116"></img>
                    </div>
                    <div className="order-page__receipt-wrapper">
                        <OrderReceipt />
                        <Link to={RoutePath.ORDER} className="button button--submit button--checkout-color">Отменить</Link>
                    </div>
                </div>

            </section >
        </main >
    )
}

export default Checkout;