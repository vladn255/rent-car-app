import { TabNames } from "../../const";

const OrderNavItem = ({ tab, tabButtonClickHandler, isActiveTab, isTabDisabled }) => {

    return (
        <li className="order-nav__item" data-tab={tab} onClick={tabButtonClickHandler} >
            <button className={`order-nav__button ${isActiveTab ? "order-nav__button--active" : ""} ${isTabDisabled ? "order-nav__button--disabled" : ""}`} type="button" >
                {TabNames[tab]}
            </button>
        </li >
    )
}

export default OrderNavItem;