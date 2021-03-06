import React from "react";
import { Switch, Route } from 'react-router-dom';

import { RoutePath } from '../../const.js';

import MainNav from "../main-nav/main-nav.jsx";
import Main from "../main/main.jsx";
import Order from "../order/order.jsx";
import Checkout from "../checkout/checkout.jsx";

function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path={RoutePath.MAIN}>
                    <MainNav />
                    <Main />
                </Route>
            </Switch>

            <Route exact path={RoutePath.ORDER}>
                <MainNav />
                <Order />
            </Route>

            <Route exact path={`${RoutePath.CHECKOUT}:id`}>
                <MainNav />
                <Checkout />
            </Route>
        </div>
    );
}

export default App;
