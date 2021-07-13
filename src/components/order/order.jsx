import { connect } from "react-redux";

import { Tabs } from "../../const.js";

import FeaturesForm from "../features-form/features-form";
import LocationForm from "../location-form/location-form";
import MainHeader from "../main-header/main-header";
import ModelForm from "../model-form/model-form";
import OrderNav from "../order-nav/order-nav";
import ResultForm from "../result-form/result-form";

const Order = ({ activeTab }) => {
    const currentTab = (tab) => {
        switch (tab) {
            case Tabs.get("LOCATION"):
                return <LocationForm />;
            case Tabs.get("MODEL"):
                return <ModelForm />;
            case Tabs.get("ADDITIONS"):
                return <FeaturesForm />;
            case Tabs.get("RESULT"):
                return <ResultForm />;
            default:
                return <LocationForm />;
        }
    }

    return (
        <main className="order-page">
            <h2 className="visually-hidden">Страница заказа</h2>
            <MainHeader additionalStyleName={"order-page__header"} />
            <section className="order-page__content">
                <OrderNav activeTab={activeTab} />

                {currentTab(activeTab)}
            </section>
        </main>
    )
}

const mapStateToProps = ({ activeTab }) => ({
    activeTab
})

export default connect(mapStateToProps)(Order);