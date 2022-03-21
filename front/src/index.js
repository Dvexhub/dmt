import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/Global.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './Redux/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
