import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './stores/store';
import { Provider } from 'react-redux';
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>   
  </React.StrictMode>,
  document.getElementById('root')
);