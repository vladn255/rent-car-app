import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { RoutePath, FULL_TANK_FUEL } from "../../const.js";

import { fetchOrderData } from "../../store/api-action.js";

import MainHeaderLink from "../main-header-link/main-header-link";
import OrderReceiptCheckout from "../order-receipt-checkout/order-receipt-checkout";
import ModelPhoto from "../model-photo/model-photo.jsx";

const RESULT_FORM_PHOTO_CLASS = "result__picture"

const Checkout = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const [orderData, setOrderData] = useState(null)
    const [fuel, setFuel] = useState(FULL_TANK_FUEL)

    useEffect(() => {
        
        if (orderData === null) {
            dispatch(fetchOrderData(id))
                .then((data) => {
                    setOrderData(data)

                    data.isFullTank
                        ? setFuel(FULL_TANK_FUEL)
                        : setFuel(data.car.tank)
                })
        }
    }, [orderData])

    return (
        <>
            {orderData === null
                ? <h2>Данные загружаются</h2>
                : <main className="order-page checkout">
                    <h2 className="visually-hidden">Страница подтвержденного заказа</h2>
                    <MainHeaderLink additionalStyleName={"order-page__header"} />
                    <section className="order-page__content">
                        <div className="order-page__nav">
                            <span className="order-nav__item checkout__order-info">{`Заказ номер ${id}`}</span>
                        </div>
                        <div className="order-page__form">
                            <div className="order-page__form-wrapper result__container">
                                <div className="result__wrapper">
                                    <h3 className="checkout__title">Ваш заказ подтверждён</h3>
                                    <p className="result__model">{orderData.car.name}</p>
                                    <p className="result__plate-number">{orderData.car.number}</p>
                                    <p className="result__additional"><b>Топливо </b>{`${fuel}%`}</p>
                                    <p className="result__additional"><b>Доступна с </b><span>{orderData.dateFrom}</span></p>
                                </div>
                                <ModelPhoto name={orderData.car.name} imgSrc={orderData.car.thumbnail.path} className={RESULT_FORM_PHOTO_CLASS} />
                            </div>
                            <div className="order-page__receipt-wrapper">
                                <OrderReceiptCheckout data={orderData}/>
                                <Link to={RoutePath.ORDER} className="button button--submit button--checkout-color">Отменить</Link>
                            </div>
                        </div>

                    </section >
                </main >
            }
        </>
    )
}

export default Checkout;