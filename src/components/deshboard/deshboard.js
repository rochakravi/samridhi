import React, { Component } from 'react'
import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import BagItem from "./BagItem";

import User from "../../components/User";
import Wishlist from "../../components/wishlist";
import CardList from "../../components/cardList";
import Header from "../../components/header/header";
import Home from "../../components/home/home";
import Shop from "../../components/shop/shop";
import Contact from "../../components/Contact";
import SignIn from "../../components/singin/SignIn";
import SignUp from "../../components/signup/signup";
import CartItems from "../../components/cart/cartItems";
import WishList from "../../components/wishlist/wishList";
import Payment from "../../components/payment/payment";
import RouteName from "../../components/RouteName/routeName";


export class deshboard extends Component {
    render() {
        return (
            <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/shop" component={Shop} />
              <Route path="/contact" component={Contact} />
              <Route path="/user" component={User} />
              <Route path="/sigin" component={SignIn} />
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/cart" component={CartItems}></Route>
              <Route path="/wishlist" component={WishList}></Route>
              <Route path="/payment" component={Payment}></Route>
              <Route exact path="/:routeName" component={RouteName}></Route>
            </Switch>
            </>
        )
    }
}

export default deshboard
