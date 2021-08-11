import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";

import { ReceiptNames, TIME_FORMAT, ReceiptCosts } from "../../const";
import { isDateValid } from "../../utils";
import OrderReceiptItem from "../order-receipt-item/order-receipt-item";
import { setPrice } from "../../store/action";

dayjs.extend(CustomParseFormat)

const HOURS_IN_A_DAY = 24;
const MINUTES_IN_AN_HOUR = 60;
const DAYS_IN_A_WEEK = 7;
const minutesInADay = HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR

const RateUnitDividers = {
    "мин": 1,
    "сутки": MINUTES_IN_AN_HOUR * HOURS_IN_A_DAY,
    "7 дней": MINUTES_IN_AN_HOUR * HOURS_IN_A_DAY * DAYS_IN_A_WEEK
}

const getDaysDuration = (durationInMinutes) => {
    const duration = Math.trunc(durationInMinutes / minutesInADay)
    return duration !== 0
        ? `${duration}д`
        : ''
}
const getHoursDuration = (durationInMinutes) => {
    const duration = Math.trunc(durationInMinutes / MINUTES_IN_AN_HOUR % HOURS_IN_A_DAY)
    return duration !== 0
        ? `${duration}ч`
        : ''
}
const getMinutesDuration = (durationInMinutes) => {
    const duration = Math.trunc(durationInMinutes / Math.trunc(durationInMinutes / MINUTES_IN_AN_HOUR % HOURS_IN_A_DAY) % MINUTES_IN_AN_HOUR)
    return (duration !== 0) && (!isNaN(duration))
        ? `${duration}м`
        : ''
}

const getDurationCost = (rate, duration) => {
    const divider = RateUnitDividers[rate.unit]
    return Math.floor(rate.price * duration / divider)
}

const getCurrentCost = (list) => {
    let cost = 0;
    list.map((item) => {
        if (item.price) {
            cost = cost + item.price
        }
    })
    return cost
}

const OrderReceipt = () => {
    const dispatch = useDispatch();

    const city = useSelector((state) => state.city);
    const pickpoint = useSelector((state) => state.pickpoint);
    const model = useSelector((state) => state.model);
    const color = useSelector((state) => state.color);
    const rate = useSelector((state) => state.rate);
    const additions = useSelector((state) => state.additions);
    const dateStart = useSelector((state) => state.dateStart);
    const dateFinish = useSelector((state) => state.dateFinish);

    let duration = 0;

    const getDuration = (finishData, startData) => {
        if (isDateValid(finishData) && isDateValid(startData)) {
            duration = dayjs(finishData.value, TIME_FORMAT).diff(dayjs(startData.value, TIME_FORMAT), 'minute');
            return `${getDaysDuration(duration)}${getHoursDuration(duration)}${getMinutesDuration(duration)}`
        }
        return ''
    }

    const initialDetails = [
        {
            name: `Пункт выдачи`,
            value: [city.name, pickpoint.name].join(``),
            text: [city.name, pickpoint.name].join(`\n`)
        },
        {
            name: `Модель`,
            value: model.name,
            text: model.name,
            price: model.priceMin
        },
        {
            name: `Цвет`,
            value: color,
            text: color
        },
        {
            name: `Длительность аренды`,
            value: getDuration(dateFinish, dateStart),
            text: getDuration(dateFinish, dateStart),
            price: getDurationCost(rate, duration)
        },
        {
            name: `Тариф`,
            value: rate.name,
            text: rate.name
        },
    ]

    const [details, setDetails] = useState(initialDetails);
    const [cost, setCost] = useState(0)

    useEffect(() => {
        const newDetails = initialDetails.slice();

        additions.slice().forEach((feature) => {
            const newItem = {
                name: ReceiptNames[feature],
                value: feature,
                text: `Да`,
                price: ReceiptCosts[feature]
            };

            if (!newDetails.includes(newItem)) {
                newDetails.push(newItem);
            }
        })

        if (!(JSON.stringify(details) === JSON.stringify(newDetails))) {
            const newCost = getCurrentCost(newDetails)
            setCost(newCost)
            dispatch(setPrice(newCost))
            setDetails(newDetails);
        }

    }, [additions, initialDetails, cost])


    return (
        <div className="order-page__receipt receipt">
            <h3 className="receipt__title">Ваш заказ:</h3>
            <ul className="receipt__list">
                {details.filter((detail) => detail.value.length !== 0)
                    .map((detail) => <OrderReceiptItem key={detail.name} name={detail.name} value={detail.text} />)}
            </ul>
            <p className="receipt__cost"><b>Цена:</b>{` ${cost} ₽`}</p>
        </div>
    )
}

export default OrderReceipt;