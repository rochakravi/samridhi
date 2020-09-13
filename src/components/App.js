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
import CartItems from "./cart/cartItems";
import WishList from "./wishlist/wishList";

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route path="/bagitem" component={BagItem} />
        <Route path="/user" component={User} />
        <Route path="/sigin" component={SignIn} />
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/allitems">
          <CardList />
        </Route>
        <Route path="/cart" component={CartItems}></Route>
        <Route path="/wishlist" component={WishList}></Route>
      </Switch>
    </>
  );
};

export default App;
