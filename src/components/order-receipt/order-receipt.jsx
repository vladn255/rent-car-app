import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RECEIPT } from "../../mocks";
import { ReceiptNames } from "../../const";
import OrderReceiptItem from "../order-receipt-item/order-receipt-item";

const OrderReceipt = () => {
    const getDuration = () => {
        if (dateFinish.length !== 0 && dateStart.length !== 0) {
            const durationDate = new Date(new Date(dateFinish) - new Date(dateStart));
            return `${durationDate.getDate()}д${durationDate.getHours()}ч`
        }
        return ''
    }
    const city = useSelector((state) => state.city);
    const pickpoint = useSelector((state) => state.pickpoint);
    const model = useSelector((state) => state.model);
    const color = useSelector((state) => state.color);
    const rate = useSelector((state) => state.rate);
    const additions = useSelector((state) => state.additions);
    const dateStart = useSelector((state) => state.dateStart);
    const dateFinish = useSelector((state) => state.dateFinish);

    const initialDetails = [
        {
            name: `Пункт выдачи`,
            value: [city, pickpoint].join(``),
            text: [city, pickpoint].join(`\n`)
        },
        {
            name: `Модель`,
            value: model,
            text: model
        },
        {
            name: `Цвет`,
            value: color,
            text: ReceiptNames[color]
        },
        {
            name: `Длительность аренды`,
            value: getDuration(),
            text: getDuration()
        },
        {
            name: `Тариф`,
            value: rate,
            text: ReceiptNames[rate]
        },
    ]
    const [details, setDetails] = useState(initialDetails);

    useEffect(() => {
        const newDetails = initialDetails.slice();

        additions.slice().forEach((feature) => {
            const newItem = {
                name: ReceiptNames[feature],
                value: feature,
                text: `Да`
            };

            if (!newDetails.includes(newItem)) {
                newDetails.push(newItem);
            }
        })

        if (!(JSON.stringify(details) === JSON.stringify(newDetails))) {
            setDetails(newDetails);
        }

    }, [additions, initialDetails])


    return (
        <div className="order-page__receipt receipt">
            <h3 className="receipt__title">Ваш заказ:</h3>
            <ul className="receipt__list">
                {details.filter((detail) => detail.value.length !== 0)
                    .map((detail) => <OrderReceiptItem key={detail.name} name={detail.name} value={detail.text} />)}
            </ul>
            <p className="receipt__cost"><b>Цена:</b>{RECEIPT.cost}</p>
        </div>
    )
}

export default OrderReceipt;