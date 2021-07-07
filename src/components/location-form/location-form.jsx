import Map from "../map/map.jsx";
import OrderReceipt from "../order-receipt/order-receipt.jsx";

const LocationForm = () => {
    return (
        <form className="order-page__form location-form form">
            <div className="location-form__wrapper">
                <fieldset className="location-form__fieldset form__fieldset">
                    <legend className="visually-hidden">Форма выбора местоположения</legend>
                    <ul className="location-form__list">
                        <li className="location-form__item">
                            <input className="location-form__input form__input" name="city" id="city" value="Ульяновск" placeholder="Начните вводить город"></input>
                            <label className="location-form__label form__label" htmlFor="city">Город</label>
                            <div className="form__reset-button-wrapper">
                                <button className="location-form__button form__reset-button" type="button"></button>
                            </div>
                        </li>
                        <li className="location-form__item">
                            <input className="location-form__input form__input" name="pickpoint" id="pickpoint" value="" placeholder="Начните вводить пункт ..."></input>
                            <label className="location-form__label form__label" htmlFor="pickpoint">Пункт выдачи</label>
                            <div className="form__reset-button-wrapper">
                                <button className="location-form__button form__reset-button" type="button"></button>
                            </div>
                        </li>
                    </ul>
                </fieldset>

                <div className="order-page__selection location-form__map">
                    <h3 className="location-form__text">Выбрать на карте:</h3>
                    <Map />
                </div>
            </div>

            <div className="order-page__receipt-wrapper">
                <OrderReceipt />
                <button className="button button--submit" type="submit" disabled>Выбрать модель</button>
            </div>

        </form>

    )
}

export default LocationForm;