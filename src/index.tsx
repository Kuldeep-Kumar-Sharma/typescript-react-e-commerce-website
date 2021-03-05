import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, Store } from "redux";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Cart } from "./Models/Cart";
import { CartActionTypes, DispatchType } from "./Actions/types";
import "bootstrap/dist/css/bootstrap.css";
import cartReducer from "./Store/cartReducer";

// for now only cart reducer
const store: Store<Cart, CartActionTypes> & {
  dispatch: DispatchType;
} = createStore(cartReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
