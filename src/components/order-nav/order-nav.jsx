const OrderNav = () => {
    return (
        <ol className="order-page__nav order-nav">
            <li className="order-nav__item">
                <button className="order-nav__button order-nav__button--active" type="button">
                    Местоположение
                </button>
            </li>
            <li className="order-nav__item">
                <button className="order-nav__button" type="button" disabled>
                    Модель
                </button>
            </li>
            <li className="order-nav__item">
                <button className="order-nav__button" type="button" disabled>
                    Дополнительно
                </button>
            </li>
            <li className="order-nav__item">
                <button className="order-nav__button" type="button" disabled>
                    Итого
                </button>
            </li>
        </ol>
    )
}

export default OrderNav;