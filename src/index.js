import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from "redux-thunk";

import './sass/style.scss';
import App from './components/app/app.jsx';

import reducer from './store/reducer.js';
import { createAPI } from './services/api.js';

const api = createAPI();
const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(api))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
