import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { Cart } from "./Models/Cart";
import { CartActionTypes, DispatchType } from "./Store/actions/cartTypes";
import "bootstrap/dist/css/bootstrap.css";
import cartReducer from "./Store/reducers/cartReducer";
//import { watchCart } from "./Store/sagas";
import { composeWithDevTools } from "redux-devtools-extension";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// //for dev tools
// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

const rootReducer = combineReducers({
  cart: cartReducer,
});

// for now only old cart reducer
/*const store: Store<Cart, CartActionTypes> & {
  dispatch: DispatchType;
} = createStore(cartReducer, applyMiddleware(thunk));
*/

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

//sagaMiddleware.run(watchCart);

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
