import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
//import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import selectionReducer from "./store/reducers/selectionReducer";
import UserReducers from "./store/reducers/userReducers";

const rootReducer = combineReducers({
  product: productReducer,
  selection: selectionReducer,
  user: UserReducers
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
