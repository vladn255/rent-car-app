// import LocationForm from "../location-form/location-form";
import MainHeader from "../main-header/main-header";
import ModelForm from "../model-form/model-form";
import OrderNav from "../order-nav/order-nav";

const Order = () => {
    return (
        <main className="order-page">
            <h2 className="visually-hidden">Страница заказа</h2>
            <MainHeader additionalStyleName={"order-page__header"} />
            <section className="order-page__content">
                <OrderNav />
                {/* <LocationForm /> */}
                <ModelForm />
            </section>
        </main>
    )
}

export default Order;