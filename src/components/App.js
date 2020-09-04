import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import BagItem from "./BagItem";

import User from "./User";
import Wishlist from "./wishlist";
import CardList from "./cardList";
import Header from "./header/header";
import Home from "./screens/home";
import Shop from "./screens/shop";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/bagitem" component={BagItem} />
        <Route path="/user" component={User} />
        <Route path="/allitems">
          <CardList />
        </Route>
      </Switch>
    </>
  );
};

export default App;
