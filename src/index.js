import React from 'react';
import ReactDOM from 'react-dom';

import store, { history } from './store/createStore';

import App from './components/App/App';

import 'typeface-roboto';
import './index.css';

ReactDOM.render(
  <App
    store={store}
    history={history}
  />,
  document.getElementById('root')
);
