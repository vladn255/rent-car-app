import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"

import { RECEIPT } from "../../mocks";
import { ReceiptNames,
     TIME_FORMAT
     } from "../../const";
import OrderReceiptItem from "../order-receipt-item/order-receipt-item";

dayjs.extend(customParseFormat)

const HOURS_IN_A_DAY = 24;

const getDuration = (finishData, startData) => {
    if (finishData.valid && startData.valid) {        
        const duration = dayjs(finishData.value, TIME_FORMAT).diff(dayjs(startData.value, TIME_FORMAT), 'hour');
        const durationDays = Math.trunc(duration / HOURS_IN_A_DAY);
        const durationHours = duration % HOURS_IN_A_DAY;
        return `${durationDays}д${durationHours}ч`
    }
    return ''
}

const OrderReceipt = () => {

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
            value: getDuration(dateFinish, dateStart),
            text: getDuration(dateFinish, dateStart)
        },
        {
            name: `Тариф`,
            value: rate,
            text: rate
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