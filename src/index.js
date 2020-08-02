import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import itemCountReducer from "./reducers/itemCountReducer";
import counterReducer from "./reducers/counterReducer";
import reducers from "./reducers";
const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
