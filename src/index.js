import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import userReducer from "./reducers/userReducer";

import productReducer from "./reducers/productReducer";
import selectionReducer from "./reducers/selectionReducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  selection: selectionReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
