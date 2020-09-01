import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import itemCountReducer from "./reducers/itemCountReducer";
import counterReducer from "./reducers/counterReducer";
// import reducers from "./reducers";
import userReducer from "./reducers/userReducer";
import songsReducer from "./reducers/songReducer";
import selectedSongReducer from "./reducers/selectedSongReducer";

const rootReducer = combineReducers({
  creducer: counterReducer,
  user: userReducer,
  songred: songsReducer,
  selectedSongRed: selectedSongReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
