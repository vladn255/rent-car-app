import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { RoutePath } from '../../const.js';

import MainNav from "../main-nav/main-nav.jsx";
import Main from "../main/main.jsx";
import Order from "../order/order.jsx";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
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
            </BrowserRouter>

        </div>
    );
}

export default App;
