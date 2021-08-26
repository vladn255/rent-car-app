import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFuelTank } from "../../utils.js";
import { setFuelTank } from "../../store/action.js";

import OrderReceipt from "../order-receipt/order-receipt.jsx";
import ModelPhoto from "../model-photo/model-photo.jsx";
import ModalCheckout from "../modal-checkout/modal-checkout.jsx";

const RESULT_FORM_PHOTO_CLASS = "result__picture"

const ResultForm = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const model = useSelector((state) => state.model);
    const dateStart = useSelector((state) => state.dateStart);
    const additionsList = useSelector((state) => state.additions)

    const fuel = getFuelTank(additionsList, model.tank)
    dispatch(setFuelTank(fuel))

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
                    <p className="result__additional"><b>Топливо </b>{`${fuel}%`}</p>
                    <p className="result__additional"><b>Доступна с </b><span>{dateStart.value}</span></p>
                </div>
                <ModelPhoto name={model.name} imgSrc={model.thumbnail.path} className={RESULT_FORM_PHOTO_CLASS} />
            </div>

            <div className="order-page__receipt-wrapper">
                <OrderReceipt />
                <button className="button button--submit" type="button" onClick={modalButtonClickHandler}>Заказать</button>
            </div>
            <ModalCheckout isModalOpen={isModalOpen} clickHandler={modalButtonClickHandler} />
        </div>
    )
}

export default ResultForm;