import React from "react";
import { RECEIPT } from "../../mocks";

const OrderReceipt = () => {


    return (
        <div className="order-page__receipt receipt">
            <h3 className="receipt__title">Ваш заказ:</h3>
            <ul className="receipt__list">
                <li className="receipt__item">
                    <span className="receipt__key">
                        Пункт выдачи
                    </span>
                    <span className="receipt__value">
                        {RECEIPT.city},<br /> {RECEIPT.pickpoint}
                    </span>
                </li>
                <li className="receipt__item">
                    <span className="receipt__key">
                        Модель
                    </span>
                    <span className="receipt__value">
                        {RECEIPT.model}
                    </span>
                </li>
                <li className="receipt__item">
                    <span className="receipt__key">
                        Цвет
                    </span>
                    <span className="receipt__value">
                        {RECEIPT.color}
                    </span>
                </li>
                <li className="receipt__item">
                    <span className="receipt__key">
                        Длительность аренды
                    </span>
                    <span className="receipt__value">
                        {RECEIPT.duration}
                    </span>
                </li>
                <li className="receipt__item">
                    <span className="receipt__key">
                        Тариф
                    </span>
                    <span className="receipt__value">
                        {RECEIPT.rate}
                    </span>
                </li>
                <li className="receipt__item">
                    <span className="receipt__key">
                        Полный бак
                    </span>
                    <span className="receipt__value">
                        {RECEIPT.fullTank}
                    </span>
                </li>

            </ul>
            <p className="receipt__cost"><b>Цена:</b>{RECEIPT.cost}</p>
        </div>
    )
}

export default OrderReceipt;