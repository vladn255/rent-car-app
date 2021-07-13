import OrderReceipt from "../order-receipt/order-receipt.jsx";

const FeaturesForm = () => {
    return (
        <form className=" features-form form">
            <div className="order-page__form">
                <div className="order-page__form-wrapper features-form__wrapper">
                    <fieldset className="features-form__fieldset features-form__fieldset--color form__fieldset">
                        <legend className="features-form__legend form__legend">Цвет</legend>
                        <ul className="features-form__list features-form__list--color">
                            <li className="features-form__item">
                                <input className="features-form__input form__input form__input--radio visually-hidden" type="radio" name="color" id="all-color" value="all-color" ></input>
                                <label className="features-form__label form__label form__label--radio" htmlFor="all-color">Любой</label>
                            </li>
                            <li className="features-form__item">
                                <input className="features-form__input form__input form__input--radio visually-hidden" type="radio" name="color" id="red" value="red"></input>
                                <label className="features-form__label form__label form__label--radio" htmlFor="red">Красный</label>
                            </li>
                            <li className="features-form__item">
                                <input className="features-form__input form__input form__input--radio visually-hidden" type="radio" name="color" id="blue" value="blue" checked></input>
                                <label className="features-form__label form__label form__label--radio" htmlFor="blue">Голубой</label>
                            </li>
                        </ul>
                    </fieldset>

                    <fieldset className="features-form__fieldset features-form__fieldset--date form__fieldset">
                        <legend className="features-form__legend form__legend">Дата аренды</legend>
                        <ul className="features-form__list features-form__list--date">
                            <li className="features-form__item">
                                <input className="features-form__input form__input" name="date-from" id="date-from" value="12.06.2019 12:00" placeholder="Введите дату и время"></input>
                                <label className="features-form__label form__label" htmlFor="city">С</label>
                                <div className="form__reset-button-wrapper">
                                    <button className="features-form__button form__reset-button" type="button"></button>
                                </div>
                            </li>
                            <li className="features-form__item">
                                <input className="features-form__input form__input" name="date-to" id="date-to" value="" placeholder="Введите дату и время"></input>
                                <label className="features-form__label form__label" htmlFor="date-to">По</label>
                                {/* <div className="form__reset-button-wrapper">
                                <button className="features-form__button form__reset-button" type="button"></button>
                            </div> */}
                            </li>
                        </ul>
                    </fieldset>

                    <fieldset className="features-form__fieldset features-form__fieldset--rate form__fieldset">
                        <legend className="features-form__legend form__legend">Тариф</legend>
                        <ul className="features-form__list features-form__list--rate">
                            <li className="features-form__item">
                                <input className="features-form__input form__input form__input--radio visually-hidden" type="radio" name="rate" id="by-minute" value="by-minute" ></input>
                                <label className="features-form__label form__label form__label--radio" htmlFor="by-minute">Поминутно, 7₽/мин</label>
                            </li>
                            <li className="features-form__item">
                                <input className="features-form__input form__input form__input--radio visually-hidden" type="radio" name="rate" id="by-day" value="by-day" checked></input>
                                <label className="features-form__label form__label form__label--radio" htmlFor="by-day">На сутки, 1999₽/мин</label>
                            </li>
                        </ul>
                    </fieldset>

                    <fieldset className="features-form__fieldset features-form__fieldset--additional form__fieldset">
                        <legend className="features-form__legend form__legend">Доп услуги</legend>
                        <ul className="features-form__list features-form__list--additional">
                            <li className="features-form__item">
                                <input className="features-form__input form__input form__input--checkbox visually-hidden" type="checkbox" name="additional" id="full-tank" value="full-tank"></input>
                                <label className="features-form__label form__label form__label--checkbox" htmlFor="full-tank">Полный бак, 500₽</label>
                                <div className="form__label-tick"></div>
                            </li>
                            <li className="features-form__item">
                                <input className="features-form__input form__input form__input--checkbox visually-hidden" type="checkbox" name="additional" id="child-seat" value="child-seat" ></input>
                                <label className="features-form__label form__label form__label--checkbox" htmlFor="child-seat">Детское кресло, 200₽</label>
                                <div className="form__label-tick"></div>
                            </li>
                            <li className="features-form__item">
                                <input className="features-form__input form__input form__input--checkbox visually-hidden" type="checkbox" name="additional" id="right-wheel" value="right-wheel" ></input>
                                <label className="features-form__label form__label form__label--checkbox" htmlFor="right-wheel">Правый руль, 1600₽</label>
                                <div className="form__label-tick"></div>
                            </li>
                        </ul>
                    </fieldset>
                </div>
                <div className="order-page__receipt-wrapper">
                    <OrderReceipt />
                    <button className="button button--submit" type="submit" disabled>Итого</button>
                </div>
            </div>
        </form>
    )
}

export default FeaturesForm;