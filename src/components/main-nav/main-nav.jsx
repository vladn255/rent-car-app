const MainNav = () => {
    return (
        <nav className="main-nav">
            <div className="main-nav__burger-wrapper main-nav__burger-wrapper--closed">
                <button className="main-nav__burger" type="button">
                    <span className="visually-hidden">Открыть/закрыть меню</span>
                </button>
            </div>
            <ul className="main-nav__features visually-hidden">
                <li className="main-nav__feature">
                    <a className="main-nav__link" href="/#">
                        Парковка
                    </a>
                </li>
                <li className="main-nav__feature">
                    <a className="main-nav__link" href="/#">
                        Страховка
                    </a>
                </li>
                <li className="main-nav__feature">
                    <a className="main-nav__link" href="/#">
                        Бензин
                    </a>
                </li>
                <li className="main-nav__feature">
                    <a className="main-nav__link" href="/#">
                        Обслуживание
                    </a>
                </li>
            </ul>
            <ul className="main-nav__socials socials visually-hidden">
                <li className="socials__item socials__item--telegram">
                    <a className="socials__link" href="/#">
                        <svg className="socials__icon">

                        </svg>
                    </a>
                </li>
                <li className="socials__item socials__item--facebook">
                    <a className="socials__link" href="/#">
                        <svg className="socials__icon">

                        </svg>
                    </a>
                </li>
                <li className="socials__item socials__item--instagram">
                    <a className="socials__link" href="/#">
                        <svg className="socials__icon">

                        </svg>
                    </a>
                </li>
            </ul>
            <div className="main-nav__lang-wrapper">
                <button className="main-nav__lang-toggle" type="button">
                    Eng
                </button>
            </div>
        </nav>
    )
}

export default MainNav;