import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import React from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/configure-store';
import { BaseLayout as Routes } from './components/common/BaseLayout';

const store = Store();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
    <ToastContainer
      position='top-center'
      hideProgressBar
    />
  </Provider>,
  document.getElementById('root')
);
