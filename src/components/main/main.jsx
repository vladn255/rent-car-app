import React from "react";

import Banner from "../banner/banner.jsx";
import MainFooter from "../main-footer/main-footer.jsx";
import MainHeader from "../main-header/main-header.jsx";
import Slider from "../slider/slider.jsx";

const Main = () => {
    return (
        <main className="main">
            <section className="main__wrapper">
                <MainHeader />
                <Banner />
                <MainFooter />
            </section>

            <Slider />
        </main>
    )
}

export default Main;