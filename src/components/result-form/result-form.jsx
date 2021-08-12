import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RoutePath, Additionals } from "../../const.js";

import OrderReceipt from "../order-receipt/order-receipt.jsx";
import ModelPhoto from "../model-photo/model-photo.jsx";

const RESULT_FORM_PHOTO_CLASS = "result__picture"
const FULL_TANK_FUEL = '100%'

const getFuelTank = (featuresList, fuelValue) => {
    return featuresList.includes(Additionals.FULL_TANK)
        ? FULL_TANK_FUEL
        : fuelValue
}

const ResultForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const model = useSelector((state) => state.model);
    const dateStart = useSelector((state) => state.dateStart);
    const additionsList = useSelector((state) => state.additions)

    const fuel = getFuelTank(additionsList, model.tank)

    const modalButtonClickHandler = (evt) => {
        evt.preventDefault();
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className="order-page__form result">
            <div className="order-page__form-wrapper result__container">
                <h3 className="visually-hidden">Детали заказа</h3>
                <div className="result__wrapper">
                    <p className="result__model">{model.name}</p>
                    <p className="result__plate-number">{model.number}</p>
                    <p className="result__additional"><b>Топливо </b>{fuel}</p>
                    <p className="result__additional"><b>Доступна с </b><span>{dateStart.value}</span></p>
                </div>
                <ModelPhoto name={model.name} imgSrc={model.thumbnail.path} className={RESULT_FORM_PHOTO_CLASS} />
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