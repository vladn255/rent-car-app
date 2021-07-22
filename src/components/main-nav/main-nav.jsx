import React, { useState } from "react";

import { LANGUAGES } from "../../const.js";

import Socials from "../socials/socials";

const MainNav = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [isLangEng, setIsLangEng] = useState(true);

    const menuToggleClickHandler = (evt) => {
        evt.preventDefault();
        setIsMenuOpened(!isMenuOpened);
    }

    const langToggleClickHandler = (evt) => {
        evt.preventDefault();
        setIsLangEng(!isLangEng);
    }

    return (
        <nav className={`main-nav main-nav${isMenuOpened ? '--opened' : '--closed'}`}>
            <div className="main-nav__burger-wrapper" onClick={menuToggleClickHandler}>
                <button className="main-nav__burger" type="button">
                    <span className="visually-hidden">Открыть/закрыть меню</span>
                </button>
            </div>
            <ul className="main-nav__features features">
                <li className="features__item">
                    <a className="features__link" href="/#">
                        Парковка
                    </a>
                </li>
                <li className="features__item">
                    <a className="features__link" href="/#">
                        Страховка
                    </a>
                </li>
                <li className="features__item">
                    <a className="features__link" href="/#">
                        Бензин
                    </a>
                </li>
                <li className="features__item">
                    <a className="features__link" href="/#">
                        Обслуживание
                    </a>
                </li>
            </ul>
            <Socials />
            <div className="main-nav__lang-wrapper" onClick={langToggleClickHandler}>
                <button className="main-nav__lang-toggle" type="button" >
                    {isLangEng ? LANGUAGES.eng : LANGUAGES.rus}
                </button>
            </div>
        </nav>
    )
}

export default MainNav;