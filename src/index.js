import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { createStore } from "redux"
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllReducers from "./reducer"

const store = createStore(AllReducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);