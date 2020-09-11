import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import BagItem from "./BagItem";

import User from "./User";
import Wishlist from "./wishlist";
import CardList from "./cardList";
import Header from "./header/header";
import Home from "./home/home";
import Shop from "./shop/shop";
import Contact from "./Contact";
import SignIn from "./singin/SignIn";
import SignUp from "./signup/signup";

const App = () => {
  return (
    <>
      <Header />
      <SignUp></SignUp>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route path="/bagitem" component={BagItem} />
        <Route path="/user" component={User} />
        <Route path="/sigin" component={SignIn} />

        <Route path="/allitems">
          <CardList />
        </Route>
      </Switch>
    </>
  );
};

export default App;
