import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Store from "./store/configure-store";
import App from './App';

const store = Store();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
