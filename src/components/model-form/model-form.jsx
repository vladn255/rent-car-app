import OrderReceipt from "../order-receipt/order-receipt.jsx";

const ModelForm = () => {
    return (
        <form className="order-page__form model-form form">
            <div className="model-form__wrapper">
                <fieldset className="order-page__fieldset model-form__fieldset form__fieldset">
                    <legend className="visually-hidden">Форма выбора модели</legend>
                    <ul className="model-form__list">
                        <li className="model-form__item">
                            <input className="model-form__input form__input form__input--model-type" type="radio" name="model-type" id="all-models" value="all-models"></input>
                            <label className="model-form__label form__label" htmlFor="all-models">Все модели</label>
                        </li>
                        <li className="model-form__item">
                            <input className="model-form__input form__input form__input--model-type" type="radio" name="model-type" id="economy" value="economy"></input>
                            <label className="model-form__label form__label" htmlFor="economy">Эконом</label>
                        </li>
                        <li className="model-form__item">
                            <input className="model-form__input form__input form__input--model-type" type="radio" name="model-type" id="premium" value="premium"></input>
                            <label className="model-form__label form__label" htmlFor="premium">Премиум</label>
                        </li>
                    </ul>
                </fieldset>

                <div className="order-page__selection model-form__gallery gallery">
                    <article className="gallery__item">
                        <button className="gallery__model-wrapper" type="button">
                            <h4 className="gallery__title">ELANTRA</h4>
                            <p className="gallery__text">12 000 - 25 000 ₽</p>
                            <img src={`${process.env.PUBLIC_URL}/img/gallery/image1.png`}
                                alt="ELANTRA view" width="256" height="116" />
                        </button>
                    </article>

                    <article className="gallery__item">
                        <button className="gallery__model-wrapper" type="button">
                            <h4 className="gallery__title">i30 N</h4>
                            <p className="gallery__text">10 000 - 32 000 ₽</p>
                            <img src={`${process.env.PUBLIC_URL}/img/gallery/image2.png`}
                                alt="i30 N view" width="256" height="116" />
                        </button>
                    </article>

                    <article className="gallery__item">
                        <button className="gallery__model-wrapper" type="button">
                            <h4 className="gallery__title">CRETA</h4>
                            <p className="gallery__text">12 000 - 25 000 ₽</p>
                            <img src={`${process.env.PUBLIC_URL}/img/gallery/image3.png`}
                                alt="CRETA view" width="256" height="116" />
                        </button>
                    </article>

                    <article className="gallery__item">
                        <button className="gallery__model-wrapper" type="button">
                            <h4 className="gallery__title">ELANTRA</h4>
                            <p className="gallery__text">12 000 - 25 000 ₽</p>
                            <img src={`${process.env.PUBLIC_URL}/img/gallery/image1.png`}
                                alt="ELANTRA view" width="256" height="116" />
                        </button>
                    </article>

                    <article className="gallery__item">
                        <button className="gallery__model-wrapper" type="button">
                            <h4 className="gallery__title">i30 N</h4>
                            <p className="gallery__text">10 000 - 32 000 ₽</p>
                            <img src={`${process.env.PUBLIC_URL}/img/gallery/image2.png`}
                                alt="i30 N view" width="256" height="116" />
                        </button>
                    </article>

                    <article className="gallery__item">
                        <button className="gallery__model-wrapper" type="button">
                            <h4 className="gallery__title">CRETA</h4>
                            <p className="gallery__text">12 000 - 25 000 ₽</p>
                            <img src={`${process.env.PUBLIC_URL}/img/gallery/image3.png`}
                                alt="CRETA view" width="256" height="116" />
                        </button>
                    </article>


                </div>
            </div>

            <div className="order-page__receipt-wrapper">
                <OrderReceipt />
                <button className="button button--submit" type="submit" disabled>Дополнительно</button>
            </div>
        </form>
    )
}

export default ModelForm;