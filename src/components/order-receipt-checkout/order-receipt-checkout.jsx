import React from "react";
import PropTypes from 'prop-types';
import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";

import { ReceiptNames, TIME_FORMAT, Additionals } from "../../const";
import OrderReceiptCheckoutItem from "../order-receipt-item/order-receipt-item";

dayjs.extend(CustomParseFormat)

const HOURS_IN_A_DAY = 24;
const MINUTES_IN_AN_HOUR = 60;
const minutesInADay = HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR

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

const OrderReceiptCheckout = ({ data }) => {
    const {
        city,
        car,
        color,
        dateFrom,
        dateTo,
        isFullTank,
        isNeedChildChair,
        isRightWheel,
        point,
        price,
        rate
    } = data

    let duration = 0;
    const getDuration = (finishData, startData) => {
        duration = dayjs(finishData, TIME_FORMAT).diff(dayjs(startData, TIME_FORMAT), 'minute');
        return `${getDaysDuration(duration)}${getHoursDuration(duration)}${getMinutesDuration(duration)}`
    }

    const getAdditions = () => {
        const additions = [];
        if (isFullTank) {
            additions.push(Additionals.FULL_TANK)
        }
        if (isNeedChildChair) {
            additions.push(Additionals.CHILD_SEAT)
        }
        if (isRightWheel) {
            additions.push(Additionals.RIGHT_WHEEL)
        }

        return additions.map((feature) => {
            return {
                name: ReceiptNames[feature],
                value: feature,
                text: `Да`,
            }
        })
    }

    const details = [
        {
            name: `Пункт выдачи`,
            value: [city.name, point.address].join(``),
            text: [city.name, point.address].join(`\n`)
        },
        {
            name: `Модель`,
            value: car.name,
            text: car.name
        },
        {
            name: `Цвет`,
            value: color,
            text: color
        },
        {
            name: `Длительность аренды`,
            value: getDuration(dateFrom, dateTo),
            text: getDuration(dateFrom, dateTo)
        },
        {
            name: `Тариф`,
            value: rate.rateTypeId.name,
            text: rate.rateTypeId.name
        },
    ].concat(getAdditions())

    return (
        <div className="order-page__receipt receipt">
            <h3 className="receipt__title">Ваш заказ:</h3>
            <ul className="receipt__list">
                {details.filter((detail) => detail.value)
                    .map((detail) => <OrderReceiptCheckoutItem key={detail.name} name={detail.name} value={detail.text} />)}
            </ul>
            <p className="receipt__cost"><b>Цена:</b>{` ${price} ₽`}</p>
        </div>
    )
}

OrderReceiptCheckout.propTypes = {
    data: PropTypes.shape({
        clickHandler: PropTypes.func.isRequired,
        city: PropTypes.object.isRequired,
        car: PropTypes.object.isRequired,
        color: PropTypes.string.isRequired,
        dateFrom: PropTypes.string.isRequired,
        dateTo: PropTypes.string.isRequired,
        isFullTank: PropTypes.bool.isRequired,
        isNeedChildChair: PropTypes.bool.isRequired,
        isRightWheel: PropTypes.bool.isRequired,
        point: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        rate: PropTypes.bool.isRequired
    }).isRequired

}

export default OrderReceiptCheckout;