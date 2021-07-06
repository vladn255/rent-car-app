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
                        Ульяновск,<br /> Нариманова 42
                    </span>
                </li>
            </ul>
            <p className="receipt__cost"><b>Цена:</b> от 8 000 до 12 000 ₽</p>
        </div>
    )
}

export default OrderReceipt;