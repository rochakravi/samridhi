import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SongList from "./SongList";
import BagItem from "./BagItem";
import Counter from "./Counter";
import Cart from "./Cart";
import Card from "./Card";
import User from "./User";
import Wishlist from "./wishlist";
import CardList from "./cardList";

const App = () => {
  return (
    <Router>
      <Link to="/user">Profile |</Link>
      <Link to="/wishlist">Wishlist |</Link>
      <Link to="/bagitem">BagItem |</Link>
      <Link to="/allitems"> All items| </Link>

      <Switch>
        <Route path="/user">
          <User />{" "}
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/bagitem">
          <BagItem />
        </Route>
        <Route path="/allitems">
          <CardList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
