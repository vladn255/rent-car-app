import dayjs from "dayjs";
import CustomParseFormat from "dayjs/plugin/customParseFormat";

import { DATE_LETTER_COUNT, ORDER_STATUS_ID, Additionals, FULL_TANK_FUEL, TIME_FORMAT } from "./const.js"

dayjs.extend(CustomParseFormat)

const isDateValid = (dateType) => dateType.valid && dateType.value.length === DATE_LETTER_COUNT

const adaptOrderToPost = (cityId, pointId, carId, color, dateFrom, dateTo, rateId, price, additions) => {
    const getAdditionalsStatus = (feature) => {
        return additions.includes(feature)
    }
    const parseDate = (dateString) => {
        return dayjs(dateString, TIME_FORMAT).valueOf()
    }

    return {
        "orderStatusId": ORDER_STATUS_ID,
        "cityId": cityId,
        "pointId": pointId,
        "carId": carId,
        "color": color,
        "dateFrom": parseDate(dateFrom),
        "dateTo": parseDate(dateTo),
        "rateId": rateId,
        "price": price,
        "isFullTank": getAdditionalsStatus(Additionals.FULL_TANK),
        "isNeedChildChair": getAdditionalsStatus(Additionals.CHILD_SEAT),
        "isRightWheel": getAdditionalsStatus(Additionals.RIGHT_WHEEL)
    }
}

const adaptPostToOrder = (data) => {
    const parseDate = (dateNumber) => {
        return dayjs(dateNumber).format(TIME_FORMAT)
    }

    return {
        orderStatusId: data["orderStatusId"],
        city: data["cityId"],
        point: data["pointId"],
        car: data["carId"],
        color: data["color"],
        dateFrom: parseDate(data["dateFrom"]),
        dateTo: parseDate(data["dateTo"]),
        rate: data["rateId"],
        price: data["price"],
        isFullTank: data["isFullTank"],
        isNeedChildChair: data["isNeedChildChair"],
        isRightWheel: data["isRightWheel"]
    }
}

const getFuelTank = (featuresList, fuelValue) => {
    return featuresList.includes(Additionals.FULL_TANK)
        ? FULL_TANK_FUEL
        : fuelValue
}

export {
    isDateValid,
    adaptOrderToPost,
    adaptPostToOrder,
    getFuelTank
}