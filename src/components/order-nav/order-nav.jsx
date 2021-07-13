import { useDispatch } from "react-redux";

import { Tabs } from "../../const.js";
import { changeTab } from "../../store/action";

import OrderNavItem from "../order-nav-item/order-nav-item.jsx";


const OrderNav = ({ activeTab }) => {

    const dispatch = useDispatch();
    let isTabDisabled = false;
    let orderNavList = [];

    const tabButtonClickHandler = (evt) => {
        evt.preventDefault();
        dispatch(changeTab(evt.target.closest(".order-nav__item").dataset.tab));
    }

    for (const [, value] of Tabs) {

        orderNavList.push(<OrderNavItem key={value} tab={value} tabButtonClickHandler={tabButtonClickHandler} isActiveTab={value === activeTab} isTabDisabled={isTabDisabled} />)

        if (value === activeTab) {
            isTabDisabled = true;
        }
    }

    return (
        <ol className="order-page__nav order-nav">
            {orderNavList}
        </ol>
    )
}

export default OrderNav;